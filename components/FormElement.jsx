import React from "react";
import PropTypes from "prop-types";

class FormElement extends React.Component {
    render() {
        let promptElement = <div className="prompt">{this.props.prompt}</div>;
        let innerElement;

        if (this.props.type == "radio" || this.props.type == "checkbox")
            innerElement = this.props.options.map((opt, i) =>
                <div key={i}>
                    <input type={this.props.type} name={this.props.index}
                           value={opt} 
                           id={this.props.index.toString() + "_" + i.toString()} />
                    <label htmlFor={this.props.index.toString() + "_" + i.toString()}>
                        {opt}
                    </label>
                </div>
            );
        else if (this.props.type == "text")
            innerElement = (
                <input type="text" id={this.props.index} />
            );
                
        return (
            <div className="form-group">
                {promptElement}
                {innerElement}
            </div>
        );
    }
};

FormElement.propTypes = {
    index: PropTypes.any.isRequired,
    prompt: PropTypes.string.isRequired,
    options: PropTypes.array,
    type: PropTypes.string.isRequired
};

export default FormElement;