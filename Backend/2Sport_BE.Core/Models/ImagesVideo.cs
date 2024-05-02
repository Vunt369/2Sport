using System;
using System.Collections.Generic;

namespace _2Sport_BE.Repository.Models
{
    public partial class ImagesVideo
    {
        public int Id { get; set; }
        public byte[] Image { get; set; }
        public byte[] Video { get; set; }
        public int BlogId { get; set; }
        public int ProductId { get; set; }

        public virtual Blog Blog { get; set; }
        public virtual Product Product { get; set; }
    }
}
