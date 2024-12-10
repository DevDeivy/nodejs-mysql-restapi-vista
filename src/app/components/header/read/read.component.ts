import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {

  private _apiService = inject(ApiService);
  public employees: any;

  ngOnInit(){
    this._apiService.getEmployees().subscribe(data =>{
      this.employees = data;
    }, err =>{
      console.log(err, 'error');
    })
  }
}
