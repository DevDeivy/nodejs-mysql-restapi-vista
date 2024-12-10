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
  public num0: boolean = false;
  public success: boolean = false;
  private _apiService = inject(ApiService);

  constructor() {
    this.employee = new employees('', '', '');
  }

  onSubmit(){
    const idNumb = Number(this.employee.id);
    if(!this.employee.name || !this.employee.salary){
      this.err = true;
      this.num0 = false;
      this.success = false;
    }else if(isNaN(idNumb) || idNumb <= 0){
      this.num0 = true;
      this.err = false;
      this.success = false;
    }else{
      this._apiService.createEmployee(this.employee.id, this.employee.name, this.employee.salary).subscribe({
        next: () => {
          this.success = true;
          this.num0 = false;
          this.err = false;
        }
      })
    }
  }
}
