import { Component,  Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../model/user';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() id;
  
  @Input() user : User;

  constructor(public activeModal: NgbActiveModal) { }


}
