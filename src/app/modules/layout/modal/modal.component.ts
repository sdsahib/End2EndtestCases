import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() id;

  @Input() user: User;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }


  save() {


    console.log('data' + this.user.lname);

    this.userService.saveUsers(this.user).subscribe(
      data => {
        console.log(data);

      }, err => {

      }, () => {
        
        location.reload();
      }
    );
  }

}
