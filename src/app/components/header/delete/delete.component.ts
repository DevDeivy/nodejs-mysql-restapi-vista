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
  public employeeid: employees[] = [];
  public err: boolean = false;
  public success: boolean = false;
  private _apiService = inject(ApiService);
  constructor() {
    this.employee = new employees('', '', '');
  }

  validateForm() {
    if(!this.employee.id) {
      this.err = true;
    }else {
      this.err = false;
    }
  }

  onSubmit() {
    this.validateForm();{
      this._apiService.deleteEmployee(this.employee.id).subscribe({
        next: () => {
          this.success = true;
        }
      });
    } 
  }
}
