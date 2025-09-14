export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center text-center h-16 bg-black text-gray-100 text-sm">
      <p>Copyright © {year} Joseph M Lyman - All rights reserved</p>
    </footer>
  );
}
