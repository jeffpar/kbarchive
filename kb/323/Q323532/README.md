---
layout: page
title: "Q323532: SMS: Client Exception Errors Occur When No User Is Logged On"
permalink: /kb/323/Q323532/
---

## Q323532: SMS: Client Exception Errors Occur When No User Is Logged On

{% raw %}

	Article: Q323532
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the logs from a workstation that is running the Systems Management
	Server (SMS) 2.0 client on Microsoft Windows 95, Microsoft Windows 98, or
	Microsoft Windows 98 Second Edition, you may see exceptions such as the
	following exceptions in the Ccim32.log file:
	
	  GetUserName returned FALSE (ERROR_NOT_LOGGED_ON)
	  IsUserLoggedOn() - waiting a minute...
	  GetUserName returned FALSE (ERROR_NOT_LOGGED_ON)
	  IsUserLoggedOn() - waiting a minute...
	  EXCEPTION EXCEPTION EXCEPTION
	  CLIEXCEPT(Logged to all threads) An exception was raised in the application
	  'Client Component Installation Manager', thread 0xfffe17d3 (Main Thread)~
	  CLIEXCEPT A fatal exception occurred in THIS THREAD. Information follows:~
	
	Note that this error is typically not seen by the user.
	
	CAUSE
	=====
	
	This issue may occur for multiple reasons. One cause is having Autoexec.bat or
	Config.sys files that are cluttered. A cluttered file may contain multiple SHELL
	statements, multiple similar SET statements, conflicting drivers, or improperly
	formatted statements such as PATH statements that beginning with a semicolons.
	
	WORKAROUND
	==========
	
	To work around this issue, make sure that the Autoexec.bat and Config.sys files
	are free of redundant or improperly formatted information.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
