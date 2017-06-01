import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'Customer1', 'https://google.com', 
    'Ruby on Rails', 150, 100, 10, 'm.rogach@gmail.com');
    proposalTwo: Proposal = new Proposal(1123, 'Customer2', 'https://google.com', 
    'Ruby on Rails', 150, 100, 10, 'm.rogach@gmail.com');
    proposalThree: Proposal = new Proposal(321, 'Customer3', 'https://google.com', 
    'Ruby on Rails', 150, 100, 10, 'm.rogach@gmail.com');

    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree];
}
