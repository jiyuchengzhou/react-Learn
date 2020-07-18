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
                <h1>{this.state.num.reduce1}</h1>
                <button onClick={()=>{store.dispatch({type:"gai"})}}>改名</button>
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
