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
                        o.LogLevel = BeetleX.EventArgs.LogType.Warring;

                    },
                    s => {
                        s.AddExts("eot;svg;ttf;woff;woff2");
                        s.Vue().Debug();
                        s.Vue().AddScript(typeof(Program).Assembly,
                          "vue.js", "axios.js", "beetlex4axios.js", "jquery.js", "echarts.js", "bootstrap.js");
                    },
                    typeof(Program).Assembly);
                });
            builder.Build().Run();
        }
    }
}
