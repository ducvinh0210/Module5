import {Component, OnInit} from '@angular/core';
import {BenhAnService} from "../service/benh-an.service";
import {BenhAn} from "../model/benhAn";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  benhAns: BenhAn[] = [];
  benhAnIdDelete: number;
  benhAnNameDelete: string;



  constructor(private benhAnService: BenhAnService) {
  }

  ngOnInit(): void {

    this.benhAnService.findAll().subscribe(value => {
      this.benhAns = value;


    })
  }


  getInfoBenhAnDelete(name: string, id: number) {
    this.benhAnNameDelete = name;
    this.benhAnIdDelete = id;

  }

  deleteBenhAn() {
    this.benhAnService.deleteBenhAn(this.benhAnIdDelete).subscribe(()=>{


      this.benhAnService.findAll().subscribe(next => {
        this.benhAns= next;
      })

    })
  }



}
