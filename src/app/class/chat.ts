import * as moment from 'moment';

export class User { // Userの定義を追加
  uid: number;
  name: string;

  constructor(uid: number, name: string) {
    this.uid = uid;
    this.name = name;
  }

  deserialize() { // 追加
    return Object.assign({}, this);
  }
}

export class Comment { // Commentの定義を変更
  user: User;
  content: string;
  date: number;

  constructor(user: User, content: string) {
    this.user = user;
    this.content = content;
    this.date = +moment();
  }

  deserialize() { // 追加
    this.user = this.user.deserialize();
    return Object.assign({}, this);
  }

  // 追加時点の日付を反映
  setData(date: number): Comment { // 追加
    this.date = date;
    return this;
  }
}