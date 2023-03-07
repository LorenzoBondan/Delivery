package com.lorenzo.deliver.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lorenzo.deliver.dto.OrderDTO;
import com.lorenzo.deliver.services.OrderService;

@RestController
@RequestMapping(value = "/orders")
public class OrderResource {

	@Autowired
	private OrderService service;
	
	@GetMapping
	public ResponseEntity<List<OrderDTO>> findPendingOrders() {
		List<OrderDTO> list = service.findPendingOrders();	
		return ResponseEntity.ok().body(list);
	}
	

}
