import React from "react";

class MemeGenerator extends React.Component {
  state = {
    upperText: "",
    lowerText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
    allMemesImg: [],
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ allMemesImg: response.data.memes });
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemesImg.length);
    const randImg = this.state.allMemesImg[randNum].url;
    this.setState({
      randomImg: randImg,
    });
  };

  render() {
    return (
      <div className="meme">
        <form onSubmit={this.handleSubmit} className="myForm">
          <input
            type="text"
            placeholder="Upper text"
            name="upperText"
            value={this.state.upperText}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Lower text"
            name="lowerText"
            value={this.state.lowerText}
            onChange={this.handleChange}
          ></input>
          <button>Generate</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.upperText}</h2>
          <h2 className="bottom">{this.state.lowerText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
