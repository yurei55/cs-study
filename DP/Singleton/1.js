//Singleton

const obj = {
  a: 27,
};

const obj2 = {
  a: 27,
};

console.log(obj === obj2); //false

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
  getInstance() {
    return this.instance;
  }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b); //true

//DB연결모듈
const URL = 'mongodb://localhost:27017/kundolapp';
const createConnection = url => ({ url: url });
class DB {
  constructor(url) {
    if (!DB.instance) {
      DB.instance = createConnection(url);
    }
    return Db.instance;
  }
}

const c = new DB(URL);
const d = new DB(URL);
console.log(c === d); //true
