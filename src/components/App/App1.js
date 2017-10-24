import React, { Component } from 'react';
import styles from './App.css';
import {Paper, RaisedButton, TextField} from 'material-ui';
import TableComponent from "../Table/index";
import Timer from '../Timer';

class App extends Component {

  constructor() {
      super();
      this.state = {
          nameTask: '',
          tasks: []
      };
  }

  changeName = (e) => {
      this.setState({ nameTask: e.target.value });
  };

  changeTimer = (e) => {
    console.log('tick');
  };

  pushTask  {
      this.setState({tasks: [...this.state.tasks, this.state.nameTask]});
  };

  render() {
    return (
        <div className={styles.field}>
            <TextField
                className={styles.input}
                floatingLabelText='Name of your task' onChange={this.changeName}
                value={this.state.nameTask}
            />
            <Paper className={styles.circle} zDepth={3} circle={true}>
                <Timer/>
            </Paper>
            <RaisedButton label="Stop" onClick={this.pushTask}/>
            <TableComponent/>
        </div>
    );
  }
}

export default App;
