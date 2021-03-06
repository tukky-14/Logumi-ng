import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { environment } from '../environments/environment'; // Firebaseで追加
import { AngularFireModule } from '@angular/fire'; // Firebaseで追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // Firebaseで追加
import { AngularFireAuthModule } from '@angular/fire/auth'; // Firebaseで追加

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { ChatComponent } from './chat/chat.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DetailComponent } from './detail/detail.component';
import { ChatDatePipe } from './pipe/chat-date.pipe';

@NgModule({
  // そのモジュールの中で宣言されているディレクティブ（コンポーネント）とパイプを登録する
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ListComponent,
    DetailComponent,
    ChatComponent,
    ChatDatePipe
  ],
  // 自分のモジュールに別のモジュールを取り込む
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), // Firebaseで追加
    AngularFirestoreModule,  // Firebaseで追加
    AngularFireAuthModule  // Firebaseで追加
  ],
   // そのモジュールの中で宣言されているサービスを登録する
  providers: [],
  // アプリケーションのエントリポイントになるコンポーネントを指定
  bootstrap: [AppComponent]
})
export class AppModule { }
