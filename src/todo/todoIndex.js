import React, { Component } from "react";
import ToDoMode from "./todomode";
import './todoIndex.scss'

export default class todoIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{ name: "吃饭" }, { name: "睡觉" }, { name: "打豆豆" }],
      value: "",
    };
  }
  add = () => {
    //   console.log(1)
    this.state.data.push({ name: this.state.value });
    console.log(this.state.data);
    this.setState({
      data: this.state.data,
      value: "",
    });
  };
  getValue = (e) => {
    console.log(e.target.value);

    this.setState({
      value: e.target.value,
    });
  };
  getValue2 = (e) => {
    console.log(e.nativeEvent.keyCode);
    
    if (e.nativeEvent.keyCode=== 13) {
        if(this.state.value.trim()===''){
            alert('输入不能为空')
        }else{

            this.setState({
              value: e.target.value,
            });
            this.add()
        }
    }
    
  };
  del(index) {
    console.log(index);
    console.log(this.state.data);
    this.state.data.splice(index, 1);
    this.setState({
      data: this.state.data,
    });
  }

  render() {
    return (
      <div>
        <div className='todo'>
          <input
          className="w-100"
            onChange={this.getValue}
            value={this.state.value}
            onKeyDown={this.getValue2}
            type="text"
          />
          <button
            onClick={() => {
              this.add();
            }}
            
            // style={this.state.value===''?{display:'none'}:{display:'inline-block'}}
            disabled={this.state.value.trim()===''?true:false}
          >
            添加
          </button>
          <div>{this.state.value}</div>
        </div>

        <div>
          {this.state.data.map((item, index) => {
            return (
              <ToDoMode
                name={item.name}
                key={index}
                num={index}
                del={this.del.bind(this)}
              ></ToDoMode>
            );
          })}
        </div>
      </div>
    );
  }
}
