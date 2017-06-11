import { createClass } from 'asteroid';

export default function install(Vue, options = {}) {
  const hostname = options.hostname || 'localhost';
  const port = options.port || '3000';

  const Asteroid = createClass();
  // Connect to a Meteor backend

  const asteroid = new Asteroid({
    endpoint: `ws://${hostname}:${port}/websocket`
  });

  Object.defineProperty(Vue.prototype, '$asteroid', {
    get() { return asteroid; }
  });
}
