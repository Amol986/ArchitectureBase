using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlleimaStackStatus.Models.Dto.Common
{
    public class ActionConfirmationDto
    {
        #region Public Properties

        public bool WasSuccessful { get; set; }

        public string Message { get; set; }

        public object Data { get; set; }

        #endregion

        #region Methods

        public static ActionConfirmationDto CreateSuccessConfirmation(string message)
        {
            return new ActionConfirmationDto
            {
                Message = message,
                WasSuccessful = true
            };
        }


        public static ActionConfirmationDto CreateSuccessConfirmation(string message, object data)
        {
            return new ActionConfirmationDto
            {
                Message = message,
                WasSuccessful = true,
                Data = data
            };
        }

        public static ActionConfirmationDto CreateFailureConfirmation(string message)
        {
            return new ActionConfirmationDto
            {
                Message = message,
                WasSuccessful = false
            };
        }

        public static ActionConfirmationDto CreateFailureConfirmation(string message, object data)
        {
            return new ActionConfirmationDto
            {
                Message = message,
                WasSuccessful = false,
                Data = data
            };
        }

        public static ActionConfirmationDto CreateWarningConfirmation(string message)
        {
            return new ActionConfirmationDto
            {
                Message = message,
                WasSuccessful = true
            };
        }

        public static ActionConfirmationDto CreateWarningConfirmation(string message, object data)
        {
            return new ActionConfirmationDto
            {
                Message = message,
                WasSuccessful = true,
                Data = data
            };
        }

        #endregion
    }
}
