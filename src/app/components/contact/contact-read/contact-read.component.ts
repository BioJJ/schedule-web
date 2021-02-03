import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-read',
  templateUrl: './contact-read.component.html',
  styleUrls: ['./contact-read.component.css']
})
export class ContactReadComponent implements OnInit {

  contacts: Contact[]
  displayedColumns = ['id', 'name', 'sex', 'telephone', 'email', 'action']
  
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.read().subscribe(contacts => {
      this.contacts = contacts
    })
  }

}
