import { ArrowUpRight } from "lucide-react";
import { cn } from "~/lib/utils";
import type { TProject } from "~/types/data";

export default function ProjectCard({ className, project }: Props) {
  return (
    <article
      className={cn(
        "flex flex-col gap-10 xl:flex-row xl:items-center justify-between py-14 last:border-b-0 border-b border-border/15 xl:pl-3 xl:pr-12 group/card",
        className,
      )}
    >
      <figure className="w-full xl:w-1/4 rounded-3xl overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="size-full object-cover"
        />
      </figure>

      <hgroup className="flex-1">
        <a rel="noopener noreferrer" href={project.link} target="_blank">
          <h4 className="text-3xl sm:text-5xl lg:text-6xl font-heading uppercase font-medium mb-2 xl:mb-5 flex items-baseline gap-4 hover:underline">
            <span>{project.name}</span>
            <ArrowUpRight className="inline-block size-8 stroke-2 stroke-primary" />
          </h4>
        </a>

        <h5 className="text-lg sm:text-2xl mb-1 xl:mb-2">
          {project.summary}
        </h5>

        <p className="text-sm md:text-lg">{project.description}</p>
      </hgroup>
    </article>
  );
}

type Props = {
  className?: string;
  project: TProject;
} & React.HTMLAttributes<HTMLDivElement>;
