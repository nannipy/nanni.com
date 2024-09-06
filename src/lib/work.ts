import type { ExperienceItem } from "../app/page";


export const workItems = [
  {
    name: "portfolio website",
    github: "https://github.com/nannipy/nanni-com",
    link: "/",
    position: "",
    description:
      "the web app you're looking at right now, built with nextjs, tailwindcss, trpc and supabase. It's very simple but i love it ",
  },
  {
    name: "Rick and Morty Search",
    github: "https://github.com/nannipy/RickandMortySearch",
    link: "https://rickandmortysearchcharacter.netlify.app/",
    position: "",
    description:
      "a web app to search for Rick and Morty characters with the ability to filter by gender, species, status, and type.",
  },
  {
    name: "all projects →",
    github: "",
    link: "https://github.com/nannipy",
    position: "",
    description: "",
  },
  /*
  {
    name: "freelance developer",
    link: "",
    position: "",
    description:
      "developed multiple projects for clients, such as flutter app for medical devices (at sintesy) or a crm for a small business, and more.",
  },
  */
] satisfies ExperienceItem[];
