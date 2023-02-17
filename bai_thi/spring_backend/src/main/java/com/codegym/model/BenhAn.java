package com.codegym.model;

import javax.persistence.*;

@Entity
public class BenhAn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String ngayNhap;
    private String ngayRa;
    private String lyDo;
    private String phuongPhap;
    private String bacSi;

@ManyToOne
@JoinColumn(name="benh_nhan_id", referencedColumnName = "id")
    private BenhNhan benhNhan;


    public BenhAn() {
    }

    public BenhAn(Integer id, String ngayNhap, String ngayRa, String lyDo, String phuongPhap, String bacSi, BenhNhan benhNhan) {
        this.id = id;
        this.ngayNhap = ngayNhap;
        this.ngayRa = ngayRa;
        this.lyDo = lyDo;
        this.phuongPhap = phuongPhap;
        this.bacSi = bacSi;
        this.benhNhan = benhNhan;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNgayNhap() {
        return ngayNhap;
    }

    public void setNgayNhap(String ngayNhap) {
        this.ngayNhap = ngayNhap;
    }

    public String getNgayRa() {
        return ngayRa;
    }

    public void setNgayRa(String ngayRa) {
        this.ngayRa = ngayRa;
    }

    public String getLyDo() {
        return lyDo;
    }

    public void setLyDo(String lyDo) {
        this.lyDo = lyDo;
    }

    public String getPhuongPhap() {
        return phuongPhap;
    }

    public void setPhuongPhap(String phuongPhap) {
        this.phuongPhap = phuongPhap;
    }

    public String getBacSi() {
        return bacSi;
    }

    public void setBacSi(String bacSi) {
        this.bacSi = bacSi;
    }

    public BenhNhan getBenhNhan() {
        return benhNhan;
    }

    public void setBenhNhan(BenhNhan benhNhan) {
        this.benhNhan = benhNhan;
    }
}
