import React, { useState } from "react";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Pixel from "./Pixel";
import ColorPicker from "./ColorPicker";

const GET_PIXELS = gql`
  subscription GetPixels {
    pixels(order_by: { id: asc }) {
      color
      id
    }
  }
`;

function App() {
  const { loading, error, data } = useSubscription(GET_PIXELS);
  const [color, changeColor] = useState("white");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="content">
      <div className="logo">Draw With Hasura</div>
      <p>1.Pick a Color</p>
      <ColorPicker changeColor={changeColor} />
      <p>2. Click a Pixel</p>
      <div className="container">
        {data.pixels.map((pixel) => (
          <Pixel {...pixel} key={pixel.id} newColor={color} />
        ))}
      </div>
      <footer className="footer">
        Based off{" "}
        <a href="https://welearncode.com/hasura-101/">this tutorial</a> by Ali
        Spittel
      </footer>
    </div>
  );
}

export default App;
