import { ArrowUpRight } from "lucide-react";
import { cn } from "~/lib/utils";
import type { TExperience } from "~/types/data";

export default function ExperienceCard({ className, experience }: Props) {
  return (
    <article
      className={cn(
        "flex flex-col gap-6 xl:flex-row xl:items-center justify-between py-14 last:border-b-0 border-b border-border/15 xl:pl-3 xl:pr-12 group/card",
        className,
      )}
    >
      <figure className="size-20 rounded-xl overflow-hidden">
        <img
          src={experience.companyLogo}
          alt={experience.companyName}
          className="size-full object-cover"
        />
      </figure>

      <hgroup className="flex-1 grid sm:grid-cols-2 gap-y-1.5 items-center justify-between">
        <h4 className="text-2xl font-heading uppercase font-medium inline-flex items-center gap-2 hover:underline">
          <a
            rel="noopener noreferrer"
            href={experience.companyLink}
            target="_blank"
          >
            <span>{experience.companyName}</span>
            <ArrowUpRight className="inline-block size-5 stroke-2 stroke-primary" />
          </a>
        </h4>

        <span className="text-lg">{experience.duration}</span>

        <h5 className="text-xl">{experience.role}</h5>

        <span className="text-lg">{experience.emloymentType}</span>
      </hgroup>
    </article>
  );
}

type Props = {
  className?: string;
  experience: TExperience;
} & React.HTMLAttributes<HTMLDivElement>;
