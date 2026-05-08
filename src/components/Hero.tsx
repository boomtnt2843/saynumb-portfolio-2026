import { profile, contacts } from '../data';
import { LinkedInIcon, GmailIcon, GitHubIcon, InstagramIcon } from '../assets/icons';
import styles from './Hero.module.css';
import type { FC } from 'react';

const ICON_MAP: Record<string, FC> = {
  linkedin: LinkedInIcon,
  gmail: GmailIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.label}>Artist Developer — {profile.company}</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.intro}>{profile.intro}</p>
          <div className={styles.current}>
            <span className={styles.chip}>Currently @ {profile.currentSite}</span>
          </div>
          <div className={styles.contacts}>
            {contacts.map((c) => {
              const Icon = ICON_MAP[c.icon];
              return (
                <a
                  key={c.icon}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className={styles.contactLink}
                  aria-label={c.label}
                >
                  {Icon && <Icon />}
                  <span>{c.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.avatarWrap}>
          <img
            src={profile.avatar}
            alt={profile.name}
            className={styles.avatar}
          />
        </div>
      </div>
    </section>
  );
}
