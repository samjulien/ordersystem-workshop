import * as angular from 'angular';
import 'angular-route';
import 'jquery';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

import { hashPrefixConfig } from './config.hashprefix';
import { routeProviderConfig } from './config.routes';
import { homeComponent } from './home/home';
import { AddressService } from './shared/addressService';
import { CustomerService } from './customers/customerService';
import { customersTableComponent } from './customers/customers-table';
import { customersComponent } from './customers/customers';
import { customerDetailComponent } from './customerDetail/customerDetail';
import { discountComponent } from './customerDetail/discount';
import { createOrderComponent } from './createOrder/createOrder';
import { navigationComponent } from './navigation/navigation';
import { orderDetailComponent } from './orderDetail/orderDetail';
import { ordersComponent } from './orders/orders';
import { OrderService } from './orders/orderService';
import { productDetailComponent } from './productDetail/productDetail';
import { productsComponent } from './products/products';
import { ProductService } from './products/productService';

angular
  .module('app', ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component('home', homeComponent)
  .component('customers', customersComponent)
  .component('customersTable', customersTableComponent)
  .component('customerDetail', customerDetailComponent)
  .component('discount', discountComponent)
  .component('createOrder', createOrderComponent)
  .component('navigation', navigationComponent)
  .component('orderDetail', orderDetailComponent)
  .component('orders', ordersComponent)
  .component('productDetail', productDetailComponent)
  .component('products', productsComponent)
  .service('addressService', AddressService)
  .service('customerService', CustomerService)
  .service('orderService', OrderService)
  .service('productService', ProductService);
