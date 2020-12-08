import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { RouterModule, Routes } from '@angular/router';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginAssignentComponent } from './assignments/login-assignent/login-assignent.component';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
  { path: 'home', component: AssignmentsComponent},
  { path: 'add', component: AddAssignmentComponent,canActivate:[AuthService]},
  { path: 'assignment/:id', component:AssignmentDetailComponent,canActivate:[AuthGuard]},
  { path: '', component: AssignmentsComponent},
  {path:'assignment/:id/edit', component:EditAssignmentComponent},
  {path:'login',component:LoginAssignentComponent},
  {path:'assignment/:id/edit', component:EditAssignmentComponent,canActivate:[AuthGuard]
}
];

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    LoginAssignentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatButtonModule,
    MatIconModule, MatDividerModule,
    MatInputModule, MatFormFieldModule,
    MatDatepickerModule, MatNativeDateModule,
    MatListModule, MatCardModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
