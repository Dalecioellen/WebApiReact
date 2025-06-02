using Microsoft.EntityFrameworkCore;
using WebReact.Configuração;

public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<Contexto>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
    // outros serviços...
}   