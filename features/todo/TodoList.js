import styles from "../../styles/todoList.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import Index from "../../pages/index";
import { useEffect, useState, Router, Route, Routes } from "react";
import { allList } from '../../data/list';



const TodoList = () => {
    return (
      <>
      <div className={styles.row_box}>
      <span className={styles.row_list}>
        <b>번호</b>
        <b>제목</b>
        <b>작성자</b>
        <b>작성일</b>
      </span>
      {allList.map((list,i) => (
        <span className={styles.row_list}>
          <p>{i+1}</p>
          <Link href={`/Post?id=${list.id}`}>{list.title}</Link>
          <p>{list.reg}</p>
          <p>{list.reg_date}</p>
        </span>
        ))}
    </div>
    </>
    )
  };

  export default TodoList;