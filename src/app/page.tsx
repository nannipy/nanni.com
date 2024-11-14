import { projectItems } from "../lib/projects.ts";
import { workItems } from "../lib/work.ts";


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

function GithubIcon() {
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
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
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
  github: string;
  position: string;
  description: string;
};

function ExperienceSection({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
  github?: boolean;
}) {
  return (
    <section className="text-left">
      <h3 className="mb-6 text-xl font-medium">{title}</h3>
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="min-h-[140px]">
            <div className="flex justify-between items-start gap-4">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
                >
                  {item.name}
                </a>
              ) : (
                <p className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600">
                  {item.name}
                </p>
              )}
              
              {item.github && (
                <a
                  href={item.github}
                  className="flex items-center transition-all hover:text-neutral-100"
                >
                  <GithubIcon />
                  <p className="ml-2 h-7 underline decoration-wavy">git</p>
                </a>
              )}
            </div>
            
            <p className="mt-2">{item.position}</p>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              {item.description}
            </p>
          </div>
          
          {index !== items.length - 1 && <div className="mt-6"></div>}
        </div>
      ))}
    </section>
  );
}

export default async function Home() {
  return (
    

    <main className="flex min-h-screen flex-col justify-left mt-4 sm:mt-8 md:mt-5 text-white md:px-20 px-5 ">

 
      
      <h1 className="mb-3 text-xl sm:text-2xl font-bold tracking-tighter">
        Giovanni Battista Pernazza        
      </h1>
      
 

      <div className="flex flex-col gap-2 ">
        <div className="flex items-center gap-2 text-neutral-300">
          <LocationIcon />
          <p>Roma, Italia</p>
        </div>

        <div className="flex items-center gap-2 text-neutral-300">
          <WorkIcon />
          <p className="inline-flex">SWE</p>
        </div>
      </div>

      <ul className="font-sm my-6 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex  items-center transition-all hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:gb.pernazza@gmail.com"
          >
            <p className="mr-1 h-7 m">email</p>
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
            <p className="mr-1 h-7 ">github</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/nanni.py/"
          >
            <p className="mr-1 h-7">instagram</p>
            <UpRightArrowIcon />
          </a>
        </li>
      </ul>

      <p className=" text-sm sm:text-base">
        I&apos;m a <b>software developer</b>  with a passion for building web applications. I&apos;m always looking for new challenges and opportunities to learn and grow.
      </p>

      <div className="">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="sm:flex-1 sm:max-w-md mt-7 ">
            <ExperienceSection title="Last Projects" items={projectItems} />
          </div>
          <div className="sm:flex-1 sm:max-w-md mt-7 sm:mt-14">
            <ExperienceSection title=""  items={workItems} />
          </div>
        </div>
        <div>
          <a href="https://github.com/nannipy" className=" font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600 flex mt-1">
              <p>Scopri tutti i miei progetti su github</p>
              <UpRightArrowIcon />
            </a>
        </div>
      </div>
    </main>
  );
}
