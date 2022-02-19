const db = require('../models');


// create main model
const Orders = db.orders

// add a order
const addOrder = async (req, res) => {
    let info = {
        customer_name: req.body.customer_name,
        service_name: req.body.service_name,
        customer_email: req.body.customer_email,
        order_message: req.body.order_message,
        customer_contact: req.body.customer_contact,
        order_status: req.body.order_status
    }
    const order = await Orders.create(info)
    res.status(200).send(order);
}


// get all the orders
const allOrders = async (req, res) => {
    let orders = await Orders.findAll({});
    res.status(200).send(orders);
}


// get one order
const singleOrder = async (req, res) => {
    const id = req.params.id;
    let order = await Orders.finOne({ where: { id: id } })
    res.status(200).send(order);
}


// update a order
const updateOrder = async (req, res) => {
    const id = req.params.id;
    let order = await Orders.update(req.body, { where: { id: id } });
    res.status(200).send(order);
}


// delete order
const deleteOrder = async (req, res) => {
    const id = req.params.id;
    await Orders.destroy({ where: { id: id } })
    res.status(200).send('This order is deleted');
}

module.exports = {
    addOrder,
    allOrders,
    singleOrder,
    updateOrder,
    deleteOrder
}