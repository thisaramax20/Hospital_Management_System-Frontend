import { Routes } from '@angular/router';
import { AppointmentManageComponent } from './pages/appointment-manage/appointment-manage.component';
import { PatientMangeComponent } from './pages/patient-mange/patient-mange.component';

export const routes: Routes = [
    {
        path: 'appointment',
        component:AppointmentManageComponent 
    },
    {
        path: 'patient',
        component:PatientMangeComponent
    }
];
