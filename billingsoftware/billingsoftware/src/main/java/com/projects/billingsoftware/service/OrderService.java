package com.projects.billingsoftware.service;

import com.projects.billingsoftware.io.OrderRequest;
import com.projects.billingsoftware.io.OrderResponse;

import java.util.List;

public interface OrderService {

    OrderResponse createOrder(OrderRequest request);

    void deleteOrder(String orderId);

    List<OrderResponse> getLatestOrders();
}
