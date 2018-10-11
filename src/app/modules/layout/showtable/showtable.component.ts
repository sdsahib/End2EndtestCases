import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../modal/modal.component';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-showtable',
  templateUrl: './showtable.component.html',
  styleUrls: ['./showtable.component.css']
})
export class ShowtableComponent implements OnInit {
  closeResult: string;
  user: User;
  modalRef ;
  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit() {
  }

 open(){
  this.modalRef = this.modalService.open(ModalComponent);
  this.modalRef.componentInstance.name = 'World';
  this.modalRef.componentInstance.user = new User();
  this.modalRef.componentInstance.user.id =1;
  // modalRef.componentInstance.user.fname = "sahib";
  // modalRef.componentInstance.user.lname = "singh";
  // modalRef.componentInstance.user.email ="singh@teksystems.com";

  
 }

 

 
}
