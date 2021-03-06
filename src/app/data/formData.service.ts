import { Injectable }                        from '@angular/core';

import { FormData, Personal, Address }       from './formData.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    getPersonal(): Personal {
        // Return the Personal data
 var personal: Personal = {
    nombre: this.formData.nombre,
    apellido : this.formData.apellido,
    nacionalidad : this.formData.nacionalidad,
    estado_civil: this.formData.estado_civil,
    tipo_documento: this.formData.tipo_documento,
    documento_identidad : this.formData.documento_identidad,
    lugar_nacimineto: this.formData.lugar_nacimineto,
    fecha_nacimiento :this.formData.fecha_nacimiento,
    calle: this.formData.calle,
    edificio: this.formData.edificio,
    sector: this.formData.sector,
    ciudad: this.formData.ciudad,
    telefono_residencia: this.formData.telefono_residencia,
    telefono_trabajo: this.formData.telefono_trabajo,
    celular:this.formData.celular,
    correo: this.formData.correo
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
       
    }

    getWork() : string {
        // Return the work type
        return this.formData.work;
    }
    
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid && 
                this.isAddressFormValid;
    }
}