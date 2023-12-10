import React from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";

export default function App() {
  //   const getRandomImg = () => {
  //     let memesDataArray = memesData.data.memes;
  //     let randomImg = Math.floor(Math.random() * memesDataArray.length);
  //     const url = memesDataArray[randomImg].url;
  //     console.log(randomImg);
  //   };
  return (
    <div>
      <Header />
      <Inputs />
    </div>
  );
}
