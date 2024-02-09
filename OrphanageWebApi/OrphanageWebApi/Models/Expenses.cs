using System.ComponentModel.DataAnnotations;

namespace OrphanageWebApi.Models
{
    public class Expenses
    {
        public int food { get; set; }
        public int clothing { get; set; }
        public int health { get; set; }
        public int education { get; set; }
        public int sanitation { get; set; }
        public int salaries { get; set; }
        public int maintainance { get; set; }
        public int others { get; set; }
        [Key]
        public int id { get;set; }
        public string onDate { get; set; }

    }
}
