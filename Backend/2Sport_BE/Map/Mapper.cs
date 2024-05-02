using _2Sport_BE.Repository.Models;
using _2Sport_BE.ViewModels;

namespace _2Sport_BE.Map
{
    public static class Mapper
    {
        #region User
        public static User ConvertUserVMToUser(UserVM userVM)
        {
            return new User
            {
                Id = userVM.Id,
                UserName = userVM.UserName,
                Email = userVM.Email,
                Password = userVM.Password,
                FullName = userVM.FullName,
            };
        }
        public static User ConvertUserCreateVMToUser(UserCreateVM userVM)
        {
            return new User
            {
                Id = userVM.Id,
                UserName = userVM.UserName,
                Email = userVM.Email,
                Password = userVM.Password,
                FullName = userVM.FullName,
                BirthDate = userVM.BirthDate,
            };
        }
        #endregion
    }
}
