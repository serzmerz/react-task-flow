import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from "material-ui";
import styles from './index.css';
import Chart from '../Chart'

const TableOfList = ({items}) => {
    return (<div>
    <Table className={styles.table}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn>№</TableHeaderColumn>
                <TableHeaderColumn>Name of task</TableHeaderColumn>
                <TableHeaderColumn>Time start</TableHeaderColumn>
                <TableHeaderColumn>Time end</TableHeaderColumn>
                <TableHeaderColumn>Time spent</TableHeaderColumn>
                <TableHeaderColumn/>
                <TableHeaderColumn/>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {items}
        </TableBody>
    </Table>
        <Chart/>
    </div>)
};
export default TableOfList;