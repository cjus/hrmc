const WebSocket = require('ws');
const UMFMessage = require('./UMFMessage');

/**
* @name Client
* @summary Message Client
*/
class Client {
  /**
  * @name constructor
  * @summary class constructor
  * @return {undefined}
  */
  constructor() {
    this.ws = null;
  }

  /**
   * @name open
   * @param {string} url - hydra-router server url
   * @return {undefined}
   */
  open(url) {
    this.ws = new WebSocket(url);

    this.ws.on('open', () => {
    });

    this.ws.on('message', (message) => {
      let msg = JSON.parse(message);
      if (msg.typ === 'connection') {
        this.clientID = msg.bdy.id;
        this.writeln(`Connection established: ${this.clientID}`);
      }
      console.log(message);
    });

    this.ws.on('close', () => {
      this.writeln('connection closed');
    });

    this.ws.on('error', (error) => {
      try {
        this.writeln(`error detected from client ${this.clientID}`);
      } catch (e) {
        this.writeln(e, error);
      }
    });
  }

  /**
   * @name close
   * @return {undefined}
  */
  close() {
    this.ws.close();
  }

  /**
   * @name createMessage
   * @return {undefined}
  */
  createMessage() {
    let msg = UMFMessage.createMessage({
      to: 'hydra-router:/',
      frm: `${this.clientID}@client:/`,
      typ: '',
      bdy: {}
    });
    this.writeln(JSON.stringify(msg.toShort()));
  }

  /**
   * @name sendMessage
   * @param {string} msg - message craeted with createMessage
   * @return {undefined}
   */
  sendMessage(msg) {
    this.ws.send(msg);
  }

  /**
   * @name writeln
   * @param {string} str - string text
   * @return {undefined}
   */
  writeln(str) {
    process.stdout.write(str);
    process.stdout.write('\r\n');
  }
}

module.exports = new Client();
