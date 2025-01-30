using AlleimaStackStatus.LogInterfaces;
using log4net.Appender;
using log4net.Core;
using log4net.Layout;
using log4net.Repository.Hierarchy;
using log4net;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlleimaStackStatus.Logs.Log
{
    public class Loger: ILogs
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Logger)); // Static logger instance

        public Loger()
        {
            ConfigureLogging(); // Ensure logger is configured once
        }

        /// <summary>
        /// Writes a log message to file at the specified log level.
        /// </summary>
        public void WriteLog(LogLevel level, string message)
        {
            switch (level)
            {
                case LogLevel.VERBOSE:
                    log.Debug(message);
                    break;
                case LogLevel.INFO:
                    log.Info(message);
                    break;
                case LogLevel.WARN:
                    log.Warn(message);
                    break;
                case LogLevel.ERROR:
                    log.Error(message);
                    break;
                case LogLevel.FATAL:
                    log.Fatal(message);
                    break;
                default:
                    log.Info(message); // Default to Info if level is unrecognized
                    break;
            }
        }

        /// <summary>
        /// Logs an exception with a specified log level.
        /// </summary>
        public void LogException(Exception exception, LogLevel level)
        {
            string message = exception.Message + Environment.NewLine + exception.StackTrace;
            switch (level)
            {
                case LogLevel.VERBOSE:
                    log.Debug(message);
                    break;
                case LogLevel.INFO:
                    log.Info(message);
                    break;
                case LogLevel.WARN:
                    log.Warn(message);
                    break;
                case LogLevel.ERROR:
                    log.Error(message);
                    break;
                case LogLevel.FATAL:
                    log.Fatal(message);
                    break;
                default:
                    log.Error(message); // Default to Error if level is unrecognized
                    break;
            }
        }

        /// <summary>
        /// Logs an error message.
        /// </summary>
        public void Error(string message)
        {
            log.Error(message);
        }

        /// <summary>
        /// Configures the logger based on app settings or default values.
        /// </summary>
        /// 


        private static void ConfigureLogging()
        {
            var hierarchy = (Hierarchy)LogManager.GetRepository();
            if (hierarchy.Configured) return; // Prevents duplicate configuration

            // Fetching settings with defaults as fallback
            string logFileName = ConfigurationManager.AppSettings["LogFilePath"] ?? "logfile.log";
            string conversionPattern = ConfigurationManager.AppSettings["ConversionPattern"] ?? "%-5p%d{yyyy-MM-dd hh:mm:ss tt} – %m%n";
            string datePattern = ConfigurationManager.AppSettings["DatePattern"] ?? "'.'yyyy-MM-dd";
            string maximumFileSize = ConfigurationManager.AppSettings["MaximumFileSize"] ?? "10MB";
            int maxSizeRollBackups = int.TryParse(ConfigurationManager.AppSettings["MaxSizeRollBackups"], out var backups) ? backups : 5;

            // Creating and configuring the file appender
            var appender = CreateFileAppender(logFileName, conversionPattern, datePattern, maximumFileSize, maxSizeRollBackups);
            hierarchy.Root.AddAppender(appender);
            hierarchy.Root.Level = Level.All;
            hierarchy.Configured = true;
        }

        /// <summary>
        /// Creates and configures a file appender.
        /// </summary>
        private static IAppender CreateFileAppender(string logFileName, string conversionPattern, string datePattern, string maximumFileSize, int maxSizeRollBackups)
        {
            var patternLayout = new PatternLayout
            {
                ConversionPattern = conversionPattern
            };
            patternLayout.ActivateOptions();

            var appender = new RollingFileAppender
            {
                File = logFileName,
                AppendToFile = true,
                RollingStyle = RollingFileAppender.RollingMode.Composite,
                MaxSizeRollBackups = maxSizeRollBackups,
                DatePattern = datePattern,
                MaximumFileSize = maximumFileSize,
                Layout = patternLayout,
                LockingModel = new FileAppender.MinimalLock(),
                StaticLogFileName = true
            };
            appender.ActivateOptions();
            return appender;
        }
    }
}