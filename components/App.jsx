import React from "react";
import Form from "../components/Form.jsx";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { "schema": [], "loaded": false };
    }

    async componentDidMount() {
        let response = await fetch("/api/schema");
        let schema = await response.json();
        console.log(schema);

        this.setState({ schema: schema.schema, loaded: true });
    }

    render() {
        if (!this.state.loaded)
            return (
                <div>
                    Loading...
                </div>
            );
        else
            return <Form schema={this.state.schema} />;
    }
};