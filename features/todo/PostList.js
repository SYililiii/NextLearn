import { setRevalidateHeaders } from 'next/dist/server/send-payload';
import { useState, useEffect, useCallback } from "react";
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import styles from "../../styles/PostList.module.css";



export default function PostList() {
  const [data, setData] = useState([]);
  console.log('json확인',data)

  useEffect(() => {
    fetch(`http://localhost:3000/api/getList?id=${filterId}`)
    .then((res) => res.json())
    .then((data) => setData(data));
  },[]);

  let newArray = data;
  console.log('json확인2',newArray)

  let location;
  let filterId;

  if (typeof document !== "undefined") {
    location = document.location;
    const params = new URLSearchParams(location.search);
    filterId = params.get("id");
  }
  console.log("파라미터확인", filterId);

  // const test = 1;
  // console.log(test)

  // return (
  //   {data.list[0].map(data =>)}
  // )


  // function renderPost() {
  //   for(let i= 0; i<1; i++) {
  //     useParam();
  //     let item = data.list[0];
  //     return (
  //       <div className={styles.row_box}>
  //       <span>
  //         <b>제목</b>
  //         <p>{item.title}</p>
  //         <b>작성자</b>
  //         <p>{item.reg}</p>
  //       </span>
  //       <span>
  //         <b>작성일</b>
  //         <p>{item.reg_date}</p>
  //         <b>수정일</b>
  //         <p>{item.upd_date}</p>
  //       </span>
  //       <span>
  //         <b>내용</b>
  //         <p>{item.content}</p>
  //       </span>
  //     </div>
  //     )
  //   }
  // }

  // return <>{renderPost()}</>;
};

// export default PostList;


