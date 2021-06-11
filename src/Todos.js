import React, { Component } from "react";
import "./App.css";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.complete = this.complete.bind(this);
    this.editor = this.editor.bind(this);
    this.delete = this.delete.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  complete() {
    this.props.onCompleteClick(this.props.id);
  }

  editor() {
    this.props.onCancelEditClick(this.props.id);
  }

  delete() {
    this.props.onDeleteClick(this.props.id);
  }

  keyPress(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.props.onEditClick(this.props.id, e.target.value);
      this.edit = !this.edit;
    } else if (e.keyCode === 13 && e.target.value === "") {
      this.props.onCancelEditClick(this.props.id, this.props.todos);
      this.edit = !this.edit;
    } else if (e.keyCode === 27 && e.target.value === "") {
      this.props.onCancelEditClick(this.props.id, this.props.todos);
      this.edit = !this.edit;
    }
  }

  render() {
    //deconstuct props

    const { todos, id, completed, edit } = this.props;

    return (
      <div>
        {edit ? (
          <div>
            <br></br>
          </div>
        ) : (
          <div
            onClick={this.complete}
            className="App"
            style={{
              textDecoration: completed ? "line-through" : "none"
            }}
          >
            <h4>
              <p>
                <br />
                {todos}
              </p>
            </h4>
          </div>
        )}
        {edit ? (
          <div>
            <input
              style={{
                "font-family":
                  "Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans-serif",
                "font-size": "32px",
                "background-color": "#333",
                color: "#00ff00"
              }}
              type="text"
              name="title"
              placeholder={todos}
              onKeyDown={this.keyPress}
            />
            <div onClick={this.editor}>
              {" "}
              <br></br>[Cancel]{" "}
            </div>
          </div>
        ) : (
          <div>
            <div onClick={this.editor}> [rEdit] </div>
            <div onClick={this.delete}> [Delete] </div>
          </div>
        )}
      </div>
    );
  }
}

export default Todos;
