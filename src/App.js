import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Spacer,
  Link,
} from "@chakra-ui/layout";
import { FaGithub, FaLinkedin, FaSitemap } from "react-icons/fa";
import { useState } from "react";

import profile from "./Assets/images/profile.jpeg";
import react from "./Assets/images/kyKz5.png";
import python from "./Assets/images/python.png";
import chakraLogo from "./Assets/images/chakraLogo.png";
import flaskLogo from "./Assets/images/flaskLogo.png";
import scrumLogo from "./Assets/images/scrumLogo.png";
import idiomaLogo from "./Assets/images/idiomaLogo.png";

import habbits from "./Assets/images/habbits.png";
import finan from "./Assets/images/finan.png";
import lig4 from "./Assets/images/lig4.png";
import hanoi from "./Assets/images/hanoi.png";

function App() {
  const [navBar, setNavBar] = useState(false);

  const changeBack = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  const projects = [
    {
      name: "Lig-4",
      tecnologies: "JS, HTML e CSS",
      projectSize: "Feito em grupo de 4 pessoas",
      description:
        "Trabalho consistia em replicar o jogo Lig-4. Utilizamos o scrum para organizar o projeto, e atuei como Tech Leader.",
      site: "https://kenzie-academy-brasil-developers.github.io/entrega-lig-4-sprint-5-matheusblm/",
      gitHub:
        "https://github.com/Kenzie-Academy-Brasil-Developers/entrega-lig-4-sprint-5-matheusblm",
      image: lig4,
    },
    {
      name: "Torre de hanoi",
      tecnologies: "JS, HTML e CSS",
      projectSize: "Feito em dupla",
      description:
        "Trabalho consistia em replicar o jogo Torre de hanoi. Projeto fetio em dupla, bem simples, um dos primeiros projetos que fiz.",
      site: "https://kenzie-academy-brasil-developers.github.io/entrega-torre-de-hanoi-sprint-5-matheusblm/",
      gitHub:
        "https://github.com/Kenzie-Academy-Brasil-Developers/entrega-torre-de-hanoi-sprint-5-matheusblm",
      image: hanoi,
    },
    {
      name: "Projeto Habitos",
      tecnologies: "React",
      projectSize: "Feito em grupo de 4 pessoas",
      description:
        "Primeiro trabalho em grupo em React, divemos algumas dificudlades na hora de elaborar as sprints e o backlog do produto, por nao termos muito conhecimento de qual seria a melhroa forma de fazer isso em react. Porem conseguimos vencer essas dificuldades e entregar o projeto.",
      site: "https://projeto-gestao-de-habitos-eta.vercel.app/",
      gitHub: "https://github.com/laudemirjunior/daily-health",
      image: habbits,
    },
    {
      name: "Finan - Gestao Financeira",
      tecnologies: "React",
      projectSize: "Feito em grupo de 5 pessoas",
      description:
        "Foi um trabalho bem desafiador de fazer. Consistia em um site para o usuario ter mais controle de suas financas. Montamos um API estatica com o json-server, e fizemos todo o planjemanto utilizando o scrum. Montamos tambem o style guide com o  figma.",
      site: "https://finan.vercel.app/",
      gitHub: "https://github.com/matheusblm/finan",
      image: finan,
    },
  ];
  window.addEventListener("scroll", changeBack);
  return (
    <Box
      className="App"
      fontFamily="Space Grotesk"
      bg="#0f1624"
      color="#eff3f5"
    >
      <Box
        as="header"
        bg={navBar ? "hsl(232.7,27.3%,23.7%)" : "transparent"}
        position="sticky"
        top="0"
      >
        <Box>
          <Flex justifyContent="flex-end">
            <Flex
              w={["100%", "50%", "50%", "30%"]}
              justifyContent="space-evenly"
              alignContent="center"
              alignItems="center"
              h="60px"
              maxW="400px"
            >
              <Link href="sobre">
                <Heading
                  fontFamily="Space Grotesk"
                  fontSize={["sm", "md", "lg", "lg"]}
                >
                  Sobre
                </Heading>
              </Link>
              <Link href="#projetos">
                <Heading
                  fontFamily="Space Grotesk"
                  fontSize={["sm", "md", "lg", "lg"]}
                >
                  Projetos
                </Heading>
              </Link>
              <Link href="#habilidades">
                <Heading
                  fontFamily="Space Grotesk"
                  fontSize={["sm", "md", "lg", "lg"]}
                >
                  Habilidades
                </Heading>
              </Link>
              <Link href="#contato">
                <Heading
                  fontFamily="Space Grotesk"
                  fontSize={["sm", "md", "lg", "lg"]}
                >
                  Contato
                </Heading>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box w="100%" h="900px">
        <Box h="750px" p="15px" id="#sobre">
          <Flex
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            mt="10"
            w="100%"
            h="85%"
          >
            <Flex
              w="100%"
              maxW="1500px"
              flexDirection={["column", "column", "row", "row"]}
              justifyContent="space-between"
              h="80%"
            >
              <VStack w={["100%", "100%", "45%", "45%"]} alignSelf="center">
                <Text
                  alignSelf="flex-start"
                  fontSize={["xl", "2xl", "3xl", "3xl"]}
                  textAlign="justify"
                >
                  Me chamo{" "}
                  <Heading
                    fontFamily="Space Grotesk"
                    fontSize={["2xl", "3xl", "4xl", "4xl"]}
                  >
                    {" "}
                    Matheus Bueno
                  </Heading>
                  Tenho 23 anos, sou de Curitiba!
                </Text>
                <Text
                  alignSelf="flex-start"
                  fontSize={["md", "md", "lg", "lg"]}
                  textAlign="initial"
                >
                  Estudante de desenvolvimento Full-Stack | Front-end | React |
                  HTML | CSS | JavaScript
                </Text>
                <HStack alignSelf="flex-start" fontSize="3xl">
                  <Text>
                    <Link
                      href="https://www.linkedin.com/in/matheusbuenol/"
                      isExternal
                      color="hsl(205.1,100%,36.1%)"
                    >
                      <FaLinkedin />
                    </Link>
                  </Text>
                  <Text fontSize="3xl">
                    <Link
                      href="https://github.com/matheusblm"
                      isExternal
                      color="hsl(205.1,100%,36.1%)"
                    >
                      <FaGithub />
                    </Link>
                  </Text>
                </HStack>
              </VStack>
              <Flex
                w={["100%", "100%", "45%", "45%"]}
                justifyContent={["center", "center", "flex-end", "flex-end"]}
              >
                {" "}
                <Image
                  borderRadius="50%"
                  src={profile}
                  w={["250px", "250px", "300px", "400px"]}
                  alignSelf="flex-end"
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box w="100%" id="habilidades">
        <Flex w="100%" justifyContent="end">
          <Box
            bg="linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"
            width="64px"
            height="6px"
            borderRadius="10px"
            pos
          ></Box>
        </Flex>
        <Heading
          textAlign="center"
          mb="50px"
          fontSize="3xl"
          p="50px"
          fontFamily="Space Grotesk"
          color="hsl(34.9,98.6%,72.9%)"
        >
          Tecnologias que estou usando
        </Heading>
        <Flex
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          h="100%"
          w="100%"
        >
          <Flex maxWidth="1000px" flexWrap="wrap">
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                alt="html"
                w="120px"
              />
              <Text mt="5px">HTML</Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt="html"
                w="120px"
              />
              <Text mt="5px">CSS</Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image
                src="https://pcodinomebzero.neocities.org/Imagens/javascript1.png"
                alt="html"
                w="120px"
              />
              <Text mt="5px">JavaScript</Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image src={react} alt="html" w="120px" />
              <Text mt="5px">React</Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image
                src="https://hermes.digitalinnovation.one/articles/cover/8a7306cb-59e3-481f-832d-57ac4587b516.png"
                alt="html"
                w="120px"
              />
              <Text mt="5px">Git</Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              borderRadius="10px"
              mb="20px"
            >
              <Image src={chakraLogo} alt="html" w="120px" />
              <Text mt="5px">Chakra UI</Text>
            </Flex>
            <Spacer />
          </Flex>
        </Flex>
        <Flex w="100%">
          <Box
            bg="linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"
            width="64px"
            height="6px"
            borderRadius="10px"
            pos
          ></Box>
        </Flex>
        <Heading
          textAlign="center"
          fontSize="3xl"
          p="50px"
          fontFamily="Space Grotesk"
          color="hsl(34.9,98.6%,72.9%)"
        >
          Tecnologias que estou aprendendo
        </Heading>
        <Flex
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          h="100%"
          w="100%"
        >
          <Flex maxWidth="1000px" flexWrap="wrap">
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image src={python} alt="html" w="120px" />
              <Text mt="5px">Python</Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image src={flaskLogo} alt="html" w="120px" />
              <Text mt="5px">Flask</Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image src={react} alt="html" w="120px" />
              <Text mt="5px">React Native</Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image
                src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
                alt="html"
                w="120px"
              />
              <Text mt="5px">NextJS</Text>
            </Flex>
            <Spacer />
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent="end">
          <Box
            bg="linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"
            width="64px"
            height="6px"
            borderRadius="10px"
            pos
          ></Box>
        </Flex>

        <Heading
          textAlign="center"
          fontSize="3xl"
          p="50px"
          fontFamily="Space Grotesk"
          color="hsl(34.9,98.6%,72.9%)"
        >
          Outras Habilidades
        </Heading>
        <Flex
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          h="100%"
          w="100%"
        >
          <Flex maxWidth="1000px" flexWrap="wrap">
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image src={scrumLogo} alt="html" w="120px" />
              <Text mt="5px" textAlign="center">
                Metodologias Agies
              </Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="html"
                w="120px"
                h="120px"
              />
              <Text mt="5px" textAlign="center">
                Figma
              </Text>
            </Flex>
            <Spacer />
            <Flex
              w={["150px", "200px"]}
              h={["150px", "200px"]}
              alignContent="center"
              alignItems="center"
              flexDirection="column"
              mb="20px"
            >
              <Image src={idiomaLogo} alt="html" w="120px" />
              <Text mt="5px">Ingles Avancado</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box w="100%" mt="50px" id="projetos">
        <Flex flexDirection="column" w="80%" p="50px">
          <Box
            bg="linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"
            width="64px"
            height="6px"
            borderRadius="10px"
          ></Box>
          <Heading fontFamily="Space Grotesk" color="hsl(34.9,98.6%,72.9%)">
            Projetos
          </Heading>
        </Flex>

        <Flex
          flexDirection="column"
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          h="100%"
          w="100%"
        >
          <Flex w="80%" h="100%" flexWrap="wrap">
            {projects.map((item) => (
              <>
                <Flex
                  w="400px"
                  mt="20px"
                  flexDirection="column"
                  shadow="3px 3px 20px rgba(80, 78, 78, 0.5)"
                >
                  <Image
                    src={item.image}
                    w="100%"
                    h="200px"
                    borderTopRadius="10px"
                  />

                  <VStack w="100%" p="20px" textAlign="justify">
                    <Heading
                      fontSize="xl"
                      fontFamily="Space Grotesk"
                      color="hsl(34.9,98.6%,72.9%)"
                    >
                      {item.name}
                    </Heading>
                    <Text>{item.description}</Text>
                    <Text>{item.tecnologies}</Text>
                    <HStack fontSize="2xl">
                      <Link
                        href={item.gitHub}
                        isExternal
                        color="hsl(205.1,100%,36.1%)"
                      >
                        <FaGithub />
                      </Link>
                      <Link
                        href={item.site}
                        isExternal
                        color="hsl(205.1,100%,36.1%)"
                      >
                        <FaSitemap />
                      </Link>
                    </HStack>
                  </VStack>
                </Flex>
                <Spacer />
              </>
            ))}
          </Flex>
        </Flex>
      </Box>
      <Flex w="100%" h="200px" justifyContent="center" id="contato">
        <HStack
          borderTop="0.5px solid white"
          w="90%"
          alignSelf="end"
          justifyContent="end"
        >
          <VStack m="20px">
            <Text textAlign="left" w="100%" color="gray">
              Email
            </Text>
            <Text fontSize={["12px", "md"]}>matheus_bueno10@hotmail.com</Text>
          </VStack>

          <VStack>
            <Text textAlign="left" w="100%" color="gray">
              Telefone
            </Text>
            <Link
              href="https://api.whatsapp.com/send?phone=5541997071901"
              isExternal
              fontSize={["12px", "md"]}
            >
              41 997071901
            </Link>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}

export default App;
