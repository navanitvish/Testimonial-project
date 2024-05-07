import reviews from "./data";
import "./App.css";
import Testinonials from "./Components/Testinonials";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testinomial</h1>
        <div className=" bg-violet-500 h-[4px] w-1/5 mx-auto mt-1"></div>
        <Testinonials reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
