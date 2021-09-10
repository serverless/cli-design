import styles from 'ansi-styles';

console.log(`${styles.color.ansi16m(...styles.hexToRgb('#fd5750'))}✔ 16m colors${styles.color.close}`)
console.log(`${styles.color.ansi256(styles.hexToAnsi256('#fd5750'))}✔ ANSI 256 colors${styles.color.close}`)
console.log(`${styles.color.ansi(styles.hexToAnsi('#fd5750'))}✔ ANSI 16 colors${styles.color.close}`)
