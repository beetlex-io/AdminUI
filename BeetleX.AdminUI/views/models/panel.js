/*
* Generate component javascript with vuejs Copyright © beetlex.io 2019-2020 email:admin@beetlex.io 
*/
var __model_panel=""+ '<div>'+ '<div :class="GetStyle()">'+ '<div class="model-panel-title">'+ '<h4>{{title}}</h4>'+ '<a href="javascript:void(0)" @click="OnResize"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></a>'+ '</div>'+ '<hr style="padding:0px;margin:0px;" />'+ '<div :class="[panelStatus==\'max\'?\'model-panel-body-full\':\'model-panel-body\']">'+ '<component :is="childModel" :token="childData" :winsize="resize" :panelStatus="panelStatus"></component>'+ '</div>'+ '</div>'+ '</div>';
    Vue.component('models_panel', {
        props: ["winsize", "child", "token", "title"],
        data: function () {
            return {
                resize: this.winsize,
                childModel: this.child,
                childData: this.token,
                panelStatus: 'none',           
            }
        },
        watch: {
            winsize(val) {
                this.resize = val;
            },
            token(val) {
                this.childData = val;
            },
        },
        methods: {
            OnOpenWindow: function (event) {
                this.$open(event.id, event.title, event.model, event.data);
            },
            GetStyle: function () {
                if (this.panelStatus == 'none')
                    return "model-panel";
                if (this.$fullScreen() == 'max') {
                    return "model-panel-full-max";
                }
                else {
                    return "model-panel-full";
                }
            },
            OnResize: function () {
                if (this.panelStatus == 'none') {
                    this.panelStatus = 'max';
                }
                else {
                    this.panelStatus = 'none';
                }
                this.resize++;
            }
        },
        mounted: function () {

        },
        template: __model_panel,
    })
