import { Link } from "react-router";
import { cn } from "~/lib/utils";

export default function Logo({ className, ...props }: TProps) {
  return (
    <Link to={"/"} className="flex items-center gap-1">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className={cn(
          "dark:text-white text-base-900 size-6 fill-primary",
          className,
        )}
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,16.37a86.4,86.4,0,0,1,16,3V212.67a86.4,86.4,0,0,1-16,3Zm32,9.26a87.81,87.81,0,0,1,16,10.54V195.83a87.81,87.81,0,0,1-16,10.54ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm160,50.54V77.46a87.82,87.82,0,0,1,0,101.08Z"></path>
      </svg>
      <span className="block font-display text-3xl italic text-center">
        Ikram
      </span>
    </Link>
  );
}

type TProps = {} & React.ComponentProps<"svg">;
