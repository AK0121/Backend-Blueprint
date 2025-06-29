import Todo  from "@/app/components/Todo"
import Posts from "./components/Posts";

export default function Home() {
  return (
    <div className="h-screen w-full text-3xl">
      <div className="h-screen w-full pt-16">
      <Todo />
      </div>

      <div className="h-screen w-full">
      <Posts />
      </div>
    </div>
  );
}
