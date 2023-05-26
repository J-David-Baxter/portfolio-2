import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { icons } from '../icons';

export default async function Home() {
  const projects = await getProjects()
  
  return (
    <div>
      <h1 className="text-7xl font-bold">Hello I&apos;m <span className="bg-blue-600 bg-clip-text text-transparent">David</span></h1>

      <p className="mt-3 text-2xl text-gray-600">I&apos;m passionate about developing front end applications with modern technologies.</p>

      <div className="flex gap-14 mt-10 flex-wrap">
        {icons.map((icon, i) => (
          <Image 
            key={i}
            src={icon}
            alt="icon"
            height={75}
          />
        ))}
      </div>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">About me</h2>
      <p className="mt-3 text-lg text-gray-600">I&apos;m a front-end developer from Waterford, Connecticut. 
      I enjoy building web applications with just about any technology, but my favorites are JavaScript 
      and React for the front end and Node.js and MongoDB for the back</p>
      <p className="mt-3 text-lg text-gray-600">I try to keep myself up to date with new technologies and I&apos;m always in the process of learning 
        something new. I have experience using libraries such as Material UI, Tailwind CSS, and React-Bootstrap.</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects">
        {projects.map((project) => (
          <Link 
            key={project._id} 
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-600 transition"
            href={`/projects/${project.slug}`}
            >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 bg-blue-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
