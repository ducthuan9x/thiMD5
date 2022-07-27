import { Component, OnInit } from '@angular/core';
import {TuorService} from "../../tuorService";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Tuor} from "../../model/tuor";

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(private tuorService:TuorService,
              private router:Router) { }

  ngOnInit(): void {
  }
  tuorForm: FormGroup = new FormGroup({

    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })
  saveTuor(){
    // @ts-ignore
    const tuor: Tuor={
      title:this.tuorForm.value.title,
      price:this.tuorForm.value.price,
      description:this.tuorForm.value.description
    }
    console.log(tuor);

    // @ts-ignore
    this.tuorService.saveTuor(tuor).subscribe(()=>{
      alert("Ok");
      this.router.navigate(['/'])
      // @ts-ignore
    },error => {
      console.log(error);
    })
  }
}
