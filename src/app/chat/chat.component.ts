import { CommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Comment, User } from '../class/chat'; 
import { AngularFirestore } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs'; 

const CURRENT_USER: User = new User(1, 'Tanaka Jiro'); // 自分のUser情報を追加
const ANOTHER_USER: User = new User(2, 'Suzuki Taro'); // 相手のUser情報を追加
const COMMENTS: Comment[] = [ // クラスを元にコメントを作成
  new Comment(ANOTHER_USER, 'Suzukiの１つ目のコメントです。'),
  new Comment(ANOTHER_USER, 'Suzukiの2つ目のコメントです。'),
  new Comment(CURRENT_USER, 'Tanakaの１つ目のコメントです。'),
  new Comment(ANOTHER_USER, 'Suzukiの3つ目のコメントです。'),
  new Comment(CURRENT_USER, 'Tanakaの2つ目のコメントです。')
];

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
  item: Observable<Comment>; 
  public content:string = '';
  public comments = COMMENTS;
  public current_user = CURRENT_USER;

  addComment(comment: string) {
    if (comment) {
      this.comments.push(new Comment(this.current_user, comment));
    }
 }

  constructor(db: AngularFirestore) {
    this.item = db
      .collection('comments')
      .doc<Comment>('item')
      .valueChanges();
  }

  ngOnInit(): void {
  }

}
