import { useState, useEffect } from "react";
import { Navigation } from "./Components/navigation";
import { Header } from "./Components/header";
import { About } from "./Components/about";
import { Gallery } from "./Components/gallery";
import { Links } from "./Components/Links";
import JsonData from "./data/data.json";
import "./App.css";



const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      {/* <Gallery data={landingPageData.Gallery}/> */}
      <Links data={landingPageData.Links}/>
      </div>
  );
};

export default App;
