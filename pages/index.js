import Head from 'next/head';
import { createClient } from 'contentful';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Hero from '../components/UI/Hero';
import ProjectCard from '../components/UI/ProjectCard';
import Contact from '../components/UI/Contact';
import {
  faEnvelope,
  faFileArrowDown,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

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
      <section className="flex flex-col items-center justify-center flex-auto gap-16 p-8 mx-auto contain">
        {/* Info */}

        <div className="flex flex-col gap-4 md:max-w-md">
          <p>
            With several years of experience, I have a deep understanding of
            various web technologies including HTML, CSS, JavaScript,
            TypeScript, and React.
          </p>
          <p>
            I'm passionate about staying up to date with the latest design
            trends and development practices in web development, always pushing
            myself to learn and grow as the industry evolves.
          </p>
          <p>
            Detail-oriented by nature, I strive for excellence in every project
            and take great care in ensuring the accuracy and reliability of the
            work I deliver.
          </p>
          <p>
            When I'm not designing or developing, I spend my time cycling,
            playing disc golf or video games, and adventuring with my friends
            and family.
          </p>
        </div>

        {/* Icons */}
        <div className="flex justify-center flex-auto gap-12 text-center">
          <a
            href="https://github.com/jmlyman424"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-150 hover:text-accent-1"
          >
            <FontAwesomeIcon icon={faGithub} className="pb-4 text-4xl fa-4x" />
            <p>GitHub</p>
            <p className="text-sm">@jmlyman424</p>
          </a>
          <a
            href="https://www.linkedin.com/in/jmlyman424/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-150 hover:text-accent-1"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="pb-4 text-4xl fa-4x"
            />
            <p>LinkedIn</p>
            <p className="text-sm">@jmlyman424</p>
          </a>
          <a
            href="./Resume - Lyman, Joseph.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-150 hover:text-accent-1"
          >
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="pb-4 text-4xl fa-4x"
            />
            <p>My Resume</p>
            <p className="text-sm">download</p>
          </a>
        </div>
      </section>

      {/* Portfolio ===== */}
      <Section id="portfolio" header="Portfolio" />
      <section className="relative mx-auto contain">
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <Section id="contact" header="Contact" />
      <section className="flex justify-center p-8 mx-auto contain">
        <Contact />
      </section>

      {/* Tail ===== */}
      <section
        className="px-8 py-16 mt-12 bg-black/10 dark:text-white dark:bg-black/40"
        id="tail"
      >
        <div className="flex flex-col justify-center gap-16 leading-8 md:flex-row">
          <div className="null">
            <p className="pb-4 text-lg font-bold uppercase font-display">
              Skills & Tools
            </p>
            <ul>
              <li>HTML / CSS / JavaScript</li>
              <li>TypeScript</li>
              <li>React.js / Next.js</li>
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
              <li>Python</li>
              <li>VBA</li>
            </ul>
          </div>
          <div className="null">
            <p className="pb-4 text-lg font-bold uppercase font-display">
              Recgonition
            </p>
            <ul>
              <li>Google Data Analysts Certificate</li>
              <li>MI BPA Graphic Design Finalist</li>
            </ul>
          </div>

          <div className="null">
            <p className="pb-4 text-lg font-bold uppercase font-display">
              Other Information
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <a className="pl-2">Michigan, United States</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                <a
                  href="https://github.com/jmlyman424"
                  className="pl-2 hover:text-accent-1"
                >
                  GitHub
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                  href="https://www.linkedin.com/in/jmlyman424/"
                  className="pl-2 hover:text-accent-1"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ id, header, children }) {
  return (
    <section className="relative pt-16 pb-4 mx-auto">
      <div className="text-center">
        <h1
          id={id}
          className="text-4xl font-extrabold text-black dark:text-white sm:text-5xl scroll-mt-24"
        >
          {header}
        </h1>
      </div>
      {children}
    </section>
  );
}
