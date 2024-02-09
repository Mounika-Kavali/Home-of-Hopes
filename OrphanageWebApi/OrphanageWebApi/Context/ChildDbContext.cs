using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Context
{
    public class ChildDbContext:DbContext
    {
        public ChildDbContext(DbContextOptions<ChildDbContext> options) : base(options) { }
        public DbSet<ChildData> childrenDataTB { get; set; }
        public override int SaveChanges()
        {
            foreach(var entry  in ChangeTracker.Entries())
            {
                var entity= entry.Entity;
                if(entry.State== EntityState.Deleted)
                {
                    entry.State = EntityState.Modified;
                    entity.GetType().GetProperty("recordStatus").SetValue(entity, "Deleted");
                }
            }
            return base.SaveChanges();
        }

    }
}
