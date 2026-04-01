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
        let stars: {
            x: number;
            y: number;
            size: number;
            opacity: number;
            targetOpacity: number;
            speed: number;
            color: string
        }[] = [];

        const comets: {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
            angle: number;
        }[] = [];

        const colors = [
            "#ffffff", // White
            "#e0f2fe", // Light Blue
            "#f3e8ff", // Light Purple
            "#fef3c7", // Soft Gold
            "#fae8ff", // Pinkish
        ];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const starCount = Math.floor((canvas.width * canvas.height) / 8000);
            for (let i = 0; i < starCount; i++) {
                const opacity = Math.random() * 0.5 + 0.1;
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.8,
                    opacity: opacity,
                    targetOpacity: opacity,
                    speed: Math.random() * 0.04 + 0.01,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const createComet = () => {
            if (Math.random() > 0.002) return; // Very rare
            comets.push({
                x: Math.random() * canvas.width,
                y: Math.random() * (canvas.height / 2),
                length: Math.random() * 80 + 40,
                speed: Math.random() * 15 + 10,
                opacity: 1,
                angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach((star) => {
                // Twinkle effect
                if (Math.random() > 0.98) {
                    star.targetOpacity = Math.random() * 0.7 + 0.1;
                }
                star.opacity += (star.targetOpacity - star.opacity) * 0.05;

                ctx.globalAlpha = star.opacity;
                ctx.fillStyle = star.color;
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

            // Draw comets
            createComet();
            comets.forEach((comet) => {
                ctx.globalAlpha = comet.opacity;
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(comet.x, comet.y);
                ctx.lineTo(
                    comet.x - Math.cos(comet.angle) * comet.length,
                    comet.y - Math.sin(comet.angle) * comet.length
                );
                ctx.stroke();

                // Move comet
                comet.x += Math.cos(comet.angle) * comet.speed;
                comet.y += Math.sin(comet.angle) * comet.speed;
                comet.opacity -= 0.015;
            });

            // Remove dead comets
            for (let i = comets.length - 1; i >= 0; i--) {
                if (comets[i].opacity <= 0) {
                    comets.splice(i, 1);
                }
            }

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
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#030303] overflow-hidden">
            {/* Nebula Gradients with Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(49,46,129,0.25)_0%,transparent_60%)] animate-cosmic-drift"
                    style={{ animationDuration: '40s' }}
                />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.2)_0%,transparent_60%)] animate-cosmic-drift-reverse"
                    style={{ animationDuration: '55s' }}
                />
                <div
                    className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.15)_0%,transparent_60%)] animate-cosmic-float"
                    style={{ animationDuration: '30s' }}
                />
                <div
                    className="absolute bottom-[20%] left-[5%] w-[45%] h-[45%] bg-[radial-gradient(circle_at_center,rgba(131,24,67,0.15)_0%,transparent_60%)] animate-cosmic-float-reverse"
                    style={{ animationDuration: '45s' }}
                />
            </div>

            <canvas ref={canvasRef} className="absolute inset-0" />

            {/* Final subtle vignette to darken edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,3,0.4)_100%)]" />

            <div className="grid-overlay opacity-20" />
        </div>
    );
}

