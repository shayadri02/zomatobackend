const express = require('express');



const route = express.Router();


const locationController = require('../Controllers/locations');
const mealtypeController = require('../Controllers/mealtypes');
const restaurentController = require('../Controllers/restaurents')
const menuItemsContrroller = require('../Controllers/menuItems');
const paymentController = require('../Controllers/payment');
const userController = require('../Controllers/users');



route.get('/locations', locationController.getLocations);
route.get('/mealtypes', mealtypeController.getMealtypes);
route.get('/restaurents/:locationId', restaurentController.getRestaurentByLocation);
route.post('/filter', restaurentController.filterRestaurents);
route.get('/restaurent/:resId', restaurentController.getRestaurentDetailsById);
route.get('/menuitems/:resId', menuItemsContrroller.getMenuItemsByRestaurent);
//payment,login user,signup user
route.post('/payment', paymentController.payment);
route.post('/callback', paymentController.callback);
route.post('/user', userController.CheckUserDetails);




route.get('/locations/:locId', locationController.getLocationById);
route.get('/restaurents', restaurentController.getRestaurents);
route.get('/restaurents/:cityName', restaurentController.getRestaurentByCity);




module.exports = route;
