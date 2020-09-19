import * as moment from 'moment';

export class User { // Userの定義を追加
  uid: number;
  name: string;

  constructor(uid: number, name: string) {
    this.uid = uid;
    this.name = name;
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
}