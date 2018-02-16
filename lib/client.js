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
    this.url = '';
    this.lastClientID = 0;
  }

  /**
   * @name open
   * @param {string} url - hydra-router server url
   * @return {undefined}
   */
  open(url) {
    this.ws = new WebSocket(url);
    this.url = url;
    this.ws.on('open', () => {
    });

    this.ws.on('message', (message) => {
      let msg = JSON.parse(message);
      if (msg.typ === 'connection') {
        this.clientID = msg.bdy.id;
        this.writeln(`Connection established: ${this.clientID}`);
      }
      this.writeln(message);
    });

    this.ws.on('close', () => {
      this.writeln('connection closed');
    });

    this.ws.on('error', (error) => {
      try {
        this.writeln(`error detected from client ${this.clientID}`);
      } catch (e) {
        console.log(e, error);
      }
    });
  }

  /**
   * @name close
   * @return {undefined}
  */
  close() {
    this.lastClientID = this.clientID;
    if (this.ws) {
      this.ws.close();
    }
  }

  /**
   * @name reopen
   * @return {undefined}
   */
  reopen() {
    if (this.url) {
      this.open(this.url);
      setTimeout(() => {
        if (this.ws) {
          let msg = UMFMessage.createMessage({
            to: 'hydra-router:/',
            frm: `${this.lastClientID}@client:/`,
            typ: 'reconnection',
            bdy: {
              id: this.lastClientID
            }
          });
          this.sendMessage(JSON.stringify(msg.toShort()));
        }
      }, 2000);
    }
  }

  /**
   * @name createMessage
   * @return {undefined}
   */
  createMessage() {
    let msg = UMFMessage.createMessage({
      to: 'hydra-router:/',
      frm: `${this.clientID}@client:/`,
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
    if (this.ws) {
      this.ws.send(msg);
    }
  }

  /**
   * @name writeln
   * @param {string} str - string text
   * @return {undefined}
   */
  writeln(str) {
    process.stdout.write(`${str}\r\n`);
  }

  /**
   * @name jsonPrint
   * @param {string} str - string to print
   * @return {undefined}
   */
  jsonPrint(str) {
    let o = JSON.parse(str);
    this.writeln(JSON.stringify(o, null, 2));
  }
}

module.exports = new Client();
