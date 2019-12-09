// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor (props){
        super (props)
        this.state = {secondsLeft: props.initialCount}
    }

    // cant' use this.props in constructor
    // constructor (){
    //     super ()
    //     this.state = {secondsLeft: this.props.initialCount}
    // }

    countDown(){
        let oneDown = this.state.secondsLeft -1
        setTimeout(()=>{
            this.setState({secondsLeft: oneDown})
        },1000)
    }

    message(){ 
        if (this.state.secondsLeft >0){
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        } else {
            return <p>Boom!</p>
        }
    }

    render (){
        this.countDown()
        return this.message()

    }
}