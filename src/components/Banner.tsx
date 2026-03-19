"use client";
import style from "./banner.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIdex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className={style.banner} onClick={() => setIdex(index + 1)}>
      <Image
        src={covers[index % 4]}
        alt="covers"
        fill={true}
        style={{ objectFit: "cover" }}
      />
      <div className={style.bannerText}>
        <h1>where every event finds its venue</h1>
        {session?.user?.name && <p>Welcome, {session.user.name}</p>}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 20,
          padding: "10px 20px",
          backgroundColor: "white",
          color: "#333",
          border: "1px solid #7fec54",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        Select Venue
      </button>
    </div>
  );
}
