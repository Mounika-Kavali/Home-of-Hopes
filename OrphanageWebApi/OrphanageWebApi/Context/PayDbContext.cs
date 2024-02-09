using Microsoft.EntityFrameworkCore;
using OrphanageWebApi.Models;

namespace OrphanageWebApi.Context
{
    public class PayDbContext:DbContext
    {
        public PayDbContext() { }
        public PayDbContext(DbContextOptions<PayDbContext> options) : base(options) { }
        public DbSet<PaymentDetails> PaymentDetailsTB { get; set; }
        public DbSet<Expenses> ExpendituresTB { get; set; }


    }
}
