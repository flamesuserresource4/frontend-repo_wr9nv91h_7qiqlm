export default function Footer() {
  return (
    <footer className="border-t border-[#393E46]/10 bg-[#EFEFEF]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-[#393E46]/80">© {new Date().getFullYear()} Locat8. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-[#393E46]/80 hover:text-[#393E46]">Contact</a>
            <a href="#" className="text-[#393E46]/80 hover:text-[#393E46]">Privacy</a>
            <a href="#" className="text-[#393E46]/80 hover:text-[#393E46]">Terms</a>
            <a href="#" className="text-[#393E46]/80 hover:text-[#393E46]">Twitter</a>
            <a href="#" className="text-[#393E46]/80 hover:text-[#393E46]">Instagram</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
