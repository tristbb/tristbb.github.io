import "./App.css";
import HeaderCrow from "./components/HeaderCrow";
import SmokeBackground from "./components/smoke/SmokeBackground";

function App() {
  return (
    <div className="flex flex-row w-full h-full ">
      <div className="w-full bg-gray-950">
        <HeaderCrow />
      </div>
      <SmokeBackground />
    </div>
  );
}

export default App;
