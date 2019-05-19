import React from "react";
import PropTypes from "prop-types";

import FormElement from "../components/FormElement.jsx";

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.schema.map((el, i) => 
            <FormElement key={i}
                         index={i}
                         type={el.type}
                         prompt={el.prompt}
                         options={el.options} />
        );
    }
};

Form.propTypes = {
    schema: PropTypes.array.isRequired
};

export default Form;