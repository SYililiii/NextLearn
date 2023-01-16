import Link from "next/link";
import styles from "../../styles/Buttons.module.css";

export default function Buttons() {
  return (
    <div className={styles.button_div}>
      <Link href="/"><button className={styles.button}>글쓰기</button></Link>
    </div>
  );
}
