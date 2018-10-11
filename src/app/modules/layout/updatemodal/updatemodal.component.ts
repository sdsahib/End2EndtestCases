import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updatemodal',
  templateUrl: './updatemodal.component.html',
  styleUrls: ['./updatemodal.component.css']
})
export class UpdatemodalComponent {


  @Input() id;
  
  @Input() user : User;
  constructor(public activeModal: NgbActiveModal, private userService: UserService,
      private router: Router) { }

  
  update(){
  
    console.log('data' + this.user.fname);  
    this.userService.updateUsers(this.user).subscribe(
      data=>{
         console.log(data);
      },err=>{
 
      },()=>{
      
        this.activeModal.close('saved');
        location.reload();
        
      }
    );
  }

}
