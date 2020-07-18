import React, { Component } from 'react'
import store from './store'

export default class Redux extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             num:store.getState()
            // num:5
        }
    }
    
    render() {
        return (
            <div>
                <div>这是学习redex时要显示的主页</div>
                <div>{this.state.num.reduce.num}</div>
                <button onClick={this.add}>加1</button>
            </div>
        )
    }
    add=()=>{
        // console.log(100)
        store.dispatch({type:'add'})
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                num:store.getState()
            })
        })
        // store.dispatch({type:'add'})
        setTimeout(() => {
            
            store.dispatch({type:'add'})
        }, 1);
        // console.log(this.state.num)
        // console.log(store.getState())
        // console.log()
    }
    componentDidUpdate(){
        // store.dispatch({type:'add'})
        console.log(store.getState().reduce.num)
    }
}
