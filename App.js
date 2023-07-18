import React from "react";
import Todo from "./component/TodoApp";
// const fav_series = "amazon";
// // FavS is a Component -------if else condition apply
// const FavS = () => {
//   if (fav_series === "netflix") {
//     return <Amazon />;
//   } else {
//     return <Netflix />;
//   }
// };

function App() {
  return (
    <>
      {/* <div className="cards"></div> */}
      <Todo />
    </>
  );
}

export default App;
