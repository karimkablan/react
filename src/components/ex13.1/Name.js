import React, { Component } from 'react'

export default class Name extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}