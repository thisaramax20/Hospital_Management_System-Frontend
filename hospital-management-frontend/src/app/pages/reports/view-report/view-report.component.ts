import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Report } from '../../../model/Report';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-report',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-report.component.html',
  styleUrl: './view-report.component.css'
})
export class ViewReportComponent {
  public allReports:Report [] = [];
  constructor(private readonly http:HttpClient) { }

  ngOnInit(): void {
    this.loadReports();
  }
  loadReports() {
    this.http.get<Report []>('http://localhost:8080/report/get-all').subscribe((data) => {
      const newArray:Report[] = data.map((report) => {
        return new Report(
          report.category,
          report.pdfSrc,
          report.localDateTime,
          report.patientId,
          report.adminId,
          report.labNumber
        );
      });
      this.allReports = newArray;
    });
  }

}
