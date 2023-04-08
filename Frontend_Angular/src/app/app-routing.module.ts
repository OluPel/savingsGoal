import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { SavingsPageComponent } from './savings-page/savings-page.component';
import { SavingsTrackerComponent } from './savings-tracker/savings-tracker.component';
import { CreateGoalPageComponent } from './create-goal-page/create-goal-page.component';
import { CreateTargetComponent } from './create-target/create-target.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'savingsPage', component:SavingsPageComponent},
  {path: 'success', component:SuccessPageComponent},
  {path: 'savingsTracker', component:SavingsTrackerComponent},
  {path: 'createGoal', component:CreateGoalPageComponent},
  {path: 'createTarget', component:CreateTargetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
