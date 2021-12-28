import Head from 'next/head';
import { createClient } from 'contentful';
import Hero from '../components/UI/Hero';
import Project from '../components/UI/Project';
import Contact from '../components/UI/Contact';
import resume from '../resume.json';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'project' });

  return {
    props: {
      projects: res.items,
    },
  };
}

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Joseph Lyman | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="JavaScript, Web, Developer, React.js, Next.js, Portfolio"
        />
        <meta
          name="description"
          content="Joseph is a Frontend Web Developer that creates beautiful, performant websites."
        />
      </Head>

      {/* Hero ===== */}
      <Hero />

      {/* Projects ===== */}
      <div className="mx-auto p-8 pb-32">
        <div className="relative mx-auto md:container">
          <span className="absolute -top-4 left-4 w-32 h-2 bg-blue-500 rounded-full" />
          <h1
            id="projects"
            className="text-gray-50 text-4xl font-extrabold sm:text-5xl scroll-mt-24"
          >
            Projects
          </h1>
          <div className="flex flex-wrap gap-4 justify-center mt-8 md:justify-start">
            {projects.map((project) => (
              <Project key={project.sys.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Resume ===== */}
      <div className="mx-auto px-8 py-16">
        <div className="relative mx-auto md:container">
          <span className="absolute -top-4 left-4 w-32 h-2 bg-blue-500 rounded-full" />
          <h1
            id="resume"
            className="tracking-tight; flex text-gray-50 text-4xl font-extrabold sm:text-5xl scroll-mt-24"
          >
            Resume{' '}
          </h1>
          <h2 className="pb-2 pt-12 text-blue-300 text-2xl">Skills</h2>
          {/* - Skills  */}
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <p key={skill} className="px-4 py-2 bg-gray-900 rounded">
                {skill}
              </p>
            ))}
          </div>
          {/* - Experience */}
          <h2 className="pb-2 pt-12 text-blue-300 text-2xl">Experience</h2>
          {resume.experience.map((job) => (
            <div key={job.company} className="pb-10">
              <h3 className="text-sm font-bold uppercase">{job.title}</h3>
              <h2 className="text-xl font-bold">{job.company}</h2>
              <p className="text-sm italic">
                {job.dates}
                <span className="px-2 not-italic"> | </span>
                {job.location}
              </p>
              <ul className="pt-3">
                {job.description.map((desc) => (
                  <li key={desc} className="ml-6 pl-2 text-gray-100 list-disc">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* <Button icon={faFileDownload} size="lg">
            Download Resume
          </Button> */}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto px-8 py-16">
        <div className="relative mx-auto md:container">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div>
              <span className="absolute -top-4 left-4 w-32 h-2 bg-blue-500 rounded-full" />
              <h1
                id="contact"
                className="tracking-tight; text-gray-50 text-4xl font-extrabold sm:text-5xl scroll-mt-24"
              >
                Let&apos;s Chat!
              </h1>
              <p className="text-normal mt-2 text-gray-100 dark:text-gray-400 text-lg font-medium sm:text-2xl">
                Fill in the form to start a conversation
              </p>
            </div>
            <div className="flex justify-center">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
