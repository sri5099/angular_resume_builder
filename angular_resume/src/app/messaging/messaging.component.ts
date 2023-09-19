import { Component } from '@angular/core';
import { ChatMessage } from '../chat-message';
import { MessagesService } from '../messages.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

export class MessagingComponent {

  constructor(private messageService: MessagesService) {}

  model = new ChatMessage("");
  
  messageList: string[] = [];

  sendMessage(): void {
    console.log(this.model.msg)
    this.messageService.sendMessage(this.model.msg)
    this.model.msg = "";
  };

ngOnInit(): void {
  this.messageService.getMessage().subscribe((message:string)=> {
    this.messageList.push(message);
  })
}

  submitted = false;

  onSubmit() { 
    this.sendMessage()
    this.submitted = true;
}}