'use strict'


import choo from 'choo'
import baseview from './views/base-view'
import intel from '../data/intel'





const app = choo()


app.model({
  state: {
    names: [
      ...intel()
    ],
    clicked: false,
    delay: 2000,
    random: "",
  },

  reducers: {
    bt_switch: (data, state) => ({clicked: !state.clicked}),
    set_name: (data, state) => ({random: data.name}),
  },

  effects: {
    bt_click: (data, state, send, done) => {
      if (!state.clicked) {
        var random = state.names[Math.floor(Math.random()*state.names.length)]

        send('set_name',{name:random},done)
        send('bt_switch',done)



        setTimeout(() => {
          send('bt_switch',done)
        }, state.delay)
      }
    },
  }
})




app.router((route) => [
  route('/', baseview)
])



document.body.appendChild(app.start())
