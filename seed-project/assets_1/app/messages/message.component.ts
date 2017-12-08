import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Message } from './message.model'
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            width: 80%;
            font-size: 12px;
        }
        .content {
            display: inline-block;
            text-align: right;
            width: 19%;
            font-size: 12px;
        }
    `]
})
export class MessageComponent {
    @Input() message: Message; 
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) {}
    onEdit() {
        this.editClicked.emit('A new message');
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}