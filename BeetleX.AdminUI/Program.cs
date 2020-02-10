using BeetleX.FastHttpApi.Hosting;
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
                        //o.Port = 80;
                        o.SetDebug();
                        o.LogToConsole = true;
                        o.LogLevel = BeetleX.EventArgs.LogType.Warring;

                    },

                    typeof(Program).Assembly);
                });
            builder.Build().Run();
        }
    }
}
