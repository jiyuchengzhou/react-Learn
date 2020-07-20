import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import "./echart.scss";

export default class echarts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  getOption = () => {
    let option = {
      color: ["#2f89cf"],
      title: {
        text: "用户骑行订单",
      },
      tooltip: {
        //展示数据
        trigger: "axis",
      },
      grid: {
        left: "20%",
        right: "20%",
        // top:"20%",
        tooltip: {
          axisPointer: {
            type: "shadow",
          },
        },
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        name: "横轴",
        nameTextStyle: {
          fontStyle: "italic",
          fontSize: 20,
        },
        axisLabel: {
          show: true,
          color: "blue",
          fontSize: 15,
          // textShadowOffsetX:1,
          // textShadowColor:'blue',
        },
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: "订单量",
          type: "bar",
          barWidth: "35%",
          data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0],
          },
        },
      ],
    };
    return option;
  };
  getOption2 = () => {
    let option = {
      color:["blue"],
      // legend: {
      //     data: ['2011年', '2012年']
      // },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
        show:false
          // type: 'value',
          // boundaryGap: [0, 0.01]
      },
      yAxis:[ {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            fontSize:20
          },
        
      },
      {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
        axisLine:{
          show:false
        },
        axisTick:{
          show:false
        },
        axisLabel:{
          fontSize:20
        },
      
    }
    
    ],
      series: [
          {
              name: '2011年',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230],
              barWidth:"35%",
              itemStyle:{
                // borderColor:"red",
                barBorderRadius:[0,5,5,0]
              },
              showBackground:true,
              backgroundStyle:{
                color:"yellow",
                borderColor:"#f00",
                borderWidth:1,
                barBorderRadius:[0,5,5,0]
              },
              label:{
                show:true,
                position:"inside",
                formatter:"{c}"
              }
          },
          // {
          //     name: '2012年',
          //     type: 'bar',
          //     data: [19325, 23438, 31000, 121594, 134141, 681807]
          // }
      ]
  };
    return option;
  };

  render() {
    return (
      <div className="echart-page">
        <div>
          <div>学习使用echarts的页面</div>
          <div className="echart-index">
            <ReactEcharts
              className="echart1"
              style={{ width: "100%", height: "200px" }}
              option={this.getOption()}
            />
          </div>
          <br/>
          <div style={{height:"20px",width:"100%",background:"red"}}></div>
          <div className="echart-index2">
            <ReactEcharts
              className="echart1"
              style={{ width: "100%", height: "300px" }}
              option={this.getOption2()}
            />
          </div>
        </div>
      </div>
    );
  }
}
