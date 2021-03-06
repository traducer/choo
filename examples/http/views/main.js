const html = require('../../../html')

module.exports = function (state, prev, send) {
  const error = state.app.errors[0]
  const title = state.api.title
  return html`
    <section>
      <h1>${title}</h1>
      <h2>Latest error: ${error}</h2>
      <button onclick=${(e) => send('api:good')}>OK!</button>
      <button onclick=${(e) => send('api:bad')}>Naughty</button>
    </section>
  `
}
