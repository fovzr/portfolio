import "./index.css";
import Navbar from "./components/Navbar";
import { projects } from "./data/projects";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Navbar />

      <main className="site">
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="heroContent">
            <p className="eyebrow">Computer Engineering Graduate</p>

            <h1>
              Designing technology with purpose.
              <span> Engineering solutions with impact.</span>
            </h1>

            <p className="heroText">
              I’m Fouz Al-Rashed, a Computer Engineering graduate creating smart
              systems, AI-powered platforms, IoT solutions, and digital products
              that turn ideas into meaningful experiences.
            </p>
          </div>

          <motion.div
            className="heroShowcase"
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.35 }}
          >
            <div className="stageGlow"></div>
            <div className="orbit orbitOne"></div>
            <div className="orbit orbitTwo"></div>

            <div className="productStage brandCard">
              <div className="brandBadge">FA</div>

              <div className="productBody">
                <span className="statusDot"></span>
                <p>PORTFOLIO PROFILE</p>
                <h3>Fouz Al-Rashed</h3>
                <small>Computer Engineer</small>

                <div className="brandTags">
                  <span>AI</span>
                  <span>IoT</span>
                  <span>Robotics</span>
                  <span>Software</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <section id="projects" className="projects">
          <div className="sectionTitle">
            Built to solve.
            <br />
            Designed to impress.
          </div>

          <div className="projectGrid">
            {projects.map((project, index) => (
              <motion.div
                className="projectCard"
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="cardNumber">0{index + 1}</div>
                <span>{project.tag}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <button className="cardButton">Explore project</button>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          className="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="aboutLabel">ABOUT ME</p>

          <h2>
            I build technology that combines engineering, creativity, and
            real-world impact.
          </h2>

          <p className="aboutText">
            Computer Engineering graduate passionate about AI, IoT, robotics,
            software development, and product innovation. My work ranges from
            smart hardware systems and sustainability-focused solutions to
            modern web applications and intelligent platforms.
          </p>
        </motion.section>

        <motion.section
          id="skills"
          className="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="skillsLabel">TECH STACK</p>

          <h2>Tools I use to build intelligent systems.</h2>

          <div className="skillsGrid">
            <span>Python</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Flutter</span>
            <span>Firebase</span>
            <span>AWS</span>
            <span>SQL</span>
            <span>Machine Learning</span>
            <span>Embedded Systems</span>
            <span>ROS</span>
            <span>Figma</span>
            <span>GitHub</span>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="contactLabel">LET’S CONNECT</p>

          <h2>Interested in my work?</h2>

          <p>
            I’m open to opportunities in software development, AI, IoT,
            robotics, and product-focused engineering roles.
          </p>

          <a href="mailto:fouzealrashed@gmail.com" className="primaryBtn">
            Contact Me
          </a>
        </motion.section>
      </main>
    </>
  );
}

export default App;