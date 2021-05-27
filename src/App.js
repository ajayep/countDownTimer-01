import React from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = React.useState(5);
  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <div className="countdown-timer">
      <div className="countdown-timer__circle">
        <svg>
          <circle
            r="24"
            cx="26"
            cy="26"
            style={{
              animation: `countdown-animation ${timer}s linear`
            }}
          />
        </svg>
      </div>
      <div className="countdown-timer__text">{timer}s</div>
    </div>
  );
}
