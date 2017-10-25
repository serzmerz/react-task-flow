import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class EmptyAlert extends React.Component {

    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.props.close}
            />,
        ];

        return (
            <div>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.props.close}
                >
                    You are trying close your task without name, enter the title and try again!
                </Dialog>
            </div>
        );
    }
}
