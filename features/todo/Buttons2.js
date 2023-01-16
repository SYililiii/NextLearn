import Link from "next/link";
import styles from "../../styles/Buttons2.module.css";

export default function Buttons() {
  return (
    <div className={styles.button_div}>
      <Link href="/"><button className={styles.button1}>삭제</button></Link>
      <Link href="/"><button className={styles.button2}>수정</button></Link>
      <Link href="/"><button className={styles.button3}>목록</button></Link>
    </div>
  );
}
