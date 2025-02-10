import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <h1>My Website</h1>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-auto">
    <p>&copy; 2024 My Website</p>
  </footer>
);

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
