import React from "react";

const Inputs = () => {
  return (
    <main>
      <form>
        <section>
          <p>Top text</p>
          <input type="text" placeholder="Write something" />
        </section>
        <section>
          <p>Bottom text</p>
          <input type="text" placeholder="Write something" />
        </section>
      </form>
      <button>Get a new meme image 🖼</button>
      <section className="button-container"></section>
    </main>
  );
};

export default Inputs;
