import { Router, ActivatedRoute } from "@angular/router";
import { ContactService } from "../contact.service";
import { Contact } from "../contact.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-delete",
  templateUrl: "./contact-delete.component.html",
  styleUrls: ["./contact-delete.component.css"],
})
export class ContactDeleteComponent implements OnInit {
  contact: Contact;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.readById(id).subscribe((contact) => {
      this.contact = contact;
    });
  }

  deleteProduct(): void {
    this.contactService.delete(this.contact.id).subscribe(() => {
      this.contactService.showMessage("Contato excluido com sucesso!");
      this.router.navigate(["/contacts"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/contacts"]);
  }
}
