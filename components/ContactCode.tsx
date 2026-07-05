import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'yashagg.com',
    href: 'https://yashagg.com',
  },
  {
    social: 'github',
    link: 'Ya-s-h',
    href: 'https://github.com/Ya-s-h',
  },
  {
    social: 'linkedin',
    link: 'yash-aggarwal-76a2851ba',
    href: 'https://www.linkedin.com/in/yash-aggarwal-76a2851ba/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
