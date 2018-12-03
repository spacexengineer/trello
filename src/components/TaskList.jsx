import React, { Component } from "react";

import Task from "./Task";
import AddTask from "./AddTask";

export default class extends Component {
  state = {
    isAddTask: false
  };

  handleClickAddTask = e => {
    this.setState({ isAddTask: true });
  };

  handleClickCancelAddTask = e => {
    e.preventDefault();
    this.setState({ isAddTask: false });
  };

  render() {
    const { groupTasks, sortableGroupDecorator } = this.props;
    const taskElement = groupTasks.map(task => {
      return (
        <Task
          key={task.id}
          taskID={task.id}
          taskTitle={task.title}
          {...this.props}
        />
      );
    });

    return (
      <React.Fragment>
        <div className="tasks" ref={sortableGroupDecorator}>
          {taskElement}
        </div>

        {this.state.isAddTask ? (
          <AddTask
            {...this.props}
            cancelAddTask={this.handleClickCancelAddTask}
          />
        ) : (
          <div onClick={this.handleClickAddTask} className="add-new">
            + Add Card...
          </div>
        )}
      </React.Fragment>
    );
  }
}
