import React from "react";
import memesData from "../memesData";

const Inputs = () => {
  const [prop, setProp] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const arrayOfMemes = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * arrayOfMemes.length);
    const url = arrayOfMemes[randomNumber].url;
    setProp((prevProp) => {
      return {
        ...prevProp,
        randomImage: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setProp((prevProp) => ({
      ...prevProp,
      [name]: value,
    }));
  }

  return (
    <main>
      <form>
        <section>
          <p>Top text</p>
          <input
            type="text"
            placeholder="Write something"
            name="topText"
            value={prop.topText}
            onChange={handleChange}
          />
        </section>
        <section>
          <p>Bottom text</p>
          <input
            type="text"
            placeholder="Write something"
            name="bottomText"
            value={prop.bottomText}
            onChange={handleChange}
          />
        </section>
      </form>
      <section>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </section>
      <div className="meme">
        <img src={prop.randomImage} className="meme--image" alt="Meme" />
        <h2 className="meme--text top">{prop.topText}</h2>
        <h2 className="meme--text bottom">{prop.bottomText}</h2>
      </div>
    </main>
  );
};

export default Inputs;
