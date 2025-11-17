export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Locat8. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Contact</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
            <a href="#" className="hover:text-gray-900">Instagram</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
