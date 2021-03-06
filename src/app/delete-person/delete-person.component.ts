import { Component, OnInit, Input, Output, SimpleChanges } from "@angular/core";
import { WebService } from "../service/web.service";
import { Person } from "../model/person";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-delete-person",
  templateUrl: "./delete-person.component.html",
  styleUrls: ["./delete-person.component.scss"],
})
export class DeletePersonComponent implements OnInit {
  person: Person;

  constructor(
    private service: WebService,
    private rota: ActivatedRoute,
    private local: Location
  ) {}

  deletePerson() {
    let person: Person = this.service.getPerson(this.person._id);
    if (this.service.deletePerson(person)) {
      alert("Pessoa excluida com sucesso!");
    } else {
      alert("Pessoa não encontrada.");
    }
  }

  ngOnInit(): void {
    let index = this.rota.snapshot.paramMap.get("index");
    this.person = this.service.getPerson(index);
  }

  voltar(): void {
    this.local.back();
  }
}
