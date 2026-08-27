const skills = ['Python','PyTorch','LLM applications','Ollama','Flask','Java','C / C++','SQL','PHP','Flutter','Git','Figma'];
const projects = [
  {number:'01',title:'Elderly-Friendly AI Storytelling',tag:'Generative AI · Capstone',description:'A bilingual interactive RPG system designed to make AI storytelling accessible, calm, and engaging for older adults.',highlights:['Deployed Llama 3.1:8B for English and Qwen2:7B for Chinese locally through Ollama, avoiding dependence on external model APIs.','Built a rolling-history summarisation mechanism to preserve long-term narrative coherence while keeping the active context manageable.','Designed an 18pt+, high-contrast interface with simple choices and slow voice narration; evaluated output with BERTScore and playtests involving six elderly participants.'],detail:'Flask · Ollama · Llama 3.1 · Qwen2 · gTTS · BERTScore'},
  {number:'02',title:'Electronic Patient-Reported Outcomes',tag:'Health Technology · Research',description:'A cross-platform health system that helps advanced cancer patients record symptoms and communicate meaningful updates to care teams.',highlights:['Collaborated with nursing researchers, clinicians, patients, and caregivers to translate sensitive healthcare requirements into usable product flows.','Created and tested accessible Figma prototypes through interviews and feedback sessions involving 20 patients, caregivers, and doctors.','Developed the mobile experience with Flutter and refined secure data entry and symptom-tracking workflows through usability testing with ten patients.'],detail:'Flutter · Figma · Mobile UX · User interviews · Usability testing'},
  {number:'03',title:'Drone Inventory ERP',tag:'Full-Stack Engineering · Industry',description:'A production-oriented ERP platform for tracking drones and spare parts across operational inventory workflows.',highlights:['Designed PHP and SQL workflows for inventory records, stock movement, and reliable operational data management.','Integrated WeChat authentication with hierarchical role-based access to protect business information and separate user responsibilities.','Implemented QR-code tracking for physical assets and also launched the company website with structured product, news, and multimedia content.'],detail:'PHP · SQL · Authentication · Access control · QR workflows'},
];

