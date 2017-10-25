import React, {Component} from 'react';
import styles from './App.css';
import FormPushTask from '../../components/FormPushTask/index';


class App extends Component {

    render() {
        return (
            <div className={styles.field}>
                <FormPushTask/>
                { this.props.children }
            </div>
        );
    }
}


export default App
