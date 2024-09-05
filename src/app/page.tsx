import { projectItems } from "../lib/projects";

function UpRightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
function WorkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
export type ExperienceItem = {
  name: string;
  link: string;
  position: string;
  description: string;
};

function ExperienceSection({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
}) {
  return (
    <section className="text-left">
      <h3 className="mb-6 text-xl font-medium justify-left">{title}</h3>
      {items.map((item, index) => (
        <div key={index}>
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              className=" font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
            >
              {item.name}
            </a>
          ) : (
            <p className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600">
              {item.name}
            </p>
          )}
          <p className="mt-2">{item.position}</p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            {item.description}
          </p>
          {index !== items.length - 1 && <div className="mt-6"></div>}
        </div>
      ))}
    </section>
  );
}

export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col justify-left mt-8 md:mt-16 text-white px-4 md:px-8 lg:px-16 xl:px-96">
      <h1 className="mb-4 text-xl md:text-2xl font-bold tracking-tighter">
        giovanni battista pernazza
      </h1>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-neutral-300  ">
            <LocationIcon />
            <p>Roma, Italia</p>
          </div>

          <div className="flex items-center gap-2 text-neutral-300 ">
            <WorkIcon />
            <p className="inline-flex">
              Sviluppatore Software
            </p>
          </div>
        </div>

        <ul className="font-sm my-2 flex flex-col space-y-2 text-neutral-300 sm:flex-row sm:space-x-4 sm:space-y-0">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:gb.pernazza@gmail.com"
            >
              <p className="mr-1 h-7">email</p>
              <UpRightArrowIcon />
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/giovannibpernazza"
            >
              <p className="mr-1 h-7">linkedin</p>
              <UpRightArrowIcon />
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/nannipy"
            >
              <p className="mr-1 h-7">github</p>
              <UpRightArrowIcon />
            </a>
          </li>
        </ul>

        <p className="prose prose-neutral dark:prose-invert text-sm md:text-base">
          I&apos;m a software developer with a passion for building web applications. I&apos;m always looking for new challenges and opportunities to learn and grow.
        </p>

        <div className="prose prose-neutral dark:prose-invert text-sm md:text-base">
        <ExperienceSection title="projects" items={projectItems} />
      </div>
    </main>
  );
}
