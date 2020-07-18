export default function reduce(state = { num: 1 }, action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "add":
      console.log("调用了加法");
      state.num = state.num + 1;
      // console.log(state)
      // console.log(state.num)

      return { ...state };
    // return 20
    default:
      return { ...state };
  }
}
