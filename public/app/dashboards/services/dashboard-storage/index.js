import angular from 'angular';
import DashboardStorage from './dashboard-storage.service';

export default angular.module('hepicApp.dashboards.dashboard-storage.service', [])
  .factory('DashboardStorage', /* @ngInject */ ($http, $rootScope, API) => new DashboardStorage($http, $rootScope, API));
