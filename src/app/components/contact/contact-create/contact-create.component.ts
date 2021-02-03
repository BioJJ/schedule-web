import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact: Contact = {
    name: '',
    sex: '',
    telephone: '',
    email: ''
  }

  constructor(private contactService: ContactService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createContact(): void {
    this.contactService.create(this.contact).subscribe(() => {
      this.contactService.showMessage('Contato criado!')
      this.router.navigate(['/contacts'])
    })

  }

  cancel(): void {
    this.router.navigate(['/contacts'])
  }
}
