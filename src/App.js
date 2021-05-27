import React from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = React.useState(5);
  const [alpha, setAlpha] = React.useState(0);
  const id = React.useRef(null);
  const pathRef = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };

  const π = Math.PI;
  const t = (5 / 360) * 1000;

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    console.log(timer);
    setAlpha(alpha + 72);
    var α = alpha % 360;
    var r = (α * π) / 180,
      x = Math.sin(r) * 125,
      y = Math.cos(r) * -125,
      mid = α > 180 ? 1 : 0,
      anim = "M 0 0 v -125 A 125 125 1 " + mid + " 1 " + x + " " + y + " z";
    pathRef.current.setAttribute("d", anim);
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <div className="timer">
      <svg className="rotate" viewBox="0 0 250 250">
        <path ref={pathRef} id="loader" transform="translate(125, 125)" />
      </svg>
      <div className="dots">
        <span className="time deg0"></span>
        <span className="time deg45"></span>
        <span className="time deg90"></span>
        <span className="time deg135"></span>
      </div>
    </div>
  );
}
