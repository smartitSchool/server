const orderController=require('../controllers/OrderController.js');
const router=require('express').Router();



router.post('/addOrder', orderController.addOrder)
router.get('/allOrders', orderController.allOrders)
router.get('/:id', orderController.singleOrder)
router.put('/:id', orderController.updateOrder)
router.delete('/:id', orderController.deleteOrder)


module.exports=router;