package com.codegym.repository;

import com.codegym.model.BenhAn;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface BenhAnRepository extends JpaRepository<BenhAn,Integer> {
@Query(value = "select benh_an.* from benh_an join benh_nhan on benh_an.benh_nhan_id= benh_nhan.id" +
        " where benh_nhan.name like %:name ", nativeQuery = true)
    Page<BenhAn>findByName(@Param("name") String name, Pageable pageable);



@Transactional
@Modifying
@Query(value = "delete from benh_an where benh_an.id=:id", nativeQuery = true)
  void remove(@Param("id") int id);



@Query(value = "select benh_an.* from benh_an", nativeQuery = true)
    Page<BenhAn>getAll(Pageable pageable);







}
