import { Link } from "react-router";
import useJsonData from "~/hooks/useJsonData";
import type { TNavLinksData } from "~/types/data";

export default function FooterNavlinks() {
  const { navlinks } = useJsonData<TNavLinksData>("navlinks");

  return (
    <ul className="py-6 sm:pt-8 flex items-center flex-wrap gap-y-3 sm:gap-0 justify-center">
      {navlinks?.map((link) => (
        <Link
          key={link.id}
          to={link.href}
          className="text-base sm:text-lg px-5 py-1 text-primary-foreground/80 hover:bg-secondary/60 rounded-full transition-all duration-300"
        >
          {link.name}
        </Link>
      ))}
    </ul>
  );
}
