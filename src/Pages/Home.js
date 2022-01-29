import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const abtUrl = useNavigate();
  return (
    <div>
      <h1>Home </h1>
      <div>
        useNavigate is used to navigate between routes(pages), but we can bind
        event listner to it, like onClick. unlike Link proivde by
        react-router-dom
      </div>
      <button
        onClick={() => {
          abtUrl("/about");
        }}
      >
        Go to About
      </button>
    </div>
  );
}

export default Home;
