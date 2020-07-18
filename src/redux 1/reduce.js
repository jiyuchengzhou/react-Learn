export default function reduce(state = { num: 1 }, action) {
    console.log(action)
    console.log(state)
  switch (action.type) {
    case 'add':
        console.log('调用了加法')
        state.num=state.num+1
        // console.log(state)
        // console.log(state.num)

      return {...state}
    // return 20
    default:
        console.log('没调用')

      return {...state}
    return 10
  }
}

