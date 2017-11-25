import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { SelectedCarPage } from '../selected-car/selected-car';

import { Car } from '../../domain/car';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  public cars: Car[] = [];
  
  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) { }

  ngOnInit(): void {

    let loader = this._loadingCtrl.create({
      content: 'Buscando carros disponíveis. Aguarde ...'
    });

    loader.present();

    this._http
      .get('https://aluracar.herokuapp.com/')
      .map(res => res.json())
      .toPromise()
      .then(data => {
        this.cars = data;
        loader.dismiss();
      })
      .catch(err => {
        console.log(err);
        loader.dismiss();
        this._alertCtrl
          .create({
            title: 'Falha na conexão',
            buttons: [{ text: 'Estou ciente!' }],
            subTitle: 'Não foi possível obter a lista de carros. Tente mais tarde.'
          }).present();
      });
  }

  getCar(car): void {
    this.navCtrl.push(SelectedCarPage, { selectedCar: car });
  }
}
