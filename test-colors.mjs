import styles from 'ansi-styles';

console.log(`${styles.red.open}✔ base ANSI red${styles.red.close}`)
console.log(`${styles.color.ansi(styles.hexToAnsi('#fd5750'))}✔ Serverless red converted to ANSI 16 colors (code: ${styles.hexToAnsi('#fd5750')})${styles.color.close}`)
console.log(`${styles.color.ansi256(styles.hexToAnsi256('#fd5750'))}✔ Serverless red converted to ANSI 256 colors (code: ${styles.hexToAnsi256('#fd5750')} = 'LightCoral' - #ff8787)${styles.color.close}`)
console.log(`${styles.color.ansi16m(...styles.hexToRgb('#fd5750'))}✔ Serverless red in 16m colors (#fd5750)${styles.color.close}`)
