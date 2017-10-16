import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Variável que recebe a biblioteca FormGroup
  private form: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    //Variável que recebe a biblioteca 'formBuilder' com um grupo de informações
    this.form = this.formBuilder.group({
      //E-mail com validação
      email: ['', Validators.required],
      //Nome com validação
      nome: ['', Validators.required],
      //Mensagem sem validação
      mensagem: [''],

    });

  }

  //Método que executa no console as informações do formulário
  enviar() {
    console.log(this.form.value);
  }

}
