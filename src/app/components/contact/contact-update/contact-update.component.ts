import { Contact } from "../contact.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ContactService } from "../contact.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-update",
  templateUrl: "./contact-update.component.html",
  styleUrls: ["./contact-update.component.css"],
})
export class ContactUpdateComponent implements OnInit {
  contact: Contact;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.contactService.readById(id).subscribe((contact) => {
      this.contact = contact;
    });
  }

  updateContact(): void {
    this.contactService.update(this.contact).subscribe(() => {
      this.contactService.showMessage("Contato atualizado com sucesso!");
      this.router.navigate(["/contacts"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/contacts"]);
  }
}
