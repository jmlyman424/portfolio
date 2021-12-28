/* eslint-disable react/jsx-props-no-spreading */
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

import Layout from '../components/Layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
