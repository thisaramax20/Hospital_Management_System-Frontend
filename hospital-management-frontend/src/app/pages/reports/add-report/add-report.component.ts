import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Report } from '../../../model/Report';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-report.component.html',
  styleUrl: './add-report.component.css'
})
export class AddReportComponent {
  public report:Report = new Report('', '', '', 0, 0, 0);
  constructor(private readonly http: HttpClient){
    
  }
  addReport(report: Report): void {
    // Add your code to send the report to the server
    const response = this.http.post('http://localhost:8080/report/save', report).subscribe();
  }

}
