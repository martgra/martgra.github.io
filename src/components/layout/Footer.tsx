export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-6 text-center text-xs text-gray-600 mt-20">
      <p>Process finished with exit code 0</p>
      <p className="mt-2">&copy; {currentYear} Terminal Portfolio. All rights reserved.</p>
    </footer>
  );
}
