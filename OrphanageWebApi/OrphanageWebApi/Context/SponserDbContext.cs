using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Context
{
    public class SponserDbContext:DbContext
    {
        public SponserDbContext(DbContextOptions<SponserDbContext> options) : base(options) { }
        public DbSet<SponserDetails> sponsersTB { get; set; }
        public DbSet<ChildData> childrenDataTB { get; set; }
    }
}
