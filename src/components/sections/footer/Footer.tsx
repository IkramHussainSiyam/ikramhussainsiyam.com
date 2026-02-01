import Container from "~/components/common/container";
import FooterNavlinks from "./FooterNavlinks";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative py-6">
      <Container>
        <div className="section-padding-x w-full select-none pointer-events-none">
          <img
            className="size-full object-cover"
            src="/ikram-logo-white.svg"
            alt="Ikram Footer Logo"
          />
        </div>

        <div className="section-padding-x flex flex-col items-center lg:flex-row justify-between w-full">
          <FooterNavlinks />
          <p className="text-base sm:text-xl text-primary-foreground/80">
            &copy; 2025 Ikram Hussain Siyam
          </p>
        </div>
      </Container>
    </footer>
  );
}
