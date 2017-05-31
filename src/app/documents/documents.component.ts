import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    selector: 'documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
    pageTitle: string = 'Document Dashboard';

    documents: Document[] = [
        {
            title: 'My First Doc',
            description: 'connecting the microchip won\'t do anything, we need to bypass the auxiliary PNG capacitor!',
            file_url: 'http://google.com',
            updated_at: '11/22/17',
            image_url: 'http://i.imgur.com/VMDIqHj.png'
        },
        {
            title: 'My Second Doc',
            description: 'transmitting the panel won\'t do anything, we need to synthesize the open-source CSS circuit!',
            file_url: 'http://google.com',
            updated_at: '11/22/17',
            image_url: 'http://i.imgur.com/PN8cLiq.png'
        },
        {
            title: 'My Last Doc',
            description: 'If we program the bus, we can get to the THX card through the virtual SSL matrix!',
            file_url: 'http://google.com',
            updated_at: '11/22/17',
            image_url: 'http://i.imgur.com/8Hzjv0e.gif'
        },
    ]
}