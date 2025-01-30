using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlleimaStackStatus.LogInterfaces
{
    public interface ILogs: IBaseLog
    {
        /// <summary>
        /// Writes logs to file
        /// </summary>
        void WriteLog(LogLevel level, string message);

        /// <summary>
        /// Logs the exception.
        /// </summary>
        /// <param name="exception">The exception.</param>
        void LogException(Exception exception, LogLevel level);
        void Error(string v);
    }
    /// <summary>
    /// Enumeration defining log levels to use in the common logging interface
    /// </summary>
    public enum LogLevel
    {
        FATAL = 0,
        ERROR = 1,
        WARN = 2,
        INFO = 3,
        VERBOSE = 4
    }
}
