
'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderConfig
 */
settingsModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("settings", {
              title: "Settings",
              url: "/settings",
              controller: 'settingsController',
              templateUrl: '/web/settings/settings.html',
            })
            .state("settings.page", {
              title: "Setting Page",
              url: "/page",

              views: {
                'setting' : {
                  controller: 'settingPageController',
                  templateUrl: '/web/settings/page.html',
                }
              }
              
            })
            .state("settings.manager", {
              title: "Setting manager",
              url: "/managers",
              views: {
                '@' : {
                  controller: 'settingManagerController',
                  templateUrl: '/web/settings/manager.html',
                }
              }
              
            })
            .state("settings.payment", {
              title: "Setting Payment",
              url: "/payment",
              views: {
                '@' : {
                  controller: 'settingPaymentController',
                  templateUrl: '/web/settings/payment.html',
                }
              }
              
            })
            .state("settings.shipping", {
              title: "Setting shipping",
              url: "/shipping",
              views: {
                '@' : {
                  controller: 'settingShippingController',
                  templateUrl: '/web/settings/shipping.html',
                }
              }
              
            })
            .state("settings.social", {
              title: "Setting social",
              url: "/social",
              views: {
                '@' : {
                  controller: 'settingSocialController',
                  templateUrl: '/web/settings/social.html',
                }
              }
              
            })
            .state("settings.notifications", {
              title: "Setting notifications",
              url: "/notifications",
              views: {
                '@' : {
                  controller: 'settingNotificationsController',
                  templateUrl: '/web/settings/notifications.html',
                }
              }
              
            });      
        }
    ]);
