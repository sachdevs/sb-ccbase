import React from "react";
import App from "./App";

export default function Component({
  text,
  onClick,
  updateText,
}: {
  text: string;
  onClick: () => Promise<void>;
  updateText: (t: string) => void;
}) {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ background: "#fafafa" }}>
      <h1>Welcome Custom Component</h1>
      <h1>{text}</h1>
      <button onClick={() => setCount((x) => x + 2)}>
        React State Clicked: {count}
      </button>
      <button
        onClick={() => {
          updateText(text + "!");
        }}
      >
        Add text to header
      </button>
      <button onClick={onClick}>Fire testing onClick</button>
      <App />
      <br />
      <div>This content is being served on a different server.</div>
      <div style={{ background: "white" }}>
        {" "}
        Look, it even hot reloads! Just develop!
      </div>
    </div>
  );
}
