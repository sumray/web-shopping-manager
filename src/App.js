import React, { Component } from 'react';


class App extends Component {
    
    render() {
        return <p>{this.props.children}</p>;
    }

}

export default App;