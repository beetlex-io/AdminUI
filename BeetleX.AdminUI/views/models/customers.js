/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_customers="";
 __models_customers += '    <div>';
 __models_customers += '        <table class="table">';
 __models_customers += '            <thead>';
 __models_customers += '                <tr>';
 __models_customers += '                    <th>CustomerID</th>';
 __models_customers += '                    <th>CompanyName</th>';
 __models_customers += '                    <th>ContactName</th>';
 __models_customers += '                    <th>ContactTitle</th>';
 __models_customers += '                    <th>Phone</th>';
 __models_customers += '                    <th>Fax</th>';
 __models_customers += '                </tr>';
 __models_customers += '            </thead>';
 __models_customers += '            <tbody>';
 __models_customers += '                <tr v-for="item in items">';
 __models_customers += '                    <td><a href="javascript:void(0)" @click="OnOpen(item)"> {{item.CustomerID}}</a></td>';
 __models_customers += '                    <td>{{item.CompanyName}}</td>';
 __models_customers += '                    <td>{{item.ContactName}}</td>';
 __models_customers += '                    <td>{{item.ContactTitle}}</td>';
 __models_customers += '                    <td>{{item.Phone}}</td>';
 __models_customers += '                    <td>{{item.Fax}}</td>';
 __models_customers += '                </tr>';
 __models_customers += '                <tr v-if="GetCustomers.data.index<pages">';
 __models_customers += '                    <td colspan="6" style="text-align:right;">';
 __models_customers += '                        <a href="javascript:void(0)" @click="GetCustomers.get()">({{GetCustomers.data.index}}/{{pages}})更多...</a>';
 __models_customers += '                    </td>';
 __models_customers += '                </tr>';
 __models_customers += '            </tbody>';
 __models_customers += '        </table>';
 __models_customers += '    </div>';

    Vue.component('models_customers', {
        data: function () {
            return {
                GetCustomers: new beetlexAction("/Customers", { index: 0 }, { pages: 0, items: [] }),
                pages: 0,
                items: []
            }
        },
        methods: {
            OnOpen: function (item) {
                this.$emit('openwindow',
                    {
                        id: 'cust' + item.CustomerID,
                        title: '客户:' + item.CompanyName,
                        model: 'models_customerdetail',
                        data: { id: item.CustomerID }
                    }
                )
            }
        },
        mounted: function () {
            var _this = this;
            this.GetCustomers.requested = function (r) {
                _this.pages = r.pages;
                this.data.index++;
                r.items.forEach(function (v) {
                    _this.items.push(v);
                });
            };
            this.GetCustomers.get();
        },
        template: __models_customers,
    })
