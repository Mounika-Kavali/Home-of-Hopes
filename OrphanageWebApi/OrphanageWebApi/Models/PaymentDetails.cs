using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace OrphanageWebApi.Models
{
    public class PaymentDetails
    {
        [Key]
        public int PayId { get; set; }
        public string FullName { get; set; }
        public string EmailId { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public long AmountPaid { get; set; }

     




    }
}
