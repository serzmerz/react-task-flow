import React from 'react';
import {RaisedButton, TableRow, TableRowColumn} from "material-ui";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/tasks';
import TableOfList from "./TableOfList";
import {Link} from "react-router-dom";
import {convertDateToTime, convertTime} from "../../utils/index";

class TableComponent extends React.Component {

    deleteTask = (id) => () => {
        this.props.actions.deleteTask(id)
    };

    makeItems = () => this.props.items.map((item) => (<TableRow key={item.id}>
            <TableRowColumn>{item.id}</TableRowColumn>
            <TableRowColumn>{item.name}</TableRowColumn>
            <TableRowColumn>{convertDateToTime(item.dateEnd - (item.time*1000))}</TableRowColumn>
            <TableRowColumn>{convertDateToTime(item.dateEnd)}</TableRowColumn>
            <TableRowColumn>{convertTime(item.time)}</TableRowColumn>
        <TableRowColumn><Link to={`info/${item.id}`}><RaisedButton label="info"/></Link></TableRowColumn>
            <TableRowColumn><RaisedButton label="delete" onClick={this.deleteTask(item.id)}/></TableRowColumn>
        </TableRow>));

    render() {
        return (<TableOfList items={this.makeItems()}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.tasks.items
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);