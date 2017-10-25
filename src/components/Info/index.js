import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Divider, FlatButton, Paper} from "material-ui";
import ActionBack from 'material-ui/svg-icons/navigation/arrow-back'
import {Link} from "react-router-dom";
import {convertDateToTime, convertTime} from "../../utils/index";
import styles from './index.css';

class Info extends Component {

    render() {
        return (
            <Paper className={styles.wrapItems} zDepth={3} >
                <Link to='/'><FlatButton
                    icon={<ActionBack />}
                /></Link>
                <div className={styles.item}>
                    <span>№:</span><span className={styles.right}>{this.props.task.id}</span>
                </div>
                <Divider className={styles.divider} />
                <div className={styles.item}>
                    <span>Name:</span><span className={styles.right}>{this.props.task.name}</span>
                </div>
                <Divider className={styles.divider} />
                <div className={styles.item}>
                    <span>Time Start:</span><span className={styles.right}>{convertDateToTime(this.props.task.dateEnd - (this.props.task.time*1000))}</span>
                </div>
                <Divider className={styles.divider} />
                <div className={styles.item}>
                    <span>Time End:</span><span className={styles.right}>{convertDateToTime(this.props.task.dateEnd)}</span>
                </div>
                <Divider className={styles.divider} />
                <div className={styles.item}>
                    <span>Time Spent:</span><span className={styles.right}>{convertTime(this.props.task.time)}</span>
                </div>
                <Divider className={styles.divider} />
            </Paper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        task: state.tasks.items.find(item => item.id === Number(ownProps.match.params.id))
    }
};
export default connect(mapStateToProps)(Info)
