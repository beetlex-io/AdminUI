/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_orders="";
 __models_orders += '    <div>';
 __models_orders += '        <div class="form-inline">';
 __models_orders += '            <div class="form-group">';
 __models_orders += '                <label for="exampleInputName2">雇员</label>';
 __models_orders += '                <select class="form-control" v-model="GetOrders.data.employeeid">';
 __models_orders += '                    <option value="0">全部</option>';
 __models_orders += '                    <option v-for="item in GetEmployeeAndCustomer.result.employees" :value="item.EmployeeID">{{item.FirstName}} {{item.LastName}}</option>';
 __models_orders += '                </select>';
 __models_orders += '            </div>';
 __models_orders += '            <div class="form-group">';
 __models_orders += '                <label for="exampleInputEmail2">客户</label>';
 __models_orders += '                <select class="form-control" v-model="GetOrders.data.customerid">';
 __models_orders += '                    <option value="">全部</option>';
 __models_orders += '                    <option v-for="item in GetEmployeeAndCustomer.result.customers" :value="item.CustomerID">{{item.CompanyName}}</option>';
 __models_orders += '';
 __models_orders += '                </select>';
 __models_orders += '            </div>';
 __models_orders += '            <button type="button" class="btn btn-default" @click="GetOrders.data.index=0;items=[];GetOrders.get()">查询</button>';
 __models_orders += '        </div>';
 __models_orders += '';
 __models_orders += '        <table class="table">';
 __models_orders += '            <thead>';
 __models_orders += '                <tr>';
 __models_orders += '                    <th>OrderID</th>';
 __models_orders += '                    <th>Employee</th>';
 __models_orders += '                    <th>Customer</th>';
 __models_orders += '                    <th>OrderDate</th>';
 __models_orders += '                    <th>RequiredDate</th>';
 __models_orders += '                    <th>ShipCountry</th>';
 __models_orders += '                    <th>ShipCity</th>';
 __models_orders += '                    <th>ShipAddress</th>';
 __models_orders += '                    <th>RequiredDate</th>';
 __models_orders += '                </tr>';
 __models_orders += '            </thead>';
 __models_orders += '            <tbody>';
 __models_orders += '                <tr v-for="item in items">';
 __models_orders += '                    <td>{{item.OrderID}}</td>';
 __models_orders += '                    <td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>';
 __models_orders += '                    <td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>';
 __models_orders += '                    <td>{{item.OrderDate}}</td>';
 __models_orders += '                    <td>{{item.RequiredDate}}</td>';
 __models_orders += '                    <td>{{item.ShipCountry}}</td>';
 __models_orders += '                    <td>{{item.ShipCity}}</td>';
 __models_orders += '                    <td>{{item.ShipAddress}}</td>';
 __models_orders += '                    <td>{{item.ShipAddress}}</td>';
 __models_orders += '                </tr>';
 __models_orders += '                <tr v-if="GetOrders.data.index<pages">';
 __models_orders += '                    <td colspan="9" style="text-align:right;">';
 __models_orders += '                        <a href="javascript:void(0)" @click="GetOrders.get()">({{GetOrders.data.index}}/{{pages}})更多...</a>';
 __models_orders += '                    </td>';
 __models_orders += '                </tr>';
 __models_orders += '            </tbody>';
 __models_orders += '        </table>';
 __models_orders += '';
 __models_orders += '    </div>';

    Vue.component('models_orders', {
        data: function () {
            return {
                GetOrders: new beetlexAction("/Orders", { index: 0, employeeid: 0, customerid: '' }, []),
                pages: 0,
                items: [],
                GetEmployeeAndCustomer: new beetlexAction("/GetEmployeeAndCustomer", null, { employees: [], customers: [] }),
            }
        },
        methods: {
            OnOpenCustomer: function (item) {
                this.$emit('openwindow',
                    {
                        id: 'cust' + item.Customer.CustomerID,
                        title: '客户:' + item.Customer.CompanyName,
                        model: 'models_customerdetail',
                        data: { id: item.Customer.CustomerID }
                    }
                )
            },
            OnOpenEmployee: function (item) {
                this.$emit('openwindow',
                    {
                        id: 'emp' + item.Employee.EmployeeID,
                        title: '雇员:' + item.Employee.FirstName + ' ' + item.Employee.LastName,
                        model: 'models_employeedetail',
                        data: { id: item.Employee.EmployeeID }
                    }
                )
            }
        },
        mounted: function () {
            var _this = this;
            this.GetEmployeeAndCustomer.get();
            this.GetOrders.requested = function (r) {
                _this.pages = r.pages;
                this.data.index++;
                r.items.forEach(function (v) {
                    _this.items.push(v);
                });
            };
            this.GetOrders.get();
        },
        template: __models_orders,
    })
