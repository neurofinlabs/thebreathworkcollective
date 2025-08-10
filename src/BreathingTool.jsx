import React, { useState, useEffect } from "react";

const BreathingTool = () => {
    const steps = [
        { label: "Inhale", duration: 4, color: "#cce7ff", scale: 1.3, glow: "0 0 25px #80bfff" },
        { label: "Hold", duration: 7, color: "#fff5cc", scale: 1.3, glow: "0 0 20px #ffe680" },
        { label: "Exhale", duration: 8, color: "#ffd6cc", scale: 0.8, glow: "0 0 15px #ff9f80" },
        { label: "Rest", duration: 4, color: "#e0ffcc", scale: 1.0, glow: "0 0 10px #a6ff80" }
    ];

    const [stepIndex, setStepIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(steps[0].duration);
    const [running, setRunning] = useState(false);
    const [background, setBackground] = useState(steps[0].color);
    const [scale, setScale] = useState(steps[0].scale);
    const [glow, setGlow] = useState(steps[0].glow);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev > 1) {
                        return prev - 1;
                    } else {
                        // Advance to next step
                        const nextIndex = (stepIndex + 1) % steps.length;
                        setStepIndex(nextIndex);
                        setBackground(steps[nextIndex].color);
                        setScale(steps[nextIndex].scale);
                        setGlow(steps[nextIndex].glow);
                        return steps[nextIndex].duration;
                    }
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [running, stepIndex, steps]);

    const startBreathing = () => {
        setRunning(true);
        setStepIndex(0);
        setTimeLeft(steps[0].duration);
        setBackground(steps[0].color);
        setScale(steps[0].scale);
        setGlow(steps[0].glow);
    };

    const resetBreathing = () => {
        setRunning(false);
        setStepIndex(0);
        setTimeLeft(steps[0].duration);
        setBackground(steps[0].color);
        setScale(steps[0].scale);
        setGlow(steps[0].glow);
    };

    return (
        <div
            className="p-5 text-center rounded mx-auto"
            style={{
                backgroundColor: background,
                transition: "background-color 1s ease",
                width: '400px',   // wider background width
                maxWidth: '90vw'  // responsive max width
            }}
        >
            <h3>{steps[stepIndex].label}</h3>
            <div style={{ fontSize: "3rem", fontWeight: "bold" }}>
                {Math.ceil(timeLeft)} {/* only complete seconds */}
            </div>

            <div
                style={{
                    width: "90px",
                    height: "90px",
                    margin: "20px auto",
                    backgroundColor: "#ffffff40",
                    borderRadius: "50%",
                    boxShadow: glow,
                    transition: "transform 1s ease-in-out, box-shadow 1s ease",
                    transform: `scale(${scale})`
                }}
            ></div>

            <div className="mt-3">
                {!running ? (
                    <button className="btn btn-primary me-2" onClick={startBreathing}>
                        Start
                    </button>
                ) : (
                    <button className="btn btn-warning me-2" onClick={() => setRunning(false)}>
                        Pause
                    </button>
                )}
                <button className="btn btn-danger" onClick={resetBreathing}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default BreathingTool;
