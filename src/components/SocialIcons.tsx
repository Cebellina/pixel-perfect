import { FaFacebookF, FaInstagram } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="flex items-center gap-2">
      <a
        href="#"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#191919] text-[12px] text-[#191919] hover:border-[#8f8768] hover:text-[#8f8768]"
      >
        <FaFacebookF />
      </a>

      <a
        href="#"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#191919] text-[12px] text-[#191919] hover:border-[#8f8768] hover:text-[#8f8768]"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default SocialIcons;