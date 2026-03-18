import { Twitter, Disc } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 ps1-menu border-x-0 border-b-0 rounded-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-400 flex items-center justify-center text-black font-mono text-2xl leading-none border-2 border-white shadow-[inset_-2px_-2px_0_#000]">
            C
          </div>
          <span className="text-white font-mono tracking-widest uppercase text-xl">
            CopeTards
          </span>
        </div>

        <div className="text-gray-300 text-sm font-mono uppercase tracking-widest">
          &copy; {new Date().getFullYear()} COPETARDS. ALL RIGHTS RESERVED.
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-12 h-12 flex items-center justify-center ps1-button">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center ps1-button">
            <Disc className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
