---
layout: page
title: "Q194916: Restarting Web Services and Scheduled Tasks with a Batch File"
permalink: /kb/194/Q194916/
---

## Q194916: Restarting Web Services and Scheduled Tasks with a Batch File

{% raw %}

	Article: Q194916
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to shut down the Internet Information Server (IIS)
	services while other scheduled tasks are running.
	
	MORE INFORMATION
	================
	
	The following instructions and batch file allow you to schedule IIS to restart
	on a daily basis at 1:00A.M. It will also keep a log to show when the services
	were stopped and started in your %SystemRoot% folder. By modifying the remark
	(REM) sections of the batch file you can specify other commands to run while IIS
	is stopped.
	
	1. Log on to the Windows NT computer as an administrator.
	
	2. Make sure that the Task Scheduler service is set to automatically run by
	  performing the following steps:
	
	  a. Click the Start button, point to Settings, click Control Panel, and then
	     double-click Services.
	
	  b. Scroll to "Task Scheduler."
	
	  c. If the status does not say running, then click the Start button.
	
	  d. Click the Startup button.
	
	  e. Make sure the Startup Type is set to Automatic, and then click OK.
	
	  f. Click Close to exit the Services dialog box.
	
	3. Open a command prompt session and type the following command:
	
	  at 1:00am /every:M,T,W,Th,F,S,Su "restart.bat"
	
	4. Save the following text as a batch file named Restart.bat in your path:
	
	     @echo off
	     cls
	     echo RESTART - A restart utility for IIS web services.
	     echo June 1998, Microsoft Corporation.
	     echo ****************************************>>%SystemRoot%\restart.log
	     echo Stop Date/Time:>>%SystemRoot%\restart.log
	     echo. | date | find /i "current">>%SystemRoot%\restart.log
	     echo. | time | find /i "current">>%SystemRoot%\restart.log
	     echo.>>%SystemRoot%\restart.log
	     echo Stopping Web Services...
	     echo.
	
	     set MSFTPSVC=0
	     set NNTPSVC=0
	     set SMTPSVC=0
	     set W3SVC=0
	     set BROKSVC=0
	     set LDAPSVC=0
	     set MSGBLDSVC=0
	     set IISERROR=0
	
	     :MSFTPSVC
	     net start | find /i "FTP Publishing Service">NUL
	     if errorlevel==1 goto NNTPSVC
	     set MSFTPSVC=1
	
	     :NNTPSVC
	     net start | find /i "Microsoft NNTP Service">NUL
	     if errorlevel==1 goto SMTPSVC
	     set NNTPSVC=1
	
	     :SMTPSVC
	     net start | find /i "Microsoft SMTP Service">NUL
	     if errorlevel==1 goto W3SVC
	     set SMTPSVC=1
	
	     :W3SVC
	     net start | find /i "World Wide Web Publishing Service">NUL
	     if errorlevel==1 goto BROKSVC
	     set W3SVC=1
	
	     :BROKSVC
	     net start | find /i "Site Server Authentication Service">NUL
	     if errorlevel==1 goto LDAPSVC
	     set BROKSVC=1
	
	     :LDAPSVC
	     net start | find /i "Site Server LDAP Service">NUL
	     if errorlevel==1 goto MSGBLDSVC
	     set LDAPSVC=1
	
	     :MSGBLDSVC
	     net start | find /i "Site Server Message Builder Service">NUL
	     if errorlevel==1 goto STOPIIS
	     set MSGBLDSVC=1
	
	     :STOPIIS
	     net stop iisadmin /y>>%SystemRoot%\restart.log
	     if errorlevel==1 goto STOPERROR
	     goto STOPPED
	
	     :STOPERROR
	     REM ********************
	     REM * Put any desired error-handling commands here.
	     REM * For example, if you have the NT Resource Kit,
	     REM * you could use the following command to stop
	     REM * IIS down the hard way:
	     REM *     KILL.EXE INETINFO.EXE
	     REM ********************
	     set IISERROR=1
	
	     :STOPPED
	     REM ********************
	     REM * Put any desired commands to run while IIS is stopped here.
	     REM * For example, if you have the Windows NT Resource Kit,
	     REM * you could use the following command to pause
	     REM * the restart for one minute:
	     REM *     SLEEP.EXE 60
	     REM ********************
	
	     :STARTIIS
	     echo -------------------->>%SystemRoot%\restart.log
	     echo Start Date/Time:>>%SystemRoot%\restart.log
	     echo. | date | find /i "current">>%SystemRoot%\restart.log
	     echo. | time | find /i "current">>%SystemRoot%\restart.log
	     echo.>>%SystemRoot%\restart.log
	     echo Starting web services...
	     echo.
	
	     if %W3SVC%==0 goto NOW3SVC
	     net start W3SVC>>%SystemRoot%\restart.log
	     if errorlevel==1 set IISERROR=1
	
	     :NOW3SVC
	     if %MSFTPSVC%==0 goto NOMSFTPSVC
	     net start MSFTPSVC>>%SystemRoot%\restart.log
	     if errorlevel==1 set IISERROR=1
	
	     :NOMSFTPSVC
	     if %NNTPSVC%==0 goto NONNTPSVC
	     net start NNTPSVC>>%SystemRoot%\restart.log
	     if errorlevel==1 set IISERROR=1
	
	     :NONNTPSVC
	     if %SMTPSVC%==0 goto NOSMTPSVC
	     net start SMTPSVC>>%SystemRoot%\restart.log
	     if errorlevel==1 set IISERROR=1
	
	     :NOSMTPSVC
	     if %BROKSVC%==0 goto NOBROKSVC
	     net start BROKSVC>>%SystemRoot%\restart.log
	     if errorlevel==1 set IISERROR=1
	
	     :NOBROKSVC
	     if %LDAPSVC%==0 goto NOLDAPSVC
	     net start LDAPSVC>>%SystemRoot%\restart.log
	     if errorlevel==1 set IISERROR=1
	
	     :NOLDAPSVC
	     if %LDAPSVC%==0 goto NOMSGBLDSVC
	     net start MSGBLDSVC>>%SystemRoot%\restart.log
	     if errorlevel==1 set IISERROR=1
	
	     :NOMSGBLDSVC
	     if %IISERROR%==0 goto EXIT
	
	     :ERROR
	     echo RESTART ERROR...>>%SystemRoot%\restart.log
	     echo One or more of the services could not be
	     restarted.>>%SystemRoot%\restart.log
	     echo Please check the Event Viewer logs for more
	     information.>>%SystemRoot%\restart.log
	
	     REM ********************
	     REM * Put any desired error-handling commands here.
	     REM * For example, if you have the Windows NT Resource Kit,
	     REM * you could use the following command to restart
	     REM * the server in two minutes:
	     REM *     SHUTDOWN.EXE /L /R /T:120 /Y
	     REM ********************
	
	     :EXIT
	     set MSFTPSVC=
	     set NNTPSVC=
	     set SMTPSVC=
	     set W3SVC=
	     set BROKSVC=
	     set LDAPSVC=
	     set MSGBLDSVC=
	     set IISERROR=
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
