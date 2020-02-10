/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __menu="";
 __menu += '    <div :class="[full==\'min\'?\'menu_full\':\'menu_min\']">';
 __menu += '        <div v-if="full==\'min\'">';
 __menu += '            <h3 style="margin-top:10px;margin-right:-5px;padding-left:20px;">BeetleX.AdminUI</h3>';
 __menu += '            <a href="javascript:void(0)" @click="OnResizeMenu(\'max\')" style="float:right;margin-top:-35px;"><img style="width:24px;" src="/images/min.png" /></a>';
 __menu += '            <hr style="padding:4px;margin:0px;" />';
 __menu += '            <ul>';
 __menu += '                <li><a href="javascript:void(0)"  @click="OnOpenHome"><img src="/images/home.png" style="height:32px;" />主页</a></li>';
 __menu += '                <li><a href="javascript:void(0)"  @click="OnOpenCustomer"><img src="/images/customer.png" style="height:32px;" />客户</a></li>';
 __menu += '                <li><a href="javascript:void(0)"  @click="OnOpenOrders"><img src="/images/order.png" style="height:32px;" />订单</a></li>';
 __menu += '                <li><a href="javascript:void(0)"  @click="OnOpenEmployees"><img src="/images/employee.png" style="height:32px;" />雇员</a></li>';
 __menu += '                <!--<li><a href="javascript:void(0)"  @click="OnOpenAbout"><img src="/images/about.png" style="height:32px;" />关于</a></li>-->';
 __menu += '            </ul>';
 __menu += '        </div>';
 __menu += '        <div v-else>';
 __menu += '            <ul>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnResizeMenu(\'min\')"><img src="/images/full.png" style="height:32px;" /></a></li>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnOpenHome"><img src="/images/home.png" style="height:32px;" /></a></li>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnOpenCustomer"><img src="/images/customer.png" style="height:32px;" /></a></li>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnOpenOrders"><img src="/images/order.png" style="height:32px;" /></a></li>';
 __menu += '                <li><a href="javascript:void(0)" @click="OnOpenEmployees"><img src="/images/employee.png" style="height:32px;" /></a></li>';
 __menu += '                <!--<li><a href="javascript:void(0)" @click="OnOpenAbout"><img src="/images/about.png" style="height:32px;" /></a></li>-->';
 __menu += '';
 __menu += '            </ul>';
 __menu += '        </div>';
 __menu += '    </div>';

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
                this.$emit('openwindow', { id: 'home', title: '主页', model: 'models_home' });
            },
            OnOpenCustomer: function () {
                this.$emit('openwindow', { id: 'customers', title: '客户列表', model: 'models_customers' });
            },
            OnOpenEmployees: function () {
                this.$emit('openwindow', { id: 'employees', title: '雇员列表', model: 'models_employees' });
            },
            OnOpenOrders: function () {
                this.$emit('openwindow', { id: 'orders', title: '订单列表', model: 'models_orders' });
            },
            OnOpenAbout: function () {
                this.$emit('openwindow', { id: 'about', title: '关于', model: 'models_about' });
            },
        },
        template: __menu,
        mounted: function () { }
    });
