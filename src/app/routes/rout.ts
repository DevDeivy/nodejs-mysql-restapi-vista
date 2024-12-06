import { Routes } from '@angular/router';
import { CreateComponent } from '../components/header/create/create.component';
import { ReadComponent } from '../components/header/read/read.component';
import { UpdateComponent } from '../components/header/update/update.component';
import { DeleteComponent } from '../components/header/delete/delete.component';

export const rout: Routes = [
    {path: '', redirectTo: 'Create', pathMatch: 'full'},
    {path: 'Create', component: CreateComponent},
    {path: 'Read', component: ReadComponent},
    {path: 'Update', component: UpdateComponent},
    {path: 'Delete', component: DeleteComponent},
    {path: '**', redirectTo: 'Create', pathMatch: 'full'}
]