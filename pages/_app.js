import '../styles/globals.css';
import 'fontsource-roboto';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
