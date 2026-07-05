'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Yash Aggarwal</h1>
              <p className={styles.role}>Analyst at Ernst & Young LLP</p>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/Ya-s-h" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m an analyst at Ernst & Young LLP specializing in enterprise automation and backend engineering.
                I build fast data systems, reliable scraping pipelines, APIs, and automation using Python, MongoDB,
                and Elasticsearch.
              </p>
              
              <p className={styles.paragraph}>
                Previously at Lyxel Labs, I worked on backend systems and developed a chatbot from scratch that
                managed multiple chat sessions, conversation context, and chat history. I&apos;m also exploring
                practical AI and automation workflows with LangChain and MCP.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Present</span>
                </div>
                <h3 className={styles.expRole}>Analyst</h3>
                <p className={styles.expCompany}>Ernst & Young LLP</p>
                <ul className={styles.expList}>
                  <li>Specializing in enterprise automation and backend engineering for large-scale systems</li>
                  <li>Building fast data pipelines and reliable backend services with Python and MongoDB</li>
                  <li>Designing scraping pipelines and data workflows that support analytics and automation</li>
                  <li>Working with Elasticsearch, Redis, and cloud-native tooling for performance and reliability</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Previous</span>
                </div>
                <h3 className={styles.expRole}>Software Developer</h3>
                <p className={styles.expCompany}>Lyxel Labs</p>
                <ul className={styles.expList}>
                  <li>Built backend systems and chatbot infrastructure from scratch</li>
                  <li>Implemented multi-user chat handling, session state, and conversation context</li>
                  <li>Focused on data performance, reliability, and scalable backend logic</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
              <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>SQL</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>APIs</span>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>Data Pipelines</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Automation</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Enterprise Automation</span>
                    <span className={styles.skillTag}>Chatbots</span>
                    <span className={styles.skillTag}>Workflow Design</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>LangChain</span>
                    <span className={styles.skillTag}>MCP</span>
                    <span className={styles.skillTag}>Git</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Engineering Focus</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I focus on backend systems, automation, and scalable data infrastructure.
                My work centers on making services reliable, maintainable, and easy to operate.
              </p>
              
              <p className={styles.paragraph}>
                I enjoy exploring practical automation patterns, AI-assisted workflows, and
                building systems that help teams move faster.
              </p>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Aside from programming and writing, I enjoy reading dystopian novels, 
                listening to calm piano music, or just enjoying some downtime.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
