package com.lorenzo.deliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lorenzo.deliver.dto.OrderDTO;
import com.lorenzo.deliver.dto.ProductDTO;
import com.lorenzo.deliver.entities.Order;
import com.lorenzo.deliver.entities.Product;
import com.lorenzo.deliver.entities.enums.OrderStatus;
import com.lorenzo.deliver.repositories.OrderRepository;
import com.lorenzo.deliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findPendingOrders(){
		List<Order> list = repository.findPendingOrders();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto){
		Order entity = new Order();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new OrderDTO(entity);
	}
	
	@Transactional
	public OrderDTO updateStatus(Long id, OrderDTO dto) throws Exception {
		try {
			Order entity = repository.getOne(id);
			entity.setStatus(OrderStatus.DELIVERED);
			entity = repository.save(entity);
			return new OrderDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new Exception("Id not found " + id);
		}
	}
	
	
	private void copyDtoToEntity(OrderDTO dto, Order entity) {
		entity.setAddress(dto.getAddress());
		entity.setLatitude(dto.getLatitude());
		entity.setLongitude(dto.getLongitude());
		entity.setMoment(Instant.now());
		entity.setStatus(OrderStatus.PENDING);
		
		for(ProductDTO prodDTO : dto.getProducts() ) {
			Product product = productRepository.getOne(prodDTO.getId());
			entity.getProducts().add(product);
		}
	}
}
