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
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

 open(){
  const modalRef = this.modalService.open(ModalComponent);
  modalRef.componentInstance.name = 'World';
  modalRef.componentInstance.user = new User();
  modalRef.componentInstance.user.id =1;
  modalRef.componentInstance.user.fname = "sahib";
  modalRef.componentInstance.user.lname = "singh";
  modalRef.componentInstance.user.email ="singh@teksystems.com";

  
 }

 
}
