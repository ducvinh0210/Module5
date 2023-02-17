package com.codegym.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class BenhNhan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "benhNhan")
    private Set<BenhAn> benhAns;

    public BenhNhan() {
    }

    public BenhNhan(Integer id, String name, Set<BenhAn> benhAns) {
        this.id = id;
        this.name = name;
        this.benhAns = benhAns;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<BenhAn> getBenhAns() {
        return benhAns;
    }

    public void setBenhAns(Set<BenhAn> benhAns) {
        this.benhAns = benhAns;
    }
}
