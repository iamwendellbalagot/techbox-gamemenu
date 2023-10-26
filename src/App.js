import Button from "./components/Button";
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import "./tailwind.css";

function App() {
  return (
    <div className="flex flex-col bg-[#2c2f33] h-[100vh] text-[#ffffff]">
      <div className="h-[300px]">
        <Carousel />
      </div>

      <div className="flex flex-1">
        <div className="flex flex-col w-[20%] p-3">
          <div className="flex flex-col">
            <p className="font-bold ">RECOMMENDED</p>
            <hr className="border-[#7289da] opacity-30" />
            <div className="mt-2">
              <Button>Favorites</Button>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <p className="font-bold">GAMES</p>
            <hr className="border-[#7289da] opacity-30" />
            <div className="mt-2">
              <Button>All Games</Button>
              <Button>Online Games</Button>
              <Button>Offline Games</Button>
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-5">
            <p className="font-bold">APPLICATIONS</p>
            <hr className="border-[#7289da] opacity-30" />
            <div className="mt-2">
              <Button>Internet Apps</Button>
              <Button>Office Apps</Button>
            </div>
          </div>
        </div>
        <div className="flex w-[80%] bg-[#23272a] p-3 space-x-3">
          <Cards />
          <Cards />

          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
