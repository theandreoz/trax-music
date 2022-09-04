import GradientLayout from '../components/gradientLayout';
import prisma from '../lib/prisma';

const Home = (/* { artists } */) => {
  return (
    <GradientLayout
      roundImage='true'
      color='red'
      subtitle='profile'
      title='Andres'
      description='15 public playlists'
      image='https://www.mavantidecorations.nl/media/catalog/product/cache/df536ffd4d95d6b4916466950bd4deb8/B/S/BS006_thumb.jpg'
    >
      <div>HOMEPAGE!</div>
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
