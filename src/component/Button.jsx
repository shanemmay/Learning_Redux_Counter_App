import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../action";
import {increment} from "../action";

class Button extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const action = this.assignAction();
        console.log(action);
        return(
            <div>
                <button onClick={action}>{this.props.text}</button>
            </div>
        );
    }

    assignAction()
    {
        //deciding action to dispatch on click
        let defaultAction = () => {console.log('no action selected')};
        switch(this.props.text)
        {
            case "+":
                return this.props.increment;
            case "-":
                return this.props.decrement;
            case "C":
                return this.props.clear;
            default:
                return defaultAction;
        }
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return(
        {
            increment: () => dispatch(actions.increment()),
            decrement: () => dispatch(actions.decrement()),
            clear: () => dispatch(actions.clear())
        }
    );

};

export default connect(null,mapDispatchToProps)(Button);