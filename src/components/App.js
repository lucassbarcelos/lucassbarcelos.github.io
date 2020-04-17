import React from "react";
import Post from "./Post";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Post
          title="VAMOS VER SE ROLA"
          comment="testando pra ver se rola mesmo "
        />
        <Post title="VAMOS VER SE ROLA" />
        <Post title="VAMOS VER SE ROLA" />
      </div>
    );
  }
}
