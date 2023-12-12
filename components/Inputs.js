import React from "react";
import memesData from "../memesData";

const Inputs = () => {
  const [prop, setProp] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImage] = React.useState(memesData);

  function getMemeImage() {
    const arrayOfMemes = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * arrayOfMemes.length);
    const url = arrayOfMemes[randomNumber].url;
    setProp(() => {
      return {
        topText: "",
        bottomText: "",
        randomImage: url,
      };
    });
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
      <img className="meme-image" src={prop.randomImage} alt="random" />
    </main>
  );
};

export default Inputs;
