'use client';

import { VscDesktopDownload } from 'react-icons/vsc';
import { resume } from '@/data/resume';
import styles from '@/styles/ResumePage.module.css';

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <a
            href="/resume.pdf"
            download="Yash_Aggarwal_Resume.pdf"
            className={styles.downloadBtn}
          >
            <VscDesktopDownload size={14} />
            <span>Download PDF</span>
          </a>
        </div>

        <div className={styles.resume}>
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.name}>{resume.name}</h1>
            <div className={styles.contactRow}>
              <span>{resume.phone}</span>
              <span className={styles.sep}>|</span>
              <a href={resume.emailHref}>{resume.email}</a>
              <span className={styles.sep}>|</span>
              <a href={resume.linkedinHref} target="_blank" rel="noopener noreferrer">{resume.linkedin}</a>
              <span className={styles.sep}>|</span>
              <a href={resume.githubHref} target="_blank" rel="noopener noreferrer">{resume.github}</a>
            </div>
          </header>

          {/* Experience */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            {resume.experience.map((entry, i) => (
              <div key={i} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div>
                    <span className={styles.entryTitle}>{entry.title}</span>
                    {entry.subtitle && (
                      <span className={styles.entrySubtitle}> &mdash; {entry.subtitle}</span>
                    )}
                  </div>
                  <span className={styles.entryDate}>{entry.date}</span>
                </div>
                {entry.location && (
                  <div className={styles.entryLocation}>{entry.location}</div>
                )}
                {entry.items && (
                  <ul className={styles.itemList}>
                    {entry.items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item.text }} />
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* Technical Skills */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <div className={styles.skillsGrid}>
              {resume.skills.map((skill, i) => (
                <div key={i} className={styles.skillRow}>
                  <span className={styles.skillCategory}>{skill.category}:</span>
                  <span>{skill.skills}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            {resume.education.map((entry, i) => (
              <div key={i} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div>
                    <span className={styles.entryTitle}>{entry.title}</span>
                    {entry.location && (
                      <span className={styles.entryLocationInline}> &mdash; {entry.location}</span>
                    )}
                  </div>
                  <span className={styles.entryDate}>{entry.date}</span>
                </div>
                {entry.subtitle && (
                  <div className={styles.entrySubtitleLine}>{entry.subtitle}</div>
                )}
                {entry.notes && (
                  <ul className={styles.notesList}>
                    {entry.notes.map((note, j) => (
                      <li key={j}>{note}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            {resume.projects.map((project, i) => (
              <div key={i} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div>
                    <span className={styles.entryTitle}>{project.title}</span>
                    {project.subtitle && (
                      <span className={styles.techTags}> | {project.subtitle}</span>
                    )}
                  </div>
                  <span className={styles.entryDate}>{project.date}</span>
                </div>
                {project.items && (
                  <ul className={styles.itemList}>
                    {project.items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item.text }} />
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
