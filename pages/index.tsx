import GradientLayout from '../components/gradientLayout';

const Home = () => {
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

export default Home;
