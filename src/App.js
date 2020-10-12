import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <MemeGenerator />
        <h1 className="sign">
          By: <span>Manish Kumar</span>
        </h1>
      </div>
    );
  }
}

export default App;
