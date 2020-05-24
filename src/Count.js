import React from 'react'
import { connect } from 'react-redux'

const Count = props => (
  <div>
    The count is {props.count}
    <button onClick={props.add}>increment</button>
    <button onClick={props.addAsync}>incrementAsync</button>
    <button onClick={props.minus}>decrement</button>
    <button onClick={props.minusAsync}>decrement</button>
  </div>
)

const mapState = state => ({
  count: state.count
})

const mapDispatch = ({ count: { increment, incrementAsync, decrement, decrementAsync } }) => ({
  add: () => increment(1),
  addAsync: () => incrementAsync(1),
  minus: () => decrement(1),
  minusAsync: () => decrementAsync(1),
})

export default connect(mapState, mapDispatch)(Count)
