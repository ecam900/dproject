import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import {
  Flex,
  IconButton,
  Heading,
  Image,
  Text
} from '@chakra-ui/core'

export default function Home(props) {
  return (
    <>
<Flex
      flexDirection="column"
      backgroundColor="whiteAlpha.100"
      opacity={1}
      width="100%"
    >
      <Flex justifyContent="space-between" height="10vh">
        <Flex alignItems="center" flexDirection="row" justifyContent="center">
          <IconButton
            aria-label="icon"
            icon="moon"
            size="lg"
            variant="ghost"
            isRound
            color="#6d597a"
          />
          <Heading size="lg" textAlign="center" color="#6d597a" opacity={1}>
            WebsiteName
          </Heading>
        </Flex>
      </Flex>
      <Flex
        height="90vh"
        width="100%"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading display="block"></Heading>
        <Heading textAlign="center">Puerto Rico Se Mueve</Heading>
      </Flex>
      <Flex
        height="100vh"
        width="100%"
        color="yellow.500"
        backgroundColor="#6d597a"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width="100%"
          height="20%"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>Plataforma Central Para el Baile Boricua</Heading>
        </Flex>
        <Flex width="100%" height="80%">
          <Flex width="33%" flexDirection="column" alignItems="center">
            <Flex height="50%" width="90%" justifyContent="flex-start">
              <Image
                height="100p%x"
                width="100%%px"
                src="https://placekitten.com/1000/1000"
              />
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Heading>Escuelas</Heading>
              <Text>
                Desde Aguadilla hasta Culebra, descubre escuelas en la isla
                entera.
              </Text>
            </Flex>
          </Flex>
          <Flex width="33%" flexDirection="column" alignItems="center">
            <Flex height="50%">
              <Image height="100%px" width="100%px" />
              <Image
                height="100%"
                width="100%"
                src="https://placekitten.com/500/500"
                borderRadius="15px"
                p="1rem"
              />
            </Flex>
            <Flex flexDirection="column">
              <Heading>Companias</Heading>
              <Text></Text>
              <Text>
                Conoce companias nuevas y descubre lo que el baile
                puertorriqueno puede traer a la mesa.
              </Text>
            </Flex>
          </Flex>
          <Flex width="33%" flexDirection="column" alignItems="center">
            <Flex height="50%">
              <Image
                height="100%"
                width="100%"
                src="https://placekitten.com/500/500"
                borderRadius="15px"
                p="1rem"
              />
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Heading>Eventos</Heading>
              <Text></Text>
              <Text>
                Encuentra eventos de baile para toda ocasion: Balet, Bomba,
                Contemporaneo, Improv, Danza Terapia y mas.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    </>
  );
}

export async function getStaticProps() {
  const home = await client.getSingle('homepage');
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'posts')
  );
  return {
    props: {
      home,
      posts,
    },
  };
}
