using BeetleX.FastHttpApi.Hosting;
using BeetleX.FastHttpApi.VueExtend;
using Microsoft.Extensions.Hosting;
using System;

namespace BeetleX.AdminUI
{
    class Program
    {
        static void Main(string[] args)
        {
            var builder = new HostBuilder()
                .ConfigureServices((hostContext, services) =>
                {
                    services.UseBeetlexHttp(o =>
                    {
                        o.Port = 80;
                        o.SetDebug();
                        o.LogToConsole = true;
                        o.LogLevel = BeetleX.EventArgs.LogType.Info;

                    },
                    s =>
                    {
                        s.AddExts("woff;ttf");
                        s.Vue().CssRewrite("/css/{1}.css").JsRewrite("/js/{1}.js");
                        s.Vue().Debug();
                        var resource = s.Vue().CreateWebResorce(typeof(Program).Assembly);
                        resource.AddScript("vue.js", "axios.js", "beetlex4axios.js", "jquery.js", "echarts.js", "bootstrap.js","page.js");
                        resource.AddCss("bootstrap.css", "bootstrapadmin.css", "admin.css");
                    },
                    typeof(Program).Assembly);
                });
            builder.Build().Run();
        }
    }
}
