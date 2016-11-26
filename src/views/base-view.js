import html from 'choo/html'


export default (state, prev, send) => html`

<div class="main">
  <div class="search">
    <a class="pure-button pure-button-primary button-xlarge" id="bt" href="#" onclick=${e => send('bt_click')} >Give your new project an awsome code name :)</a>

  </div>
  <div class="result">
    ${!state.clicked ?
      "" :
      html`
        <div>
          <h1 style="text-align: center;">${ state.random }</h1>

        </div>

      `
    }
  </div>
</div>

`
