import Link from "next/link";

interface LogoProps {
  variant?: "default" | "black";
}

export const Logo = ({ variant = "default" }: LogoProps) => {
  return (
    <Link
      className={`${
        variant == "default" ? "text-green" : "text-black"
      } text-[32px]`}
      href="/"
    >
      <strong className="font-extrabold">morto</strong>Comply
      <strong className="font-extrabold">.</strong>
    </Link>
  );
};
