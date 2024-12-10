import { Component, inject } from '@angular/core';
import { employees } from '../employees';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
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
      this._apiService.updateEmployee(this.employee.id, this.employee.name, this.employee.salary).subscribe({
        next: () => {
          this.success = true;
          this.err = false;
          this.num0 = false;
        }  
      });
    }
  }
}
