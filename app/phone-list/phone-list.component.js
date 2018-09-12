'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['PhoneService',
      function PhoneListController(PhoneService) {
        this.phones = PhoneService.query();
        this.orderProp = 'age';
      }
    ]
  });
