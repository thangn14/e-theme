'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule
.service("productGrid", ['Products', function(Products) {
  return {
    columns: [{
      name: "action",
      displayName: "",
    },{
      name: "name",
      displayName: "Tên",
      cellTemplate: [
        '<div class="ui-grid-cell-contents" title="TOOLTIP"> ',
            '<a ui-sref="product.detail({id:row.entity.id})">{{COL_FIELD}}</a>',
        '</div>'
      ].join('')
    }, {
      name: "price",
      displayName: "Giá tiền",
    }, {
      name: "sale",
      displayName: "Khuyến mãi",
    }, {
      name: "quantity",
      displayName: "Số lượng",
    }],
    
    gridOptions: function($scope) {
      var options = $scope.options || {};
      var defaults = {
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: false,
        enableFiltering: false,
        enableSorting: false,
        useExternalFiltering: true,
        columnDefs: this.columns,
        load: function(params, fn) {
          var res = resource.query(params, function() {
            this.data= res.items;
            this.totalItems = res.total;
            fn ? fn : "";
          }.bind(this));
        },
        
        onRegisterApi: function(gridApi) {
          this.api = gridApi;
          
          if($scope.saveRow) {
            gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
          }
        }
      }
      return angular.extend(defaults, options);
    }
  }
}]);
