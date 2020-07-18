import React, { Component } from "react";
// import store from './store'
import { connect } from "react-redux";
import {Link,withRouter} from 'react-router-dom'

class Redux extends Component {
  // constructor(props) {
  //     super(props)

  //     this.state = {
  //          num:store.getState()
  //         // num:5
  //     }
  // }
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  componentDidMount(){
    console.log(55555555555)

    console.log(this.props)
    // this.props.history.push('/man/index')
  }

  render() {
    const name = { name: 2 };
    return (
      <div>
      redux
        <div>这是学习redex时要显示的主页</div>
        <div>{this.props.value.num}</div>
        <div>{this.props.name}</div>
        <button  onClick={() => {
            this.props.gai(name.name);
          }} >改名</button>
        <button
          onClick={() => {
            this.props.add(name.name);
          }}
        >
          加1
        </button>
          <Link to="man/index">跳转地址</Link>
      </div>
    );
  }
  // componentDidMount() {
  //   console.log(this.props);
  // }

  // add=()=>{
  //     // console.log(100)
  //     // store.dispatch({type:'add'})
  // }
  // componentDidMount(){
  //     // store.subscribe(()=>{
  //     //     this.setState({
  //     //         num:store.getState()
  //     //     })
  //     // })
  //     // store.dispatch({type:'add'})
  //     // setTimeout(() => {

  //     //     store.dispatch({type:'add'})
  //     // }, 1);
  //     // console.log(this.state.num)
  //     // console.log(store.getState())
  //     // console.log()
  // }
  componentDidUpdate() {
    console.log(this.props);
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.reduce,
    name:state.reduce1
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: (value) => {
      console.log(ownProps);
      console.log(value);
      dispatch({ type: "add" });
    },
    gai: () => {
      dispatch({ type: "change" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
