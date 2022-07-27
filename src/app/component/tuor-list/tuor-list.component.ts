import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../tuorService";
import {Tuor} from "../../model/tuor";

@Component({
  selector: 'app-tuor-list',
  templateUrl: './tuor-list.component.html',
  styleUrls: ['./tuor-list.component.css']
})
export class TuorListComponent implements OnInit {
  // @ts-ignore
  tuors: Tuor[] ;

  constructor(private tuorService: TuorService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.tuorService.getAll().subscribe(result => {
      this.tuors = result;
      console.log(result);
    }, error => {
      console.log(error);
    })
  }
  delete(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.tuorService.delete(id).subscribe(() => {
        alert("Ok");
        this.getAll()
      }, e => {
        console.log(e);
      });
    }
  }
}
