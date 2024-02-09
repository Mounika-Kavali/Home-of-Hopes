using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(option=>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("SqlserverConnStr"));
});

builder.Services.AddDbContext<PayDbContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("SqlserverConnStr"));
});

builder.Services.AddDbContext<ContactDbContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("SqlserverConnStr"));
});
builder.Services.AddDbContext<ChildDbContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("SqlserverConnStr"));
});
builder.Services.AddDbContext<SponserDbContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("SqlserverConnStr"));
});

builder.Services.AddCors(option =>
{
    option.AddPolicy("MyPolicy", builder =>
    {
        builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});








var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("MyPolicy");
app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
