import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import { Personal } from '../data/formData.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personal: Personal;
  form: any;
  
   step:string;
   title = 'Multi-Step Wizard';
   actPersonal:boolean = false;
   actFamiliar:boolean = false;
   actEducacion:boolean = false;
   actConTec:boolean = false;
   actIdioma:boolean = false;  
   actExpLaboral:boolean = false;
   actRefPersonal:boolean = false;
   actAtExtra:boolean = false;
  
   @Input() formData;
    
    constructor(private formDataService: FormDataService, private rutaActiva: ActivatedRoute, ) {

    }
 
    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.step = this.rutaActiva.snapshot.params.number;
        console.log(this.formData);
        

}

}
