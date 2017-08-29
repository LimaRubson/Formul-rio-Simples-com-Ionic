import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private form: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({

      email: ['', Validators.required],
      nome: ['', Validators.required],
      mensagem: [''],

    });

  }

  enviar() {
    console.log(this.form.value)
  }


}
