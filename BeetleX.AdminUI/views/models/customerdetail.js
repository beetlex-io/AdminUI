/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __models_customerdetail="";
 __models_customerdetail += '    <div>';
 __models_customerdetail += '';
 __models_customerdetail += '        <div class="form-horizontal" style="width:90%">';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">CustomerID</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" readonly class="form-control" :value="GetDetail.result.item.CustomerID">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">CompanyName</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.CompanyName">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">ContactName</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.ContactName">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">ContactTitle</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.ContactTitle">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Address</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Address">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">City</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.City">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">PostalCode</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.PostalCode">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Country</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Country">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '            <div class="form-group">';
 __models_customerdetail += '                <label for="inputEmail3" class="col-sm-2 control-label">Phone</label>';
 __models_customerdetail += '                <div class="col-sm-6">';
 __models_customerdetail += '                    <input type="text" class="form-control" :value="GetDetail.result.item.Phone">';
 __models_customerdetail += '                </div>';
 __models_customerdetail += '            </div>';
 __models_customerdetail += '';
 __models_customerdetail += '        </div>';
 __models_customerdetail += '';
 __models_customerdetail += '        <table class="table">';
 __models_customerdetail += '            <thead>';
 __models_customerdetail += '                <tr>';
 __models_customerdetail += '                    <th>OrderID</th>';
 __models_customerdetail += '';
 __models_customerdetail += '                    <th>Employee</th>';
 __models_customerdetail += '                    <th>OrderDate</th>';
 __models_customerdetail += '                    <th>RequiredDate</th>';
 __models_customerdetail += '                    <th>ShipCountry</th>';
 __models_customerdetail += '                    <th>ShipCity</th>';
 __models_customerdetail += '                    <th>ShipAddress</th>';
 __models_customerdetail += '                    <th>RequiredDate</th>';
 __models_customerdetail += '                </tr>';
 __models_customerdetail += '            </thead>';
 __models_customerdetail += '            <tbody>';
 __models_customerdetail += '                <tr v-for="item in GetDetail.result.orders.items">';
 __models_customerdetail += '                    <td>{{item.OrderID}}</td>';
 __models_customerdetail += '';
 __models_customerdetail += '                    <td>{{item.Employee.FirstName}} {{item.Employee.LastName}}</td>';
 __models_customerdetail += '                    <td>{{item.OrderDate}}</td>';
 __models_customerdetail += '                    <td>{{item.RequiredDate}}</td>';
 __models_customerdetail += '                    <td>{{item.ShipCountry}}</td>';
 __models_customerdetail += '                    <td>{{item.ShipCity}}</td>';
 __models_customerdetail += '                    <td>{{item.ShipAddress}}</td>';
 __models_customerdetail += '                    <td>{{item.ShipAddress}}</td>';
 __models_customerdetail += '                </tr>';
 __models_customerdetail += '            </tbody>';
 __models_customerdetail += '        </table>';
 __models_customerdetail += '    </div>';

    Vue.component('models_customerdetail', {
        props: ["token"],
        data: function () {
            return {
                employeeid: this.token.id,
                GetDetail: new beetlexAction("/GetCustomerDetail", { id: 0 }, { item: {}, orders: [] }),
            }
        },
        methods: {

        },
        watch: {
            token(val) {
                this.employeeid = val.id;
                this.GetDetail.get({ id: val.id });
            }
        },
        mounted: function () {
            this.GetDetail.get({ id: this.token.id });
        },
        template: __models_customerdetail,
    })
