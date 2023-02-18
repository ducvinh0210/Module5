package com.codegym.service;

import com.codegym.model.BenhAn;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IBenhAnService {

    Page<BenhAn> findByName(String name, Pageable pageable);

    List<BenhAn> findAll();

    void remove(int id);

    Optional<BenhAn> findById(int id);

    Page<BenhAn> getAll(Pageable pageable);

    BenhAn save(BenhAn benhAn);

    void update(BenhAn benhAn);

    Page<BenhAn> findAllBenhAn(Pageable pageable);


}
