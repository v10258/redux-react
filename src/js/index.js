
import React from 'react'
import ReactDOM from 'react-dom'
/*import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)*/
const rootEl = document.getElementById('root');

console.log(rootEl);

ReactDOM.render(
<div>hello world!</div>,
rootEl  
)
//store.subscribe(render)