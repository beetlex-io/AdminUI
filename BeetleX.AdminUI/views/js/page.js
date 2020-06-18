var model = {
    full: 'min',
    windows: [],
    selectWindow: {
    },
    selectModel: '',
    sizeVersion: 1,
};
var pageInfo = {
    el: '#page', data: model,
    methods: {
        OnMenuResize: function (event) {
            this.full = event;
            this.OnResize();
        },

        OnCloseWindows: function (e) {
            var index = -1;
            for (i = 0; i < this.windows.length; i++) {
                if (this.windows[i].id == e.id) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                this.windows.splice(index, 1);
                if (this.windows.length > 0)
                    this.OnOpenWindow(this.windows[0]);
                else {
                    this.selectWindow = null;
                    this.selectModel = null;
                }
            }

        },

        OnOpenWindow: function (e) {
            var has = false;
            for (i = 0; i < this.windows.length; i++) {
                var item = this.windows[i];
                if (item.id == e.id)
                    has = true;
            }
            if (has == false) {
                this.windows.push(e);
            }
            this.selectWindow = e;
            this.selectModel = e.model;
        },
        OnResize: function () {
            this.sizeVersion = this.sizeVersion + 1;
        },
    }
}

window.onresize = function () {
    page.OnResize();
};
Vue.prototype.$fullScreen = function () {
    return page.full;
};
Vue.prototype.$open = function (id, title, model, data) {
    page.OnOpenWindow({ id: id, title: title, model: model, data: data });
};