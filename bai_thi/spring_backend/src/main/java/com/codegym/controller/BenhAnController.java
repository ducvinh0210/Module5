package com.codegym.controller;

import com.codegym.model.BenhAn;
import com.codegym.service.IBenhAnService;
import com.codegym.service.IBenhNhanService;
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
@RequestMapping("/benhAns")

@CrossOrigin("*")
public class BenhAnController {

    @Autowired
    private IBenhAnService benhAnService;
    @Autowired
    private IBenhNhanService benhNhanService;

    @GetMapping("")
    public ResponseEntity<List<BenhAn>> findAll() {
        List<BenhAn> benhAnList = benhAnService.findAll();
        if (benhAnList.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        }
        return new ResponseEntity<>(benhAnList, HttpStatus.OK);

    }


    @DeleteMapping("/{id}")
    public ResponseEntity<BenhAn>deleteBenhAn(@PathVariable("id") int id){
        benhAnService.remove(id);
        return new ResponseEntity<BenhAn>(HttpStatus.NO_CONTENT);
    }



@GetMapping("abc")
    public ResponseEntity<Page<BenhAn>> getAll(@PageableDefault(size = 2)Pageable pageable){
        Page<BenhAn> benhAnList= benhAnService.getAll(pageable);
        return  new ResponseEntity<>(benhAnList,HttpStatus.OK);

}






}
