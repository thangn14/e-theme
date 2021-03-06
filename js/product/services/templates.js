'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule
.service("productTemplates", function() {
  return {
    templates: [
      // Only
      ['color_name'],
      ['size_name'],
      ['style_name'],
      ['configure_name'],
      ['weight_name'],
      ['cover_type_name'],
      
      // Color map
      ['color_name', 'size_name'],
      ['color_name', 'style_name'],
      ['color_name', 'configure_name'],
      ['color_name', 'size_name', 'style_name'],
      ['color_name', 'size_name', 'configure_name'],
      ['color_name', 'style_name', 'configure_name'],
      ['color_name', 'size_name', 'style_name', 'configure_name'],
      
      
      // Size map
      ['size_name', 'style_name'],
      ['size_name', 'configure_name'],
      ['size_name', 'style_name', 'configure_name'],
      
      // Style map
      ['style_name', 'configure_name'],
    ],
    
    labels: {
      color_name: "Màu sắc",
      size_name: "Kích thước",
      style_name: "Kiểu dáng",
      configure_name: "Cấu hình",
      weight_name: "Trọng lượng",
      cover_type_name: "Loại bìa"
    },
    
    getDropdownList: function() {
      var results = [];
      angular.forEach(this.templates, function(values, index) {
        var result = [];
        angular.forEach(values, function(value) {
          result.push(this.labels[value]);
        }, this);
        results[index] = result.join(', ');
      }, this);
      return results;
    }
  }
});
