import SocialIcons from "./SocialIcons";

function Header() {
  const links = ["HOME", "EXPERIENCE", "DESTINATIONS", "ABOUT", "CLIENTS", "CONNECT"];

  return (
    <header className="h-[145px] bg-[#f4f3f0] flex items-center justify-between px-[12%]">
      <div className="text-center">
        <h1 className="font-serif text-[32px] tracking-[6px] leading-none">
          CLASSIC TRAVEL
        </h1>
        <p className="text-[13px] tracking-[8px] mt-2">
          CONNECTION
        </p>
      </div>

      <nav className="flex items-center gap-8 text-[15px] tracking-wide">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="hover:text-[#8c8467] transition-colors"
          >
            {link}
          </a>
        ))}

        <SocialIcons />
      </nav>
    </header>
  );
}

export default Header;