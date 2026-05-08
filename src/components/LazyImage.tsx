import { useState } from 'react';
import styles from './LazyImage.module.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.wrap}>
      {!loaded && <div className={styles.skeleton} />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className ?? ''} ${styles.img} ${loaded ? styles.visible : styles.hidden}`}
      />
    </div>
  );
}
