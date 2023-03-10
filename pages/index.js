import TodoList from "../features/todo/TodoList";
import Buttons from "../features/todo/Buttons";
import Header from "../features/todo/Header";
import Pages from "../features/todo/Pages";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Header />
      <Buttons />
      <TodoList />
      <Pages />
    </>
  );
}
