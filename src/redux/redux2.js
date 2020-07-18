import React, { Component } from 'react'
import store from './store'

export default class Redux2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             num:store.getState()
        }
    }
    
    render() {
        return (
            <div>
            redux2
                <h1>{this.state.num.reduce.num}</h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                num:store.getState()
            })
        })
        // store.dispatch({type:'add'})
        console.log(store.getState())
    }
}
