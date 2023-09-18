import { Component } from '@angular/core';
import { ChatMessage } from '../chat-message';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

export class MessagingComponent {

  model = new ChatMessage("");
  
  messageList: string[] = [];

  sendMessage(): void {
  };

ngOnInit(): void {

}

  submitted = false;

  onSubmit() { 

}}