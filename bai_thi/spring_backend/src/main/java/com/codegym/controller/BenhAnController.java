package com.codegym.controller;

import com.codegym.model.BenhAn;
import com.codegym.model.BenhNhan;
import com.codegym.service.IBenhAnService;
import com.codegym.service.IBenhNhanService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController


@CrossOrigin("*")
public class BenhAnController {

    @Autowired
    private IBenhAnService benhAnService;
    @Autowired
    private IBenhNhanService benhNhanService;

    @GetMapping("/benhAns1")
    public ResponseEntity<Page<BenhAn>> findAllBenhAn(Pageable pageable) {

        Page<BenhAn> benhAnList = benhAnService.findAllBenhAn(pageable);
        if (benhAnList.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        }
        return new ResponseEntity<>(benhAnList, HttpStatus.OK);

    }

    @GetMapping("/benhAns")
    public ResponseEntity<List<BenhAn>>findAll(){
        List<BenhAn> benhAnList= benhAnService.findAll();
        return new ResponseEntity<>(benhAnList, HttpStatus.OK);

    }


    @DeleteMapping("/benhAns/delete/{id}")
    public ResponseEntity<BenhAn> deleteBenhAn(@PathVariable("id") int id) {
        benhAnService.remove(id);
        return new ResponseEntity<BenhAn>(HttpStatus.NO_CONTENT);
    }


    @GetMapping("abc")
    public ResponseEntity<Page<BenhAn>> getAll(@PageableDefault(size = 2) Pageable pageable) {
        Page<BenhAn> benhAnList = benhAnService.getAll(pageable);
        return new ResponseEntity<>(benhAnList, HttpStatus.OK);

    }

    @GetMapping("/benhAns/{id}")
    public ResponseEntity<BenhAn> findById(@PathVariable int id) {
        BenhAn benhAn = benhAnService.findById(id).get();
        return new ResponseEntity<>(benhAn, HttpStatus.OK);

    }


    @GetMapping("/benhNhans")
    public ResponseEntity<List<BenhNhan>> getBenhNhanList() {
        return new ResponseEntity<>(benhNhanService.findAll(), HttpStatus.OK);


    }

    @PostMapping("/benhAns/add")
    public ResponseEntity<BenhAn> createBenhAn(@RequestBody BenhAn benhAn) {
        benhAnService.save(benhAn);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }

    @PutMapping("/benhAns/edit/{id}")
    public ResponseEntity<BenhAn> editBenhAn(@PathVariable int id,
                                             @RequestBody BenhAn benhAn) {
        BenhAn benhAn1 = benhAnService.findById(id).get();
        if (benhAn1 == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        BeanUtils.copyProperties(benhAn, benhAn1);
        benhAnService.update(benhAn1);

        return new ResponseEntity<>(benhAn1, HttpStatus.OK);

    }



}
