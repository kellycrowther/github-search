import { Component, OnInit, Input } from '@angular/core';
import { IUserResults } from 'src/app/models/user';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() public user: IUserResults;

  constructor() { }

  public ngOnInit(): void {
    console.info('USER: ', this.user);
  }

  public goToUser(url: string): void {
    window.open(url, '_blank');
  }

}
