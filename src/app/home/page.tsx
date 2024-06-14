"use client";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const handleOnClick = () => {
      router.push("compose/post");
    };
    return( 
        <>
       <div>I am the homepage</div>
            <button style={{ background: "green" }} onClick={handleOnClick}>
                Open modal
            </button>
        </>
    )
   }