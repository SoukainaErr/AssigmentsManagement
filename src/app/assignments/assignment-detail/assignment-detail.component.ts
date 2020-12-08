import { Component, /*Input ,*/ OnInit } from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentsService} from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  /*@Input()*/ assignmentTransmis:Assignment;

  constructor(private assignmentService:AssignmentsService, private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
  this.getAssignment();
  }

  getAssignment(){
    const id = +this.route.snapshot.params.id;
    this.assignmentService.getAssignment(id).subscribe(assignment=> this.assignmentTransmis=assignment);
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentService.updateAssignment(this.assignmentTransmis)
      .subscribe((message) => console.log(message));

      this.assignmentTransmis=null;
      this.router.navigate(["home"]);
  }

  onDelete() {
    this.assignmentService.deleteAssignment(this.assignmentTransmis)
    .subscribe((message) => console.log(message));

    this.assignmentTransmis=null;

    this.router.navigate(["home"]);
  }
  onClickEdit(){
    this.router.navigate(["/assignment", this.assignmentTransmis.id,'edit'],
    {queryParams:{nom:this.assignmentTransmis.nom},fragment:'edition'});
  }

  
}
