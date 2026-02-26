"use client";

import React, { useEffect, useRef } from "react";

export function StarfieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const starCount = Math.floor((canvas.width * canvas.height) / 10000); // Subtle, premium density
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5,
                    opacity: Math.random() * 0.5 + 0.1,
                    speed: Math.random() * 0.05 + 0.02, // Very slow drift
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#ffffff";

            stars.forEach((star) => {
                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Slow movement
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#030303]">
            <canvas ref={canvasRef} className="absolute inset-0" />
            <div className="grid-overlay" />
        </div>
    );
}
