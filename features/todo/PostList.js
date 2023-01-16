import { useState, useEffect } from "react";

function PostList() {
  let location;
  let filterId;
  if (typeof document !== "undefined") {
    location = document.location;
    const params = new URLSearchParams(location.search);
    filterId = params.get("id");
    console.log("파라미터확인", filterId);
  }

  const [showList, setshowList] = useState([])

  useEffect(() => {
    fetch("/api/getList")
    .then(res => res.json()).then(res=>{
      setshowList(res);
    });
  },[]);

  console.log('json확인',showList)
  
  
//   let renderPost = () => {
//     for(let i = 0; i < Object.values(showList.list).length; i++) {
//       if (filterId == showList.list[i].id) {
//         console.log('test')
//     }
//   }
// }


  return (
    <>
      <span>
        <b>제목</b>
        <p>dummy</p>
        <b>작성자</b>
        <p>dummy</p>
      </span>
      <span>
        <b>작성일</b>
        <p>dummy</p>
        <b>수정일</b>
        <p>dummy</p>
      </span>
      <span>
        <b>내용</b>
        <p>dummy</p>
      </span>
      {/* {showList.list && showList.list.map((list,i) => (
        <span className={styles.row_list}>
          <p>{i+1}</p>
          <Link href={`/Post?id=${list.id}`}>{list.title}</Link>
          <p>{list.reg}</p>
          <p>{list.reg_date}</p>
        </span>
        ))} */}
    </>
  )

}

export default PostList;
