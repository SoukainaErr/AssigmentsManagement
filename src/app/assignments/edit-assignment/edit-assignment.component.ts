import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignment: Assignment;
  nomAssignment: string;
  dateDeRendu: Date;


  constructor(private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getAssignment();

    console.log("Query Params:");
    console.log(this.route.snapshot.queryParams);
    console.log("Fragment:");
    console.log(this.route.snapshot.fragment);

  }

  getAssignment() {
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force l'id de type string en "number"
    const id = +this.route.snapshot.params.id;
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => this.assignment = assignment);
  }
 
  onSaveAssignment() {
    if(this.nomAssignment) {
      this.assignment.nom = this.nomAssignment;
    };
 
    if(this.dateDeRendu) {
      this.assignment.dateDeRendu = this.dateDeRendu;
    }
    this.assignmentsService.updateAssignment(this.assignment)
      .subscribe(message => console.log(message));
 
    // navigation vers la home page
    this.router.navigate(["/home"]);
  }
 
 
}
