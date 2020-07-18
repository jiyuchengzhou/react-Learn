export default function name(state = "小李", action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "gai":
      // console.log('调用了加法')
      // state.num=state.num+1
      // console.log(state)state
      // console.log(state.num)
      if(state ==="小张"){
        state='小李'
      }else{
        state ="小张"
      }
      ;
      return state;
    default:
      // state = "小黄";
      // return ;
      // break;
      return state;
  }
}
