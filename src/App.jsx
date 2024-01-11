import { useState } from "react";
import Quote from "./components/Quote";
import Previous from "./components/Previous";
import Next from "./components/Next";

import "./App.css";

export default function App({ quotes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (direction) => () => {
    let nextIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;

    if (nextIndex >= quotes.length) {
      nextIndex = 0;
    }

    if (nextIndex < 0) {
      nextIndex = quotes.length - 1;
    }

    setCurrentIndex(nextIndex);
  };

  return (
    <div className="App">
      <div className="App__quoteContainer">
        <Quote quote={quotes[currentIndex]} />
      </div>

      <div className="App__navigation">
        <Previous onClick={navigate("prev")} />
        <Next onClick={navigate("next")} />
      </div>
    </div>
  );
}
