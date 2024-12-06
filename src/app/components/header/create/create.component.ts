import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { employees } from '../employees';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  public employee: employees;
  public err: boolean = false;
  public success: boolean = false;
  private _apiService = inject(ApiService);

  constructor() {
    this.employee = new employees('', '', '');
  }

  validateForm(){
    if(!this.employee.name || !this.employee.salary){
      this.err = true;
    }else{
      this.err = false;
    }
  }

  onSubmit(){
    if(!this.employee.name || !this.employee.salary){
      this.err = true;
    }else{
      this._apiService.createEmployee(this.employee.id, this.employee.name, this.employee.salary).subscribe({
        next: () => {
          this.success = true;
        }
      })
    }
  }

}
