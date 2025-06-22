
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
