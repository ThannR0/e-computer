const express = require("express");

const orderRoute = express.Router();

const protect = require("../middleware/Auth");

const asyncHandler = require("express-async-handler");

const Order = require("../models/Order");

orderRoute.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethods,
      shippingPrice,
      taxPrice,
      totalPrice,
      price,
    } = req.body;
    console.log(orderItems);

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("no order items found");
    } else {
      const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethods,
        shippingPrice,
        taxPrice,
        totalPrice,
        price,
        user: req.user._id,
      });

      // const newOrder =  new UserOrder({
      //   userId: '1',
      //   customerId: '1',
      //   productId: '652b2e458077fd5b243a06ad',
      //   quantity: 1,
      //   subtotal: 12 / 100,
      //   total: 12 / 100,
      //   payment_status: '3',
      // });

      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  })
);

//order payment route
orderRoute.put(
  "/:id/payment",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.paymentResult?.id || null,
        status: req.body.paymentResult?.status || null,
        update_time: req.body.paymentResult.updated_time || null,
        email_address: req.body.paymentResult?.email_address || null,
      };
      const updatedOrder = await order.save();
      console.log(updatedOrder);

      res.status(200).json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

//

orderRoute.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404);
      throw new Error("Order Not Found!");
    }
  })
);

//get one order by id
orderRoute.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

module.exports = orderRoute;
