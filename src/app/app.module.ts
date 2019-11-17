import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';

import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';

import { IdiomaComponent } from './idioma/idioma.component';

import { FormComponent } from './form/form.component';

@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService }],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, ResultComponent, IdiomaComponent, FormComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}
