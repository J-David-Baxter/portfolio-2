import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects()
  
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-bold">Hello I&apos;m <span className="bg-blue-600 bg-clip-text text-transparent">David</span></h1>

      <p className="mt-3 text-xl text-gray-600">I&apos;m passionate about developing front end applications with modern technologies.</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
