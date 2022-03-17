import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Hello Unknown");
  const [gender, setGender] = useState("");
  useEffect(() => {
    if (gender === "male") {
      setText("Hey Mr.");
    } else if (gender === "female") {
      setText("Hey Miss/Mrs.");
    } else {
      setText("Hello Unknown");
    }
  }, [gender]);
  return (
    <div className="App">
      <select
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <option value="">---</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <h1>{text}</h1>
    </div>
  );
}
