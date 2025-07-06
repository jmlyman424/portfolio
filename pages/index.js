import Head from 'next/head';
import { createClient } from 'contentful';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faGraduationCap,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/UI/Hero';
import ProjectCard from '../components/UI/ProjectCard';
import Contact from '../components/UI/Contact';

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

      {/* About ===== */}
      <Section id="about" header="About Joseph" />
      <div className="flex flex-col flex-auto sm:flex-row gap-16 container mx-auto p-8 justify-center">
        {/* Info */}
        <div className="flex justify-center grow">
          <div className=" flex flex-col gap-4 sm:max-w-md">
            <p>
              I have 8 years of experience and a deep understanding of various
              web technologies such as HTML, CSS, JavaScript, TypeScript, and
              React.
            </p>
            <p>
              I love staying informed on the latest design trends and
              development techniques in web development, and I'm constantly
              learning and expanding my skill set.
            </p>
            <p>
              I have a keen eye for detail and strive for perfection in every
              project I work on. When projects depend on accurate data, I make
              sure it's correct.
            </p>
            <p>
              When I'm not designing or coding, I spend my time cycling, playing
              disc golf, playing video games, or adventuring with my family.
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex flex-auto gap-4 text-center justify-center">
          <div>
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-4xl fa-4x pb-4"
            />
            <p className="text-3xl font-bold text-accent-1">8+</p>
            <p className="text-sm">Years Experience</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-4xl fa-4x pb-4"
            />
            <p className="text-3xl font-bold text-accent-1">
              {projects.length}
            </p>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBuilding}
              className="text-4xl fa-4x pb-4"
            />
            <p className="text-3xl font-bold text-accent-1">8+</p>
            <p className="text-sm">Companies Worked</p>
          </div>
        </div>
      </div>

      {/* Portfolio ===== */}
      <Section id="portfolio" header="Portfolio" />
      <div className="relative mx-auto md:container">
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <Section id="contact" header="Contact" />
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
              <div className="flex gap-4 py-4">
                <a
                  href="https://github.com/jmlyman424"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-gray-100 transition-colors duration-150"
                >
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jmlyman424/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-gray-100 transition-colors duration-150"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
              </div>
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

function Section({ id, header, children }) {
  return (
    <div className="relative pt-16 mx-auto md:container">
      <div className="text-center">
        <h1
          id={id}
          className="text-black dark:text-white text-3xl font-extrabold sm:text-5xl scroll-mt-24"
        >
          {header}
        </h1>
      </div>
      {children}
    </div>
  );
}
