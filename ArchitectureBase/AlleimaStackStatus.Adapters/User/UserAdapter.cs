using AlleimaStackStatus.AdapterInterfaces.User;
using AlleimaStackStatus.Models.Dto.UserAccount;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlleimaStackStatus.Adapters.User
{
    public class UserAdapter : IUserAdapter
    {
        public view_empmast_allDto AuthenticateUser(string loginId)
        {
            throw new NotImplementedException();
        }
    }
}
