/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __windowsbar="";
 __windowsbar += '    <div class="windows_bar" :style="{left:(fullStatus==\'max\'?\'60px\':\'260px\')}">';
 __windowsbar += '';
 __windowsbar += '        <ul class="nav nav-tabs" style="display:flex">';
 __windowsbar += '            <li v-for="item in items" role="presentation" :class="[select==item.id?\'active\':\'\']">';
 __windowsbar += '                <a href="javascript:void(0)" @click="$emit(\'openwindow\', item)">{{item.title}}</a>';
 __windowsbar += '                <img v-if="item.id!=\'home\'" @click="OnClose(item)" style="position:relative;float:right;margin-top:-30px;padding-right:4px;cursor:pointer" src="/images/tabclose.png"/>';
 __windowsbar += '            </li>';
 __windowsbar += '        </ul>';
 __windowsbar += '    </div>';

    Vue.component('windows_bar', {
        props: ['windows', 'full', 'selectwindow'],
        data: function () {
            return {
                fullStatus: this.full,
                items: this.windows || [],
                select: this.selectwindow
            }
        },
        watch: {
            full(val) {
                this.fullStatus = val;
            },
            windows(val) {
                this.items = val;
            },
            selectwindow(val) {
                this.select = val;
            },
        },
        methods: {
            OnClose: function (e) {
                this.$emit('close', e);
            }
        },
        template: __windowsbar,
        mounted: function () {

        }
    });
