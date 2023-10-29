import { useEffect, useState } from "react";

import Button from "./components/Button";
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Search from "./components/Search";

import "./tailwind.css";
import "./index.css";

function App() {
  const [selected, setSelected] = useState("Online Games");
  const [config, setConfig] = useState(null);
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    fetch("../public/config.json") //-->> Prod
      // fetch("/config.json")
      .then((response) => response.json())
      .then((data) => setConfig(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (config) {
      setAppList(config.games.online_games);
    }
  }, [config]);

  useEffect(() => {
    if (config) {
      switch (selected) {
        case "Online Games":
          setAppList(config.games.online_games);
          break;
        case "Offline Games":
          setAppList(config.games.offline_games);
          break;
        case "All Games":
          const allGames = [
            ...config.games.online_games,
            ...config.games.offline_games,
          ];
          setAppList(allGames);
          break;
        case "Internet Apps":
          setAppList(config.applications.internet_apps);
          break;
        case "Office Apps":
          setAppList(config.applications.office_apps);
          break;
        case "Favorites":
          setAppList(config.recommended.favorites);
          break;
        default:
          setAppList(config.games.online_games);
      }
    }
  }, [selected]);

  return (
    <div className="flex flex-col bg-[#2c2f33] h-[80 0px] text-[#ffffff] p-5">
      <div className="h-[250px]">
        <Carousel />
      </div>

      <div className="flex flex-1">
        <div className="flex flex-col w-[20%] p-3 h-[500px]">
          <div className="flex flex-col">
            <p className="font-bold ">RECOMMENDED</p>
            <hr className="border-[#7289da] opacity-30" />
            <div className="mt-2">
              <Button selected={selected} setSelected={setSelected}>
                Favorites
              </Button>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <p className="font-bold">GAMES</p>
            <hr className="border-[#7289da] opacity-30" />
            <div className="mt-2">
              <Button selected={selected} setSelected={setSelected}>
                All Games
              </Button>
              <Button selected={selected} setSelected={setSelected}>
                Online Games
              </Button>
              <Button selected={selected} setSelected={setSelected}>
                Offline Games
              </Button>
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-5">
            <p className="font-bold">APPLICATIONS</p>
            <hr className="border-[#7289da] opacity-30" />
            <div className="mt-2">
              <Button selected={selected} setSelected={setSelected}>
                Internet Apps
              </Button>
              <Button selected={selected} setSelected={setSelected}>
                Office Apps
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[80%] bg-[#23272a] p-3 h-[500px] ">
          <div className="mb-5 mt-2">
            <Search />
          </div>
          <div className="flex flex-wrap overflow-y-scroll card-scroll">
            {appList.map((data) => (
              <Cards data={data} key={data.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
