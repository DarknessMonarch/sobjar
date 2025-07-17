"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/notfound.module.css";
import NotFoundImage from "@/public/assets/notfound.png";

import { MdKeyboardDoubleArrowRight as BackIcon } from "react-icons/md";

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
      router.push("/"); 
    
  };

  return (
    <div className={styles.notFound}>
      <Image
        className={styles.notFoundImg}
        src={NotFoundImage}
        height={240}
        alt="Not found image"
        priority={true}
      />
      <h1>Page your looking for has been moved or doesn't exist</h1>
    </div>
  );
}
