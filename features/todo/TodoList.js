import styles from "../../styles/todoList.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

// export default function TodoList() {
//   // const [showList, setshowList] = useState();
//   let list = [];
//   // // const jsonData = "/apl/getList"
//   const [showList, setshowList] = useState([])
  
//   fetch("/api/getList")
//     .then(response => response.json())
//     .then(result => setshowList(result))
//     .catch(error => console.log('error',error))

// useEffect(() => {
//   (async () => {
//     const data = await (await fetch(
//       '/api/getList'
//     )).json();
//     setshowList(data.result)
//   })();
// },[])

// fetch("/api/getList")
// .then(res => res.json())
// .then(res => { setshowList(res)});





  // return (
  //   <>
  //     <span>
  //       <b>번호</b>
  //       <b>제목</b>
  //       <b>작성자</b>
  //       <b>작성일</b>
  //       <div></div>
  //     </span>
  //   </>
  // );
  // }

 const TodoList = () => {
    const [showList, setshowList] = useState([])

    useEffect(() => {
      fetch("/api/getList")
      .then(res => res.json()).then(res=>{
        console.log(1, res);
        setshowList(res);
      });
    },[]);

    console.log(2,showList.list[0].id)


    return (
      <>
      <span>
        <b>번호</b>
        <b>제목</b>
        <b>작성자</b>
        <b>작성일</b>
        <div></div>
      </span>
      <span>
        <p>{showList.list[0].id}</p>
        <p>{showList.list[0].title}</p>
        <p>{showList.list[0].reg}</p>
        <p>{showList.list[0].reg_date}</p>
        <div></div>
      </span>   
    </>
    )
  };

  export default TodoList;