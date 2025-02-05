import React from "react";

const Inputs = () => {
  const [prop, setProp] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes))
      .catch((error) =>
        console.log(error, "Zapytanie do API nie powiodło się")
      );
  });

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setProp((prevProp) => {
      return Object.assign({}, prevProp, { randomImage: url });
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setProp((prevProp) => {
      return Object.assign({}, prevProp, { [name]: value });
    });
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
