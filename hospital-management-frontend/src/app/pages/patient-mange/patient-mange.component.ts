import { CommonModule, NgFor,NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { Patient } from '../../model/Patient';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-patient-mange',
  standalone: true,
  imports: [NgFor,CommonModule,FormsModule],
  templateUrl: './patient-mange.component.html',
  styleUrl: './patient-mange.component.css'
})
export class PatientMangeComponent {
  public patientList: Patient[] = [];
  public selectedPatient: any = {};
  public isModel: boolean = false;

  constructor(private readonly http: HttpClient){
    this.loadPatientList();
  }
  loadPatientList() {
    this.http.get<Patient[]>('http://localhost:8080/patient/get-all').subscribe((data) => {
      const newArray:Patient[] = data.map(obj=>{
        return new Patient(
          obj.id,
          obj.name,
          obj.age,
          obj.address,
          obj.nic,
          obj.bloodGroup,
          obj.gender,
          obj.contact,
          obj.note,
          obj.allergies,
          obj.category
        )
      })
      this.patientList = newArray;
    });
    
  }

  deletePatient(id:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/patient/delete-by-id/${id}`).subscribe(() => {
          this.loadPatientList();
        });
        Swal.fire({
          title: "Deleted!",
          text: "Patient has been deleted.",
          icon: "success"
        });
      }
    });
  }

  selectPatient(patient:any){
    this.selectedPatient = patient;
    this.isModel = true;
    console.log(this.isModel);
  }

  closeModel(){
    this.isModel = false;
  }

  updatePatient(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/patient/update",this.selectedPatient).subscribe(res=>{
          Swal.fire("Saved!", "", "success");
        })
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

}
