import { Component, OnInit } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';

import { RegistryService } from './registry.service';

import { Car } from "../../domain/car";
import { HomePage } from "../home/home";
import { Registry } from "../../domain/registry";

@IonicPage()
@Component({
  selector: 'page-registry',
  templateUrl: 'registry.html',
})
export class RegistryPage implements OnInit {


  private _alert: Alert = null;

  public registry: Registry = new Registry();

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private registryService: RegistryService
  ) { }

  ngOnInit(): void {
    this.registry.carro = new Car(this.navParams.get('selectedCar').nome, this.navParams.get('selectedCar').preco);
    this.registry.precoTotal = this.navParams.get('totalPrice');
    this._alert = this.alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {
          text: 'Ok',
          handler: (data) => {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
  }

  finishRegistry(): void {
    this.registryService
      .doRegistry(this.registry)
      .then(data => {
        this._alert.setSubTitle('Agendamento realizado com sucesso!');
        this._alert.present();
      })
      .catch(err => {
        this._alert.setSubTitle('Erro ao realizar agendamento. Tente mais tarde...');
        this._alert.present();
      });
  }

}
