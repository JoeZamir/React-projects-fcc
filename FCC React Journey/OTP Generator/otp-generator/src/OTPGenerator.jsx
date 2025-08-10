import { useState, useEffect, useRef } from 'react';

export const OTPGenerator = () => {
    const [otp, setOtp] = useState("");
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (timeLeft === 0 && isActive) {
            setIsActive(false);
            return;
        }
        if (isActive) {
            timerRef.current = setTimeout(() => {
                setTimeLeft(prevTime => prevTime - 1)
            }, 1000);
        }

        return () => clearTimeout(timerRef.current)
    }, [timeLeft, isActive]);

    function generateOTP () {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setOtp(newOtp);
        setTimeLeft(5);
        setIsActive(true);
    }
    const renderTimerText = () => {
        if (isActive) {
            return `Expires in: ${timeLeft} seconds`;
        } else if (otp) {
            return "OTP expired. Click the button to generate a new OTP.";
        } else {
            return null;
        }
    };

    return (
        <div className="container">
            <h1 id="otp-title">OTP Generator</h1>
            <h2 id="otp-display"> {otp? otp: "Click 'Generate OTP' to get a code"} </h2>
            {renderTimerText() && (<p id="otp-timer">{renderTimerText()}</p>)}

            <button id="generate-otp-button" onClick={generateOTP} disabled={isActive}>Generate OTP</button>
        </div>
    );
};