export default function Home() {
  return <main>
    <header className="referenceHeader">
      <nav className="referenceNav shell" aria-label="Main navigation">
        <a className="referenceLogo" href="#top" aria-label="Jin Shun Zhu home"><span>JZ</span></a>
        <div className="referenceLinks">
          <a href="#objective">About</a><a href="#work">Featured</a><a href="#work">Portfolio</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </div>
        <div className="referenceSocials">
          <a href="https://github.com/KingstonZhu0711" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <a href="https://www.linkedin.com/in/jin-shun-zhu-a79a52295/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a href="mailto:kingsoonchu@gmail.com" aria-label="Email">@</a>
        </div>
      </nav>
    </header>

    <section className="splitHero" id="top">
      <div className="splitCopy splitCopyLeft">
        <p className="splitKicker">Artificial intelligence</p>
        <h1>AI<br />engineer</h1>
        <p>Designing practical, human-centred intelligent systems with local LLMs, machine learning, and thoughtful research.</p>
      </div>
      <div className="heroPortrait heroPortraitArt" aria-hidden="true"><img src="/hero-v2.png" alt="" /></div>
      <div className="splitCopy splitCopyRight">
        <p className="splitKicker">Software engineering</p>
        <h2>&lt;developer/&gt;</h2>
        <p>Building reliable full-stack products with clean interfaces, secure data flows, and maintainable code.</p>
      </div>
      <div className="heroCode" aria-hidden="true">{'{'}<br />&nbsp;&nbsp;ideas: &quot;useful&quot;,<br />&nbsp;&nbsp;systems: &quot;reliable&quot;<br />{'}'}</div>
    </section>
    <div className="availabilityBar"><span className="statusDot" /> Jin Shun Zhu · MSc AI at NTU Singapore · Open to internships</div>

    <section className="objectiveSection shell" id="objective">
      <div className="objectivePhoto"><img src="/jin-shun-formal.jpg" alt="Jin Shun Zhu in formal business attire" /></div>
      <div className="objectiveContent">
        <p className="sectionLabel">Objective</p>
        <h2>Building reliable AI<br />for <em>real people.</em></h2>
        <p>I am an aspiring AI engineer and software developer pursuing an MSc in Artificial Intelligence at Nanyang Technological University. My work combines machine learning, large language models, human-centred research, and full-stack engineering.</p>
        <p>I am seeking internships in artificial intelligence, machine learning, generative AI, LLM applications, or AI software engineering in Singapore—especially opportunities where modern AI can solve meaningful real-world problems.</p>
        <div className="objectiveActions"><a className="primaryButton" href="/Jin-Shun-Zhu-CV.pdf" target="_blank" rel="noreferrer">View my CV <span>↗</span></a><a className="textLink" href="/Jin-Shun-Zhu-CV.pdf" download>Download PDF ↓</a></div>
      </div>
    </section>

    <section className="section shell" id="work">
      <div className="sectionHeading"><p className="sectionLabel">Selected work</p><h2>Research depth.<br /><em>Production mindset.</em></h2></div>
      <div className="projectList">{projects.map(project => <article className="project" key={project.number}>
        <div className="projectNumber">{project.number}</div><div className="projectMain"><p className="projectTag">{project.tag}</p><h3>{project.title}</h3><p className="projectDescription">{project.description}</p><ul className="projectHighlights">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><p className="projectDetail">{project.detail}</p></div><span className="projectArrow" aria-hidden="true">↗</span>
      </article>)}</div>
      <a className="repositoryLink" href="https://github.com/KingstonZhu0711/PolyU-Courses" target="_blank" rel="noreferrer">View computer science coursework repository ↗</a>
    </section>

    <section className="darkSection" id="experience"><div className="shell darkGrid">
      <div><p className="sectionLabel light">Experience &amp; education</p><h2>Building across<br /><em>disciplines.</em></h2></div>
      <div className="timeline">
        <div className="timelineItem"><p>2026 — Present</p><h3>MSc Artificial Intelligence</h3><span>Nanyang Technological University, Singapore</span></div>
        <div className="timelineItem"><p>2025</p><h3>Software &amp; Web Developer</h3><span>Aerospace Shuwei · ERP and company web platform</span></div>
        <div className="timelineItem"><p>2025</p><h3>Research Assistant</h3><span>The Hong Kong Polytechnic University · Digital health</span></div>
        <div className="timelineItem"><p>2022 — 2026</p><h3>BSc Computer Science</h3><span>Minor in Applied Mathematics · PolyU Hong Kong</span></div>
      </div>
    </div><div className="shell skillsWrap">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>

    <section className="contact shell" id="contact">
      <div className="contactIntro"><p className="sectionLabel">Get in touch</p><h2>Have an internship where<br />AI meets <em>real impact?</em></h2></div>
      <p className="contactCopy">I&apos;m looking for opportunities in AI engineering, machine learning, generative AI, LLM applications, and software development in Singapore.</p>
      <div className="contactMethods">
        <a className="emailLink" href="mailto:kingsoonchu@gmail.com"><small>Email</small> kingsoonchu@gmail.com <span>↗</span></a>
        <a className="emailLink" href="tel:+6586288781"><small>Singapore phone</small> +65 8628 8781 <span>↗</span></a>
        <a className="emailLink" href="https://wa.me/85294714709" target="_blank" rel="noreferrer"><small>WhatsApp · Hong Kong</small> +852 9471 4709 <span>↗</span></a>
        <a className="emailLink" href="/Jin-Shun-Zhu-CV.pdf" target="_blank" rel="noreferrer"><small>Résumé</small> View CV <span>↗</span></a>
      </div>
      <footer><span>© 2026 Jin Shun Zhu</span><div><a href="https://github.com/KingstonZhu0711" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/jin-shun-zhu-a79a52295/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </section>
  </main>;
}
