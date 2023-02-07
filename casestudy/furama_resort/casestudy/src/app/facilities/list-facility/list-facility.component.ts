import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilities: Facility[] =
    [
      {
        id: 1,
        name: 'Villa 01',
        area: 200,
        cost: 5500,
        maxPeople: 12,
        numberOfFloors: 2,
        rentType: 'Day',
        standardRoom: 'Vip',
        descriptionOfOtherConvenience: 'None',
        poolArea: 20,
        facilityType: 'Villa'
      },

      {
        id: 2,
        name: 'House 01',
        area: 200,
        cost: 7000,
        numberOfFloors: 1,
        maxPeople: 5,
        rentType: 'Month',
        standardRoom: 'Normal',
        descriptionOfOtherConvenience: 'None',
        facilityType: 'House'
      }

    ]


  constructor() {
  }

  ngOnInit(): void {
  }

}
