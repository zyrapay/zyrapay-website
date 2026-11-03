import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/full.webp";
import LogoLightImage from "@/assets/full.webp";

const Logo = ({ variant = "dark" }: { variant?: "light" | "dark" }) => {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <Image
        src={variant == "dark" ? LogoImage : LogoLightImage}
        alt="Zyra"
        className="w-18"
        priority
      />
    </Link>
  );
};

export default Logo;
