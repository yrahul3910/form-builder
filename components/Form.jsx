import React from "react";
import PropTypes from "prop-types";

import FormElement from "../components/FormElement.jsx";

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    click() {
        console.log(document.querySelector("input[name='1']:checked").value);
    }

    render() {
        let formGroups = this.props.schema.map((el, i) => 
            <FormElement key={i}
                         index={i}
                         type={el.type}
                         prompt={el.prompt}
                         options={el.options} />
        );

        return (
            <div>
                {formGroups}
                <button id="submit" onClick={this.click}>Submit</button>
            </div>
        );
    }
};

Form.propTypes = {
    schema: PropTypes.array.isRequired
};

export default Form;