package com.lorenzo.deliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lorenzo.deliver.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{

}
