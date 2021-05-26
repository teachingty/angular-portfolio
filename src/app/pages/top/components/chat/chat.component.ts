import { Component, OnInit } from '@angular/core';
import { ChatModel,User} from './chat'; // 追加

const CURRENT_USER:User = new User(1,"Tanaka");
const ANOTHER_USER:User = new User(2,"Suzuki");
const COMMENTS:ChatModel[]=[ // クラスを元にコメントを作成
  new ChatModel(ANOTHER_USER, 'Suzukiの１つ目のコメントです。'),
  new ChatModel(ANOTHER_USER, 'Suzukiの2つ目のコメントです。'),
  new ChatModel(CURRENT_USER, 'Tanakaの１つ目のコメントです。'),
  new ChatModel(ANOTHER_USER, 'Suzukiの3つ目のコメントです。'),
  new ChatModel(CURRENT_USER, 'Tanakaの2つ目のコメントです。')
];

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public content="";
  public comments=COMMENTS;
  public currentUser=CURRENT_USER;

  addComment(comment:string){
    if(comment){
      this.comments.push(new ChatModel(this.currentUser, comment))
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
