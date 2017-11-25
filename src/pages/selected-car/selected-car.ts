import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Accessorie } from '../../domain/acessorie';
import { Car } from '../../domain/car';
import { RegistryPage } from "../registry/registry";

@Component({
  selector: 'page-selected-car',
  templateUrl: 'selected-car.html',
})
export class SelectedCarPage implements OnInit {
  
  protected selectedCar: Car = null;
  protected accessories: Accessorie[] = [];
  private _totalPrice: number = 0.0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }

  ngOnInit(): void {
    this.selectedCar = this.navParams.get('selectedCar');
    this._totalPrice = this.selectedCar.preco;
    this.accessories = [
      { name: 'Freio ABS', price: 800 },
      { name: 'Ar-condicionado', price: 1000 },
      { name: 'MP3 Player', price: 500 }
    ]
  }

  getTotalPrice(): number {
    return this._totalPrice;
  }

  updateTotalPrice(toogle, accessorie): void {
    (toogle.checked) ? this._totalPrice += accessorie.price : this._totalPrice -= accessorie.price;
  }

  goToRegistry(): void{
    this.navCtrl.push(RegistryPage,{
        selectedCar: this.selectedCar,
        totalPrice: this._totalPrice
    });
  }
}
