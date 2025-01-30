using AlleimaStackStatus.Models.Dto.UserAccount;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlleimaStackStatus.AdapterInterfaces.User
{
    public interface IUserAdapter :IBaseAdapter
    {
        view_empmast_allDto AuthenticateUser(string loginId);
    }
}
