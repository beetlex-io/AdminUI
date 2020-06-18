    <div style="width:99%;">
        <div class="row">
            <div class="col-lg-6">
                <models_panel :title="'销售走势'" :child="'models_monthline'" :winsize="winsize"></models_panel>
                <models_panel :title="'雇员销售比例'" :child="`model_employeesspie`" :winsize="winsize"></models_panel>
            </div>
            <div class="col-lg-6">
                <models_panel :title="'最新订单'" :child="`models_neworders`"></models_panel>
                <models_panel :title="'客户订单比例'" :child="`model_customerspie`" :winsize="winsize"></models_panel>
            </div>
        </div>
    </div>
<script>
 {
        props: ["winsize"],
        data: function () {
            return {
               
            }
        },
        methods: {
           
        },
        watch: {
            winsize(val) {
              
            },
        },
        mounted: function () {
          
        }
    }
</script>