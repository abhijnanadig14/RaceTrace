const menuItems = [
  ["Home", "⌂"],
  ["Schedule", "◷"],
  ["Results", "▣"],
  ["Driver Standings", "♙"],
  ["Constructor Standings", "♛"],
  ["Drivers", "♧"],
  ["Teams", "♤"],
  ["Driver Stats", "▥"],
  ["Head To Head", "⚔"],
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-[#2A2E33] bg-[#15171A]">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-[#2A2E33] px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F97316]">
          <span className="font-black text-[#0E0F11]">R</span>
        </div>

        <span className="font-bold tracking-wide text-white">RACETRACE</span>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <p className="mb-3 text-xs uppercase text-zinc-500">Navigation</p>

        {menuItems.map(([name, icon], index) => (
          <button
            key={name}
            className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
              index === 0
                ? "bg-zinc-800 text-orange-500"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            <span>{icon}</span>
            <span>{name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
