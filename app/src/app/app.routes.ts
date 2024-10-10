import { Routes } from '@angular/router';
import { FormdrivenComponent } from './formdriven/formdriven.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';

export const routes: Routes = [{
    path: '',
    loadComponent : () =>import('./formdriven/formdriven.component').then(m => m.FormdrivenComponent),
    
},{
    path: 'formreactive',
    loadComponent : () =>import('./formreactive/formreactive.component').then(m => m.FormreactiveComponent)

}
];
