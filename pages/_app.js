import '../styles/global.css';
import { ThemeProvider } from 'next-themes';

import Layout from '../components/Layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
