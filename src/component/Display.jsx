import React, {Component} from 'react';
import {connect} from 'react-redux';

class Display extends Component{
    render()
    {
        console.log(this.props);
        return(
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

const mapStateToProps = state =>
{
    return(
        {
            number : state.number
        });

};

export default connect(mapStateToProps,null)(Display);