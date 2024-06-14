"use client";
import { useRouter } from 'next/navigation';

export default function ComposePost() {
   const router = useRouter();
   const handleClose = () => {
      router.back();
    };
 return( 
   <>
      <div>I am the modal</div>
      <button style={{background: 'red'}}onClick={handleClose}>Close</button>
   </>
 )
}