package com.lorenzo.deliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lorenzo.deliver.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long>{

	@Query(nativeQuery = true, value = "SELECT * FROM tb_order WHERE status LIKE 0 ORDER BY moment ASC")
	List<Order> findPendingOrders();
}
