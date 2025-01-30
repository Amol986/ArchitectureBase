using AlleimaStackStatus.Models.Dto.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AlleimaStockStatusSystem.Areas.UserAccount.Controllers
{
    public class AuthenticateUserController : Controller
    {
        // GET: UserAccount/AuthenticateUser
        public ActionResult AuthenticateEmployee()
        {
            // string empSecurity = User.Identity.Name;

            //#region done below changes for testing purpose
            //string empSecurityLocal = User.Identity.Name;
            //string[] parts = empSecurityLocal.Split('\\');
            //string[] secondWord = parts[1].Split('.');
            ////string empSecurity = "mtrltech\\" + secondWord[0];

            //string empSecurity = "mtrltech\\payal"; //sr06122 SS06135
            ////string empSecurity = "mtrltech\\alik"; //sr06122 SS06135
            ////string empSecurity = "mtrltech\\amol";
            ////string empSecurity = "mtrltech\\sr06122"; //sr06122 SS06135
            //#endregion

            //ActionConfirmationDto actionConfirmationDto = _authenticateActions.AuthenticateUser(empSecurity);

            //if (actionConfirmationDto.WasSuccessful)
            //{
            //    HttpCookie cookie = new HttpCookie(ProjectConstants.ApplicationFeature.Administration.Configuration.UseDetails);
            //    SessionDto authenticatedUser = (SessionDto)actionConfirmationDto.Data;
            //    Session[ProjectConstants.SessionKey] = authenticatedUser;
            //    Session[ProjectConstants.ApplicationFeature.Administration.Configuration.logintime] = DateTime.Now;
            //    cookie[ProjectConstants.ApplicationFeature.Administration.Configuration.UserName] = authenticatedUser.viewempmastallDto.firstname + authenticatedUser.viewempmastallDto.lastname;
            //    cookie[ProjectConstants.ApplicationFeature.Administration.Configuration.LofinId] = authenticatedUser.viewempmastallDto.user_name.ToString();
            //    cookie.Expires = DateTime.Now.AddSeconds(1000);
            //    Response.Cookies.Add(cookie);


                return RedirectToAction("Index", "Dashboard", new { Area = "Dashboard" });

            //}
            //else
            //{
            //    return RedirectToAction("ErrorPage", "AuthenticateUser", new { Area = "UserAccount" });
            //}
        }
    }
}