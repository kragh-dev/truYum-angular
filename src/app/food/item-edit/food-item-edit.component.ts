import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFoodItem } from '../item-info/food-item-interface';
import { FoodService } from '../food.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-food-item-edit',
  templateUrl: './food-item-edit.component.html',
  styleUrls: ['./food-item-edit.component.css']
})
export class FoodItemEditComponent implements OnInit {
  foodItem: IFoodItem
  itemId: number
  itemEditForm
  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute, private foodService:FoodService) { }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.params['id'] as number
    this.foodItem = this.foodService.getFoodItem(this.itemId)
    console.log(this.foodItem)
    this.itemEditForm = this.formBuilder.group({
      name:[this.foodItem.name],
      price:[this.foodItem.price],
      dateOfLaunch:[this.foodItem.dateOfLaunch.toISOString().substring(0,10)],
      category:[this.foodItem.category],
      active:[this.foodItem.active],
      freeDelivery:[this.foodItem.freeDelivery],
    })
  }

  

  updateFoodItem()
  {
    this.foodItem.name = this.itemEditForm.value['name']
    this.foodItem.price = this.itemEditForm.value['price']
    this.foodItem.dateOfLaunch = this.itemEditForm.value['dateOfLaunch']
    this.foodItem.category = this.itemEditForm.value['category']
    this.foodItem.active = this.itemEditForm.value['active']
    this.foodItem.freeDelivery = this.itemEditForm.value['freeDelivery']
    console.log(this.foodItem)
    this.foodService.updateFoodItem(this.foodItem)
  }

  get active(){
    return this.itemEditForm.get('active')
  }

  getItemName()
  {
    return this.foodItem.name
  }
}
