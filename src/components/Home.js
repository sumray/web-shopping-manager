import React, { Component } from 'react';
import { Button, message, Layout } from 'antd';


class HomePage extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Layout style={{ 'min-height': '100%' }}>
                <Button type={"primary"}>你好啊</Button>
            </Layout>
        );
    }
}

export default HomePage;

