import {Component, OnInit} from '@angular/core';
import {BenhAnService} from "../service/benh-an.service";
import {BenhNhanService} from "../service/benh-nhan.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BenhNhan} from "../model/benhNhan";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  benhAnForm : FormGroup;
  benhNhanList: BenhNhan[] = [];


  constructor(private benhAnService: BenhAnService,
              private benhNhanService: BenhNhanService,
              private activatedRoute: ActivatedRoute) {


    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBenhAn(this.id);

    })

  }

  ngOnInit(): void {
    this.benhNhanService.getAll().subscribe(value => {


      this.benhNhanList = value;

    });

  }

  private getBenhAn(id: number) {
    return this.benhAnService.findById(id).subscribe(benhAn => {
      this.benhAnForm = new FormGroup({
        ngayNhap: new FormControl(benhAn.ngayNhap, Validators.required),
        ngayRa: new FormControl(benhAn.ngayRa, Validators.required),
        lyDo: new FormControl(benhAn.lyDo, Validators.required),
        phuongPhap: new FormControl(benhAn.phuongPhap, Validators.required),
        bacSi: new FormControl(benhAn.bacSi, Validators.required),
        benhNhan: new FormControl(benhAn.benhNhan, Validators.required),

      })
    })


  }

  updateBenhAn(id: number) {
    const benhAn = this.benhAnForm.value;
    this.benhAnService.editBenhAn(id, benhAn).subscribe(data => {
      alert('cập nhật thành công');


    })


  }


  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
