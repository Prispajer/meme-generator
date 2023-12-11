import React from "react";
import memesData from "../memesData";

const Inputs = () => {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <form>
        <section className="input-write --left">
          <p>Top text</p>
          <input type="text" placeholder="Write something" />
        </section>
        <section className="input-write --right">
          <p>Bottom text</p>
          <input type="text" placeholder="Write something" />
        </section>
      </form>
      <section className="button-container">
        <button onClick={getMemeImage}>Get a new meme image 🖼 </button>
      </section>
      <img className="meme-image" src={memeImage} alt="random" />
    </main>
  );
};

export default Inputs;
