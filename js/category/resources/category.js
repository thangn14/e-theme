'use strict';

/**
 * @name            OnhanhCategory
 * @description     categoryModule
 */
categoryModule.factory('Categories', [ 'resourceService',
    function(resourceService) {
        var Categories = resourceService('category');
        return Categories;
    }
]);
