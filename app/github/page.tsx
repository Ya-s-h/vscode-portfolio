'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson, VscStarEmpty, VscRepoForked, VscLinkExternal, VscGithub, VscLoading } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Ya-s-h';

export default function GithubPage() {
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`),
        ]);

        if (!userRes.ok || !repoRes.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const userData = await userRes.json();
        const reposData = await repoRes.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.loadingState}>
            <VscLoading className={styles.loadingIcon} size={32} />
            <p>Loading GitHub data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.loadingState}>
            <p>Failed to load GitHub data. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.profile}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={80}
              height={80}
              priority
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>{user.login}</h1>
              <span className={styles.handle}>@{user.login}</span>
            </div>
          </div>

          <a 
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <VscGithub size={18} />
            <span>View Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepo size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.public_repos}</span>
              <span className={styles.statLabel}>Repositories</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscPerson size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.followers}</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscStarEmpty size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
              </span>
              <span className={styles.statLabel}>Total Stars</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepoForked size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {repos.reduce((acc, repo) => acc + repo.forks, 0)}
              </span>
              <span className={styles.statLabel}>Total Forks</span>
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contribution Activity</h2>
          <div className={styles.contributions}>
            <GitHubCalendar
              username={GITHUB_USERNAME}
              hideColorLegend
              hideMonthLabels
              colorScheme="dark"
              theme={{
                dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              style={{
                width: '100%',
              }}
            />
          </div>
        </section>

        {/* Repositories */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular Repositories</h2>
            <a 
              href={`https://github.com/${user.login}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewAll}
            >
              View All
              <VscLinkExternal size={14} />
            </a>
          </div>
          
          <div className={styles.reposGrid}>
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
