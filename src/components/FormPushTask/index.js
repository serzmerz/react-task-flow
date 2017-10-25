import React, {Component} from 'react';
import styles from './index.css';
import {Paper, RaisedButton, TextField} from 'material-ui';
import {convertTime} from '../../utils/index';
import EmptyAlert from "./EmptyAlert";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/tasks';

class FormPushTask extends Component {

    constructor(props) {
        super(props);
        const startTime = localStorage.getItem('timeStart');
        let elapsed = 0;
        let timerStarted = false;
        if(startTime !== null){
            elapsed = Math.floor((Date.now() - Number(startTime)) / 1000);
            timerStarted = true;
        }
        this.state = {
            nameTask: '',
            open: false,
            elapsed,
            timerStarted
        };
    }

    componentWillMount() {
        if(this.state.timerStarted){
            this.timer = setInterval(this.tick, 1000);
        }
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    startTimer = () => {
        this.timer = setInterval(this.tick, 1000);
        this.setState({ timerStarted: true });
        localStorage.setItem('timeStart', (this.state.elapsed*1000) + Date.now());
    };

    stopTimer() {
        clearInterval(this.timer);
        this.setState({elapsed: 0, timerStarted: false });
        localStorage.removeItem('timeStart');
    }

    tick = () => {
        this.setState({elapsed: this.state.elapsed + 1});
    };

    changeName = (e) => {
        this.setState({nameTask: e.target.value});
    };

    pushTask = () => {
        if (this.state.nameTask === '') {
            this.handleOpenAlert();
        }
        else {
            this.props.actions.createTask({
                name: this.state.nameTask,
                time: this.state.elapsed,
                dateEnd: Date.now()
            });
            this.stopTimer();
        }
    };

    handleOpenAlert = () => {
        this.setState({open: true});
    };

    handleCloseAlert = () => {
        this.setState({open: false});
    };

    render() {

        return (
            <div className={styles.wrapInputs}>
                <TextField
                    className={styles.input}
                    floatingLabelText='Name of your task' onChange={this.changeName}
                    value={this.state.nameTask}
                />
                <Paper className={styles.circle} zDepth={3} circle={true}>
                    <div>
                        <div className={styles.wrapTimer}>{convertTime(this.state.elapsed)}</div>
                    </div>
                </Paper>
                {
                    this.state.timerStarted ?
                        <RaisedButton label="Stop" onClick={this.pushTask}/> :
                        <RaisedButton label="Start" onClick={this.startTimer}/>
                }
                <EmptyAlert open={this.state.open} close={this.handleCloseAlert}/>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(FormPushTask);
