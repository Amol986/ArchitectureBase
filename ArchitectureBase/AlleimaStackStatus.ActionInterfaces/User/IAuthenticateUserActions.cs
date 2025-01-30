using AlleimaStackStatus.Models.Dto.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlleimaStackStatus.ActionInterfaces.User
{
    public interface IAuthenticateUserActions:IBaseAction
    {
        ActionConfirmationDto AuthenticateUser(string empSecurity);

    }
}
