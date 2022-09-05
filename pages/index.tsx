import { Box, Text, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import GradientLayout from '../components/gradientLayout';
import prisma from '../lib/prisma';

const Home = ({ artists }) => {
  return (
    <GradientLayout
      roundImage='true'
      color='red'
      subtitle='profile'
      title='Andres'
      description='15 public playlists'
      image='https://www.mavantidecorations.nl/media/catalog/product/cache/df536ffd4d95d6b4916466950bd4deb8/B/S/BS006_thumb.jpg'
    >
      <Box color='white' paddingX='40px'>
        <Box marginBottom='40px'>
          <Text fontSize='2xl' fontWeight='bold'>
            Top artist this month
          </Text>
          <Text fontSize='md'>Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX='10px' width='20%'>
              <Box bg='gray.900' borderRadius='4px' padding='15px' width='100%'>
                <Image
                  src='https://placebeard.it/360x360/any'
                  alt='avatar'
                  borderRadius='100%'
                />
                <Box marginTop='20px'>
                  <Text fontSize='large'>{artist.name}</Text>
                  <Text fontSize='x-small'>Artist </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};

export default Home;
