'use client'
import { useState } from 'react'

export default function InteractiveCard({ children, venueName }: { children: React.ReactNode, venueName: string }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={isHovered
                ? 'w-full min-h-[300px] flex flex-col rounded-lg overflow-hidden cursor-pointer shadow-2xl bg-neutral-200 transition-all'
                : 'w-full min-h-[300px] flex flex-col rounded-lg overflow-hidden cursor-pointer shadow-lg bg-white transition-all'}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            {children}
        </div>
    );
}