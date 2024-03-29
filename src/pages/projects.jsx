import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  LinkIcon,
} from '@/components/Icons'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - James Reaver</title>
        <meta
          name="description"
          content="Here are some of the most exciting projects I have worked on."
        />
      </Head>
      <SimpleLayout
        title="Knackle crack. Deep breath. And version control."
        intro="Most of the code I write on a daily basis belongs to some organisation. However, from time to time, I enjoy completing coding projects of my own, whether it’s to experiment with new tech stacks, develop shower thoughts into reality or simply hone my programming skills."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, projectIndex) => (
            <Card as="li" key={'project'+projectIndex}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
              </h2>
              <Card.Eyebrow>
                {project.period}
              </Card.Eyebrow>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}