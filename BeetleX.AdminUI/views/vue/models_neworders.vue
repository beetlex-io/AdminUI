
    <table class="table" style="margin-bottom:0px;">
        <thead>
            <tr>
                <th>Employee</th>
                <th>Customer</th>
                <th>OrderDate</th>
                <th v-if="full=='max'">RequiredDate</th>
                <th v-if="full=='max'">ShipCountry</th>
                <th v-if="full=='max'">ShipCity</th>
                <th v-if="full=='max'">ShipAddress</th>
                <th v-if="full=='max'">RequiredDate</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in TopOrders.result.items">
                <td><a href="javascript:void(0)" @click="OnOpenEmployee(item)">{{item.Employee.FirstName}} {{item.Employee.LastName}}</a></td>
                <td><a href="javascript:void(0)" @click="OnOpenCustomer(item)">{{item.Customer.CompanyName}}</a> </td>
                <td>{{item.OrderDate}}</td>
                <td v-if="full=='max'">{{item.RequiredDate}}</td>
                <td v-if="full=='max'">{{item.ShipCountry}}</td>
                <td v-if="full=='max'">{{item.ShipCity}}</td>
                <td v-if="full=='max'">{{item.ShipAddress}}</td>
                <td v-if="full=='max'">{{item.ShipAddress}}</td>
            </tr>
            <tr v-if="full!='max'">
                <td colspan="3" style="text-align:right;">
                    <a href="javascript:void(0)" @click="$open('orders','订单列表', 'models_orders')">更多...</a>
                </td>
            </tr>
        </tbody>
    </table>

<script>
{
        props: ['panelStatus'],
        data: function () {
            return {
                TopOrders: new beetlexAction("/orders", { index: 0, size: 5 }, { pages: 0, items: [] }),
                full: this.panelStatus,
            };
        },
        watch: {
            panelStatus(val) {
                this.full = val;
                if (this.full == 'max') {
                    this.TopOrders.get({ index: 0, size: 50 })
                }
                else {
                    this.TopOrders.get({ index: 0, size: 5 })
                }

            },
        },
        methods: {
            OnOpenCustomer: function (item) {
                this.$open('cust' + item.Customer.CustomerID, '客户:' + item.Customer.CompanyName, 'models_customerdetail', { id: item.Customer.CustomerID });
            },
            OnOpenEmployee: function (item) {
                this.$open('emp' + item.Employee.EmployeeID, '雇员:' + item.Employee.FirstName + ' ' + item.Employee.LastName, 'models_employeedetail', { id: item.Employee.EmployeeID });
            }
        },
        mounted: function () {
            this.TopOrders.get();
        }
    }
</script>