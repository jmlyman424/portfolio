import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="text-black dark:text-white bg-white dark:bg-darkmode transition-colors duration-300">
      <Header />
      <main className="min-h-[calc(100vh-4rem)] flex-1 w-full overflow-hidden scroll-smooth">
        {children}
      </main>
      <Footer />
    </div>
  );
}
