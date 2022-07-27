import { Component, OnInit } from '@angular/core';
import {TuorService} from "../../tuorService";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Tuor} from "../../model/tuor";

@Component({
  selector: 'app-edit-tuor',
  templateUrl: './edit-tuor.component.html',
  styleUrls: ['./edit-tuor.component.css']
})
export class EditTuorComponent implements OnInit {
  // @ts-ignore
  tuor:Tuor;
  id:any;
  constructor(private tuorService: TuorService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router:Router) {
    this.activatedRoute.paramMap.subscribe((paraMap:ParamMap)=>{
      // @ts-ignore
      this.id = +paraMap.get('id');
      // this.getHouse(this.id);
    })
  }
 tuorForm: FormGroup = this.fb.group({

    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')
  })
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);

      // @ts-ignore
      this.tuorService.getById(id).subscribe(result => {
        // @ts-ignore
        this.tuor = result;
        console.log(result);
      }, error => {
        console.log(error);
      })
    })
    // @ts-ignore
    this.tuor = {
      title: '',
      price: '',
      description: ''
    }
  }
  editTuor() {

    // @ts-ignore
    const tuor: Tuor={

      title:this.tuorForm.value.title,
      price:this.tuorForm.value.price,
      description:this.tuorForm.value.description
    }
    console.log(tuor);
    // @ts-ignore
    this.tuorService.editTour(this.tuor.id,tuor).subscribe(()=>{
      alert("Ok");
      this.router.navigate(['/'])
    },error => {
      console.log(error);
    })
  }
}
