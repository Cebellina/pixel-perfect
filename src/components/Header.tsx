import SocialIcons from "./SocialIcons";

function Header() {
  const links = [
    "HOME",
    "EXPERIENCE",
    "DESTINATIONS",
    "ABOUT",
    "CLIENTS",
    "CONNECT",
  ];

  return (
    <header className="h-[115px] bg-[#f4f3ef] flex items-center justify-between px-[80px] text-[#191919]">
      <div className="text-center">
        <h1 className="font-['Cormorant_Garamond'] text-[36px] font-light tracking-[1px] leading-none">
          CLASSIC TRAVEL
        </h1>

        <p className="mt-1 text-[10px] tracking-[6px]">
          CONNECTION
        </p>
      </div>

      <nav className="flex items-center gap-7 text-[12px] font-normal tracking-wide">
        {links.map((link) => (
          <a key={link} href="#" className="hover:text-[#8f8768]">
            {link}
          </a>
        ))}

        <SocialIcons />
      </nav>
    </header>
  );
}

export default Header;