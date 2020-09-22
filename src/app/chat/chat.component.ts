import { CommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Comment, User } from '../class/chat'; 
import { AngularFirestore } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';

const CURRENT_USER: User = new User(1, 'No name'); // 自分のUser情報を追加
// const CURRENT_USER: User = new User(1, 'Tanaka Jiro'); // 自分のUser情報を追加
// const ANOTHER_USER: User = new User(2, 'Suzuki Taro'); // 相手のUser情報を追加

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
  public content = '';
  public comments: Observable<Comment[]>;
  public currentUser = CURRENT_USER;

  // DI（依存性注入する機能を指定）
  constructor(private db: AngularFirestore) {
    this.comments = db
      .collection<Comment>('comments', ref => {
        return ref.orderBy('date', 'asc');
      })
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(action => {
          // 日付をセットしたコメントを返す
          const data = action.payload.doc.data() as Comment;
          const commentData = new Comment(data.user, data.content);
          commentData.setData(data.date);
          return commentData;
        })));
  }

  // 新しいコメントを追加
  addComment(e: Event, comment: string) {
    e.preventDefault();
    if (comment) {
      this.db
        .collection('comments')
        .add(new Comment(this.currentUser, comment).deserialize()); 
      this.content = '';
    }
  }


  ngOnInit(): void {
  }

}
