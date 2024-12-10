import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { employees } from '../employees';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  public employee: employees;
  public num0: boolean = false;
  public success: boolean = false;
  private _apiService = inject(ApiService);
  constructor() {
    this.employee = new employees('', '', '');
  }

  
  onSubmit() {
    if(!this.employee.id || isNaN(this.employee.id) || this.employee.id <= 0){
      this.num0 = true;
      this.success = false;
    }else{
      this._apiService.deleteEmployee(this.employee.id).subscribe({
        next: () => {
          this.success = true;
          this.num0 = false;
        }
      });
    } 
  }
}
