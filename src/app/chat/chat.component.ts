import { CommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../class/chat';

const COMMENTS: Comment[] = [ 
  { name: "Suzuki Taro",  content: "１つ目のコメントです。"},
  { name: "Suzuki Taro",  content: "２つ目のコメントです。"},
  { name: "Suzuki Taro",  content: "３つ目のコメントです。"}
];


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
  public content:string = '';
  public comments = COMMENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
