import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BenhAnService} from "../service/benh-an.service";
import {BenhNhanService} from "../service/benh-nhan.service";
import {Router} from "@angular/router";
import {BenhNhan} from "../model/benhNhan";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  benhAnForm: FormGroup= new FormGroup({
    ngayNhap: new FormControl('', Validators.required),
    ngayRa: new FormControl('', Validators.required),
    lyDo:new FormControl('', Validators.required),
    phuongPhap: new FormControl('', Validators.required),
    bacSi: new FormControl('', Validators.required),
    benhNhan:new FormControl('', Validators.required),




  })


  submit() {
    const benhAn = this.benhAnForm.value;
    this.benhAnService.createBenhAn(benhAn).subscribe(() => {
      this.benhAnForm.reset();
      this.router.navigateByUrl('');
    }, error => {console.log("tao moi khong thanh cong ");});

  }




  benhNhanList: BenhNhan[];

  constructor(private benhAnService: BenhAnService,
              private benhNhanService: BenhNhanService,
              private router :Router) { }

  ngOnInit(): void {

    this.benhNhanService.getAll().subscribe(value => {


      this.benhNhanList = value;
  })

}


}
