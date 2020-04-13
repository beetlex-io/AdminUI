    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Region</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in GetEmployees.result">
                    <td><a href="javascript:void(0)" @click="OnOpen(item)">{{item.FirstName}} {{item.LastName}}</a> </td>
                    <td>{{item.Title}}</td>
                    <td>{{item.Region}}</td>
                    <td>{{item.City}}</td>
                    <td>{{item.Country}}</td>
                    <td>{{item.Address}}</td>
                </tr>

            </tbody>
        </table>
    </div>
<script>
    {
        data: function () {
            return {
                GetEmployees: new beetlexAction("/Employees", null, []),
            }
        },
        methods: {
            OnOpen: function (item) {
                this.$open('emp' + item.EmployeeID, '雇员:' + item.FirstName + ' ' + item.LastName, 'models_employeedetail', { id: item.EmployeeID });
            }
        },
        mounted: function () {
            this.GetEmployees.get();
        }
    }
</script>