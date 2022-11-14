class Message {
    constructor(ad, vaxt, metn) {
      this.ad = ad;
      this.vaxt = vaxt;
      this.metn = metn;
    }
  
    toString() {
      return `${this.vaxt} ${this.ad}: ${this.metn}`;
    }
  }
  
  class Messenger {
    constructor() {
      this.messages = [];
    }
  
    show_history() {
      this.messages.forEach((metn) => {
        console.log(metn.toString());
      });
    }
  
    send(ad, text) {
      this.messages.push(new Message(ad, this.gettime(), text));
    }
  
    gettime() {
      let now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    }
  }
  
  let messenger = new Messenger();
  messenger.send("Adil", "ilk mesaj");
  messenger.send("Məryəm", "İkinci mesaj");
  messenger.show_history();
  