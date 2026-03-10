// 


 import React, { useState } from "react";
const Home = () => {
 


  const [x, setX] = useState(0);

  const boxWidth = 100; // box ka width

  function handleMouseMove(e) {
    // mouse position - half box width
    setX(e.clientX - boxWidth / 2);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
        position: "relative",
        background: "#f2f2f2",
      }}
    >
      <div
        style={{
          width: boxWidth + "px",
          height: "100px",
          background: "red",
          position: "absolute",
          left: x + "px",
          top: "50%",
        //   transform: "translateY(-50%)",
        //   transition: "0.05s linear",
        }}
      >
        box
      </div>
    </div>
  );
}




export default Home