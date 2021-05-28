import { Component, OnInit } from '@angular/core';
import { ChatModel,User} from './chat'; // 追加
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const CURRENT_USER:User = new User(1,"Tanaka");
// const ANOTHER_USER:User = new User(2,"Suzuki");
// const COMMENTS:ChatModel[]=[
//   new ChatModel(ANOTHER_USER, 'Suzukiの１つ目のコメントです。'),
//   new ChatModel(ANOTHER_USER, 'Suzukiの2つ目のコメントです。'),
//   new ChatModel(CURRENT_USER, 'Tanakaの１つ目のコメントです。'),
//   new ChatModel(ANOTHER_USER, 'Suzukiの3つ目のコメントです。'),
//   new ChatModel(CURRENT_USER, 'Tanakaの2つ目のコメントです。')
// ];

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // item: Observable<any>;
  public content="";
  public comments: Observable<any>
  public currentUser=CURRENT_USER;

  constructor(private db: AngularFirestore) {
    this.comments = db
      .collection<ChatModel>('comments', ref => {
        return ref.orderBy('date', 'asc');
      })
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(action => {
          // 日付をセットしたコメントを返す
          const data = action.payload.doc.data() as ChatModel;
          const key = action.payload.doc.id;
          const commentData = new ChatModel(data.user, data.content);
          commentData.setData(data.date, key);
          return commentData;
        })));
  }

  //dbにコメントを追加する
  addComment(e:Event, comment:string){
    if(comment){
      this.db
        .collection('comments')
        .add(new ChatModel(this.currentUser, comment).deserialize());
      this.content='';
    }
  }

  // 編集フィールドの切り替え
  toggleEditComment(comment: ChatModel) {
    comment.editFlag = (!comment.editFlag);
  }

  // db内のコメントを更新する
  saveEditComment(comment: ChatModel) {
    this.db
      .collection('comments')
      .doc(comment.key)
      .update({
        content: comment.content,
        date: comment.date
      })
      .then(() => {
        alert('コメントを更新しました');
        comment.editFlag = false;
      });
  }

  // コメントをリセットする
  resetEditComment(comment: ChatModel) {
    comment.content = '';
  }

  deleteComment(key: string) { // 追加
    this.db
      .collection('comments')
      .doc(key)
      .delete()
      .then(() => {
        alert('コメントを削除しました');
      });
  }

  ngOnInit(): void {
  }

}
