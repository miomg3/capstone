import Hero from './Hero';

function Main(props) {
  const { children } = props;

  return (
    <main>
      <Hero />
      {children}
    </main>
  );
}

export default Main;
