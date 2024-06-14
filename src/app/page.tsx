"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("home");
  };
  return (
    <>
      <div>I am the root page</div>
      <button style={{ background: "blue" }} onClick={handleOnClick}>
        Go to homepage
      </button>
    </>
  );
}
