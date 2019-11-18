export class FormData {
    //Personal
    nombre: string = '';
    apellido : string = '';
    nacionalidad: string = '';
    estado_civil: string = '';
    tipo_documento: string = '';
    documento_identidad : number = null;
    lugar_nacimineto: string = '';
    fecha_nacimiento : string = '';
    calle: string = '';
    edificio: string = '';
    sector: string = '';
    ciudad: string = '';
    telefono_residencia: number = null;
    telefono_trabajo: number = null;
    celular:number = null;
    correo:string = '';

    //Datos Familiares
     familia= [
        {nombre: '', parentesco: '', fechaN: '', ocupacion: '', telefono: ''}
     ];
     
    

    



    email: string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';

    clear() {
        
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class Personal {
    nombre: string = '';
    apellido : string = '';
    nacionalidad: string = '';
    estado_civil: string = '';
    tipo_documento: string = '';
    documento_identidad : number = null;
    lugar_nacimineto: string = '';
    fecha_nacimiento : string = '';
    calle: string = '';
    edificio: string = '';
    sector: string = '';
    ciudad: string = '';
    telefono_residencia: number = null;
    telefono_trabajo: number = null;
    celular:number = null;
    correo:string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}