import { Routes } from '@angular/router';
import { AppointmentManageComponent } from './pages/appointment-manage/appointment-manage.component';
import { PatientMangeComponent } from './pages/patient-mange/patient-mange.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashBoardPageComponent } from './pages/dash-board-page/dash-board-page.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginPageComponent
    },
    {
        path: 'appointment',
        component:AppointmentManageComponent 
    },
    {
        path: 'patient',
        component:PatientMangeComponent
    },
    {
        path: 'dashboard',
        component:DashBoardPageComponent,
        children:[
            {
                path:'appointment',
                component:AppointmentManageComponent
            },
            {
                path:'patient',
                component:PatientMangeComponent
            }
        ]
    }
];
