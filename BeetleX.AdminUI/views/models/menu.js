/*
* Generate component javascript with vuejs Copyright © beetlex.io 2019-2020 email:admin@beetlex.io 
*/
var __menu=""+ '<div :class="[full==\'min\'?\'menu_full\':\'menu_min\']">'+ '<div>'+ '<h3 v-if="full==\'min\'" style="margin-top:10px;margin-right:-5px;padding-left:40px;font-size:11pt;"><a href="http://beetlex.io" target="_blank">BeetleX.AdminUI</a></h3>'+ '<a v-if="full==\'min\'" href="javascript:void(0)" @click="OnResizeMenu(\'max\')" style="float:right;margin-top:-30px;">'+ '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+ '</a>'+ '<hr v-if="full==\'min\'" style="padding:4px;margin:0px;" />'+ '<ul>'+ '<li v-if="full!=\'min\'"><a href="javascript:void(0)" @click="OnResizeMenu(\'min\')">'+ '<i class="glyphicon glyphicon-chevron-right" aria-hidden="true"></i></a></li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenHome">'+ '<i class="glyphicon glyphicon-home" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">主页</span>'+ '</a>'+ '</li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenCustomer">'+ '<i class="glyphicon glyphicon-user" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">客户</span>'+ '</a>'+ '</li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenOrders">'+ '<i class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">订单</span>'+ '</a>'+ '</li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenEmployees">'+ '<i class="glyphicon glyphicon-user" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">雇员</span>'+ '</a>'+ '</li>'+ '<li>'+ '<a href="javascript:void(0)" @click="OnOpenAbout">'+ '<i class="glyphicon glyphicon-info-sign" aria-hidden="true"></i>'+ '<span v-if="full==\'min\'">关于</span>'+ '</a>'+ '</li>'+ '</ul>'+ '</div>'+ '</div>';
    Vue.component('main_menu', {
        data: function () {
            return {
                full: 'min',
            }
        },
        methods: {
            OnResizeMenu: function (value) {
                this.full = value;
                this.$emit('menu_resize', value)
            },
            OnOpenHome: function () {
                this.$open('home', '主页', 'models_home');
            },
            OnOpenCustomer: function () {
                this.$open('customers', '客户列表', 'models_customers');
            },
            OnOpenEmployees: function () {
                this.$open('employees', '雇员列表', 'models_employees');
            },
            OnOpenOrders: function () {
                this.$open('orders', '订单列表', 'models_orders');
            },
            OnOpenAbout: function () {
                this.$open('about', '关于', 'models_about');
            },
        },
        template: __menu,
        mounted: function () { }
    });
