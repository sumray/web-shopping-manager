import React, {Component} from "react";
import {Button, Layout} from "antd";

class World extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Layout style={{ 'min-height': '100%' }}>
                <Button type={"primary"}>你也好啊</Button>
            </Layout>
        );
    }
}

export default World;