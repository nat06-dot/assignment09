'use client' 

import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating"; 
import { useState } from "react"; // นำ useState กลับมาใช้

interface CardProps {
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venueName: string, rating: number | null) => void;
}

export default function Card({ venueName, imgSrc, onRatingChange }: CardProps) {
  // สร้าง State ของตัวเอง เพื่อให้เวลาข้อมูลใน Map ถูกลบ ดาวตรงนี้จะได้ไม่ Reset
  const [ratingValue, setRatingValue] = useState<number | null>(0);

  return (
    <InteractiveCard venueName={venueName}>
      <div className={`${styles.card} flex flex-col h-full w-full bg-white`}>
        <div className={styles.cardimg}>
          <Image 
            src={imgSrc}
            alt={`${venueName} picture`}
            fill={true}
            style={{ objectFit: "cover" }} 
          />
        </div>
        <div className={styles.cardtext}>
          {venueName}
        </div>

        <div className="mt-auto">
          <div className="px-4 py-2 flex justify-center" onClick={(e) => e.stopPropagation()} >
            <Rating 
              id={`${venueName} Rating`}
              name={`${venueName} Rating`}
              data-testid={`${venueName} Rating`}
              
              // ควบคุมค่าดาวด้วย State ภายใน Card
              value={ratingValue}
              onChange={(event, newValue) => {
                // 1. เปลี่ยนดาวบนการ์ด
                setRatingValue(newValue);
                // 2. ส่งค่ากลับไปเก็บใน Map ของ CardPanel
                if (onRatingChange) {
                  onRatingChange(venueName, newValue);
                }
              }}
            />
          </div>        
        </div>
      </div> 
    </InteractiveCard>
  );
}