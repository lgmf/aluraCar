import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-selected-car',
  templateUrl: 'selected-car.html',
})
export class SelectedCarPage implements OnInit {

  protected selectedCar : any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }

  ngOnInit(): void {
    this.selectedCar = this.navParams.get('selectedCar');
  }
}
