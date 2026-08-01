import React, { Suspense, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Shield, BrainCircuit, Workflow, Code2, ChevronDown } from 'lucide-react'
import './styles.css'

const projects = [
  {
    title: 'Multi-Agent Cyber Defense System',
    subtitle: 'Autonomous collaborative threat defence',
    description: 'A multi-agent security architecture where device agents coordinate through a central command layer to detect anomalies, apply dynamic policies and orchestrate mitigation.',
    stack: ['TypeScript', 'Vite', 'Tailwind', 'Multi-Agent Systems'],
    href: 'https://github.com/gundasanjana08/Multi-Agent-Cyber-Defense-System',
    accent: '01'
  },
  {
    title: 'ServiceNow Impact Dashboard',
    subtitle: 'Enterprise adoption and value realization',
    description: 'An executive dashboard for adoption KPIs, workflow automation, SLA progress, customer success metrics and AI-assisted recommendations.',
    stack: ['React', 'TypeScript', 'Node.js', 'ServiceNow'],
    href: 'https://github.com/gundasanjana08/servicenow-impact-dashboard',
    accent: '02'
  },
  {
    title: 'AI Phishing Detection',
    subtitle: 'Real-time security with immutable evidence',
    description: 'A Golang-based phishing detection concept combining machine learning, REST APIs, scalable services and blockchain-backed audit records.',
    stack: ['Golang', 'Machine Learning', 'Blockchain', 'Docker'],
    href: 'https://github.com/gundasanjana08/AI-Driven-Phishing-Detection-in-Real-Time-Using-Golang-and-Blockchain',
    accent: '03'
  },
  {
    title: 'Sentinel Global Risk Dashboard',
    subtitle: 'Risk intelligence and executive visibility',
    description: 'A visual risk platform designed to surface operational exposure, priority signals and decision-ready insights.',
    stack: ['Risk Analytics', 'Dashboarding', 'Automation'],
    href: 'https://github.com/gundasanjana08/Sentinel-Global-Risk-Dashboard',
    accent: '04'
  },
  {
    title: 'FlowAI Workflow Automator',
    subtitle: 'Intelligent business process automation',
    description: 'An AI-oriented workflow automation project focused on reducing repetitive work and improving operational speed.',
    stack: ['AI', 'Automation', 'Workflow Design'],
    href: 'https://github.com/gundasanjana08/FlowAI---Intelligent-Workflow-Automator',
    accent: '05'
  },
  {
    title: 'Conversational AI Support',
    subtitle: 'Full-stack intelligent support experience',
    description: 'A full-stack conversational support application designed around responsive user experience and AI-assisted service.',
    stack: ['Full Stack', 'Conversational AI', 'APIs'],
    href: 'https://github.com/gundasanjana08/Full-Stack-Conversational-AI-Support-Application',
    accent: '06'
  }
]

const skills = [
  ['AI Engineering', 'LLM applications, intelligent assistants, summarization and knowledge search'],
  ['Cybersecurity', 'Threat detection, phishing analysis, network monitoring and secure audit systems'],
  ['Enterprise Platforms', 'ServiceNow dashboards, KPIs, workflow adoption and customer outcomes'],
  ['Software Engineering', 'React, TypeScript, Golang, APIs, Docker, data-driven interfaces']
]

function Orb() {
  const group = useRef()
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.16
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12
  })
  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.45, 2]} />
          <meshPhysicalMaterial color="#a7d8ff" wireframe transparent opacity={0.36} roughness={0.15} metalness={0.7} />
        </mesh>
        <mesh scale={0.72}>
          <icosahedronGeometry args={[1.45, 2]} />
          <meshStandardMaterial color="#7c5cff" emissive="#3e1f8f" emissiveIntensity={1.1} roughness={0.2} metalness={0.55} />
        </mesh>
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[4, 3, 4]} intensity={15} />
      <pointLight position={[-3, -2, 3]} intensity={8} />
      <Stars radius={80} depth={35} count={1400} factor={3} saturation={0} fade speed={0.5} />
      <Suspense fallback={null}>
        <Orb />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

function App() {
  return (
    <div className="app-shell">
      <div className="noise" />
      <nav className="nav">
        <a className="brand" href="#top">SG<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="top" className="hero">
          <div className="hero-copy">
            <motion.p initial="hidden" animate="visible" variants={fade} className="eyebrow">AI • CYBERSECURITY • ENTERPRISE AUTOMATION</motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={fade}>
              Sanjana<br /><span>Gunda</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fade} className="hero-text">
              I build intelligent, secure and human-centered digital products—from cyber defence systems and AI applications to enterprise workflow experiences.
            </motion.p>
            <motion.div initial="hidden" animate="visible" variants={fade} className="hero-actions">
              <a className="primary-btn" href="#work">Explore selected work <ChevronDown size={17} /></a>
              <a className="icon-btn" href="https://github.com/gundasanjana08" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={21} /></a>
              <a className="icon-btn" href="https://www.linkedin.com/in/sanjana08-gunda/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={21} /></a>
            </motion.div>
          </div>
          <div className="hero-visual">
            <Scene />
            <div className="orbit-label one">AI SYSTEMS</div>
            <div className="orbit-label two">SECURE BY DESIGN</div>
          </div>
          <div className="scroll-note">SCROLL TO DISCOVER</div>
        </section>

        <section id="about" className="section">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fade}>
            <p className="section-kicker">01 / PROFILE</p>
            <div className="about-grid">
              <h2>Engineering ideas that are intelligent, secure and useful.</h2>
              <div>
                <p className="body-copy">
                  Sanjana’s project portfolio spans AI applications, cyber defence, blockchain-backed security, ServiceNow value dashboards, full-stack products and workflow automation.
                </p>
                <p className="body-copy muted">
                  Her work demonstrates an ability to connect technical implementation with business outcomes: reducing risk, improving visibility, automating repetitive work and creating better user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="skill-grid">
            {skills.map(([title, text], i) => (
              <motion.article key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="skill-card">
                <div className="skill-icon">{[<BrainCircuit />, <Shield />, <Workflow />, <Code2 />][i]}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="work" className="section work-section">
          <p className="section-kicker">02 / SELECTED WORK</p>
          <div className="section-heading">
            <h2>Projects with purpose.</h2>
            <p>Selected repositories across AI, security, enterprise platforms and full-stack engineering.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fade}
                whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
                className="project-card"
              >
                <div className="project-top">
                  <span>{project.accent}</span>
                  <ExternalLink size={19} />
                </div>
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">
                  {project.stack.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="section vision">
          <p className="section-kicker">03 / APPROACH</p>
          <div className="vision-grid">
            <h2>Think clearly.<br />Build responsibly.<br /><span>Deliver impact.</span></h2>
            <div className="principles">
              <div><strong>01</strong><p>Start with the user, risk or business problem—not the technology.</p></div>
              <div><strong>02</strong><p>Design secure, observable systems that remain understandable.</p></div>
              <div><strong>03</strong><p>Use AI and automation where they create measurable value.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="section-kicker">04 / CONTACT</p>
          <h2>Let’s build something<br /><span>meaningful.</span></h2>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/sanjana08-gunda/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            <a href="https://github.com/gundasanjana08" target="_blank" rel="noreferrer"><Github /> GitHub</a>
            <a href="mailto:"><Mail /> Email</a>
          </div>
          <p className="footer-note">Designed for Sanjana Gunda • Built with React, Three.js and Framer Motion</p>
        </section>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
