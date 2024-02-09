using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {

        }
        public DbSet<AdminLogin>User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<AdminLogin>().ToTable("AdminDetails");
        }
    }
}
