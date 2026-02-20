import Background from "./components/background";
import ExplanationText from "./components/explanation-text";
import NumbersSort from "./components/numbers-to-sort";

function App() {
  return (
    <Background>
      <div className="w-full h-screen flex justify-center items-center px-33.5">
        <ExplanationText />
        <NumbersSort />
      </div>
    </Background>
  );
}

export default App;
