package com.codegym.service.impl;

import com.codegym.model.BenhAn;
import com.codegym.repository.BenhAnRepository;
import com.codegym.repository.BenhNhanRepository;
import com.codegym.service.IBenhAnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BenhAnService implements IBenhAnService {
    @Autowired
    private BenhAnRepository benhAnRepository;




    @Override
    public Page<BenhAn> findByName(String name, Pageable pageable) {
        return benhAnRepository.findByName(name, pageable);
    }

    @Override
    public List<BenhAn> findAll() {
        return benhAnRepository.findAll();
    }

    @Override
    public void remove(int id) {
        benhAnRepository.remove(id);
    }

    @Override
    public Optional<BenhAn> findById(int id) {
        return benhAnRepository.findById(id);
    }

    @Override
    public Page<BenhAn> getAll(Pageable pageable) {
        return benhAnRepository.getAll(pageable);
    }

    @Override
    public BenhAn save(BenhAn benhAn) {
        return benhAnRepository.save(benhAn);
    }

    @Override
    public void update(BenhAn benhAn) {
        benhAnRepository.save(benhAn);

    }

    @Override
    public Page<BenhAn> findAllBenhAn(Pageable pageable) {
        return benhAnRepository.findAll(pageable);
    }


}
