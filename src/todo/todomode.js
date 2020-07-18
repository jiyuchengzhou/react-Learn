import React, { Component } from 'react'

export default class todomode extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <div>
                <span>{this.props.num+1}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <span>12356</span> */}
                <span>{this.props.name}</span>
                <button onClick={()=>{this.props.del(this.props.num)}}>删除</button>
                </div>
            </div>
        )
    }
}
