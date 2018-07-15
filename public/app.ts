import * as angular from 'angular';
import 'angular-route';

import { hashPrefixConfig } from './config.hashprefix';
import { routeProviderConfig } from './config.routes';
import { homeComponent } from './home/home';
import { AddressService } from './shared/addressService';
import { CustomerService } from './customers/customerService';
import { customersTableComponent } from './customers/customers-table';
import { customersComponent } from './customers/customers';
import { customerDetailComponent } from './customerDetail/customerDetail';
import { discountComponent } from './customerDetail/discount';

angular
  .module('app', ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component('home', homeComponent)
  .component('customers', customersComponent)
  .component('customersTable', customersTableComponent)
  .component('customerDetail', customerDetailComponent)
  .component('discount', discountComponent)
  .service('addressService', AddressService)
  .service('customerService', CustomerService);
