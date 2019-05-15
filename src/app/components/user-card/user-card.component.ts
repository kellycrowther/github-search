import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IUser, IUserDetail } from 'src/app/models/user';
import { SearchService } from 'src/app/services/search/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {

  @Input() public user: IUser;
  public userDetail$: Observable<IUserDetail>;

  constructor(public searchService: SearchService) { }

  public ngOnInit(): void {
    this.userDetail$ = this.searchService.getUserDetail(this.user.login);
  }

  public goToUser(url: string): void {
    window.open(url, '_blank');
  }

}
