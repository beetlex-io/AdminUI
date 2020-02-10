/*
* Generate js with vuejs Copyright © ikende.com 2019 email:henryfan@msn.com 
*/
var __footer="";
 __footer += '    <div class="folder">';
 __footer += '        <p style="text-align:center;">';
 __footer += '            <a href="https://github.com/IKende/AdminUI" target="_blank">BeetleX.AdminUI</a> copyright © 2020 <a href="http://beetlex.io" target="_blank">beetlex.io</a>';
 __footer += '            email: admin@beetlex.io <a href="https://github.com/ikende" target="_blank">github.com</a>';
 __footer += '        </p>';
 __footer += '    </div>';

    Vue.component('page_footer', {
        data: function () {
            return {
            }
        },
        template: __footer,
    })
