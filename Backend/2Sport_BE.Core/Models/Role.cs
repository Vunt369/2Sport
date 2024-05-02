using System;
using System.Collections.Generic;

namespace _2Sport_BE.Repository.Models
{
    public partial class Role
    {
        public int Id { get; set; }
        public string RoleName { get; set; }
        public int? UserId { get; set; }

        public virtual User User { get; set; }
    }
}
