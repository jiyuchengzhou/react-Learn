export default function reduce1(state = '小狗', action) {
    console.log(action)
    console.log(state)
  switch (action.type) {
    case 'change':
      if (state==="小狗") {
        state='小猫'
      }else{
        state="小狗"
      }
      return state
    // return 20
    default:
      return state
  }
}

