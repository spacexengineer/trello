import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class extends Component {
  state = {
    isTaskClicked: false
  };

  handleClick = () => {
    this.setState({
      isTaskClicked: true
    });
  };

  handleCancel = () => {
    this.setState({
      isTaskClicked: false
    });
  };

  render() {
    const { taskID, groupID, taskTitle, onClickTask } = this.props;
    const { isTaskClicked } = this.state;

    return (
      <div
        onClick={onClickTask.bind(this, taskID, groupID)}
        className="tasks__item"
        id={taskID}
      >
        <div onClick={this.handleClick}>{taskTitle}</div>
      </div>
    );
  }
}
