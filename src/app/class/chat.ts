import * as moment from 'moment';

export class User {
  uid: number;
  name: string;

  constructor(uid: number, name: string) {
    this.uid = uid;
    this.name = name;
  }

  deserialize() { 
    return Object.assign({}, this);
  }
}

export class Comment { 
  user: User;
  content: string;
  date: number;

  constructor(user: User, content: string) {
    this.user = user;
    this.content = content;
    this.date = +moment();
  }

  deserialize() {
    this.user = this.user.deserialize();
    return Object.assign({}, this);
  }

  // 追加時点の日付を反映
  setData(date: number): Comment {
    this.date = date;
    return this;
  }
}