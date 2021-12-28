import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)] flex-1 w-full text-white bg-gray-800 overflow-hidden scroll-smooth">
        {children}
      </main>
      <Footer />
    </>
  );
}
