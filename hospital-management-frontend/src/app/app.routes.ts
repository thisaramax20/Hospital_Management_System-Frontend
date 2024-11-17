import { Routes } from '@angular/router';
import { AppointmentManageComponent } from './pages/appointment-manage/appointment-manage.component';
import { PatientMangeComponent } from './pages/patient-mange/patient-mange.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashBoardPageComponent } from './pages/dash-board-page/dash-board-page.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AddReportComponent } from './pages/reports/add-report/add-report.component';
import { ViewReportComponent } from './pages/reports/view-report/view-report.component';

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
            },
            {
                path:'reports',
                component:ReportsComponent,
                children:[
                    {
                        path:'add-report',
                        component:AddReportComponent
                    },
                    {
                        path:'view-reports',
                        component:ViewReportComponent
                    }
                ]
            }
        ]
    }
];
