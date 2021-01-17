import React, { Component } from 'react';
import Admin from './modules/Admin';
import Form from './modules/Form';
import Report from './modules/Report';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Report></Report>
         );
    }
}
 
export default App;
