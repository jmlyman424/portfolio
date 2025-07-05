import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)] flex-1 w-full text-black dark:text-white bg-white dark:bg-[#18192A] overflow-hidden scroll-smooth">
        {children}
      </main>
      <Footer />
    </>
  );
}
