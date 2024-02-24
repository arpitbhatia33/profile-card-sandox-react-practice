import "./styles.css";
import Avatar from "./Avatar";
import Name from "./Name";
import Intro from "./Intro";
import Skillset from "./Skillset";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Name />
      <Intro />
      <Skillset />
    </div>
  );
}
