package com.lorenzo.deliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lorenzo.deliver.dto.OrderDTO;
import com.lorenzo.deliver.entities.Order;
import com.lorenzo.deliver.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository repository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findPendingOrders(){
		List<Order> list = repository.findPendingOrders();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
}
