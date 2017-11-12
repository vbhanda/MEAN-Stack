import { Component} from '@angular/core';
import { Message } from './messages/message.model'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [
        new Message ('some message', 'Vipul'),
        new Message ('Another message', 'Vipul'),
        new Message ('3rd message', 'Vippy'),
    ]
}