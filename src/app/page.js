import Counter from "@/components/Counter/Counter";
import Link from "next/link";


const page = () => {
// throw new error()
  return (
    <div>
      <h2 className="text-4xl text-sky-400">Hello World</h2>
    <Counter></Counter>
    <Link href={'/contact'}>
      <button className="btn btn-primary mt-5">Contact</button>
    </Link>
    <Link href={'/news'}>
      <button className="btn btn-primary mt-5 ml-2">News</button>
    </Link>
    </div>
  );
};

export default page;