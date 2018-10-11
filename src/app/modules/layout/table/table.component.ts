import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {UpdatemodalComponent} from '../updatemodal/updatemodal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: User[];
  closeResult: string;


  constructor(private userService: UserService,private modalService: NgbModal) { }

  ngOnInit() {
    this.userService.getusers().subscribe(
      data=>{
        this.users = data;
      },
      err=>{
        console.log("error occured" + err);
      }
    );
  }

  open(user: User) {
    const modalRef = this.modalService.open(UpdatemodalComponent);
  modalRef.componentInstance.name = 'World';
  modalRef.componentInstance.user = new User();
  modalRef.componentInstance.user.id =user.id;
  modalRef.componentInstance.user.fname = user.fname;
  modalRef.componentInstance.user.lname = user.lname;
  modalRef.componentInstance.user.email = user.email;
  }


}
