import Link from "next/link";
import Header from "../features/todo/Header";
import Buttons2 from "../features/todo/Buttons2";
import PostList from "../features/todo/PostList";
import styles from "../styles/Buttons2.module.css";
import { useRouter } from "next/router";

export default function Post() {
  return (
    <>
      <Header />
      <div className={styles.post_div}>
        <Buttons2 />
        <PostList />
      </div>
    </>
  );
}
