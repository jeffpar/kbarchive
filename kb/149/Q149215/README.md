---
layout: page
title: "Q149215: VB 4.0 Apps Can Only Be Scheduled Using System Account"
permalink: /kb/149/Q149215/
---

## Q149215: VB 4.0 Apps Can Only Be Scheduled Using System Account

{% raw %}

	Article: Q149215
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you run a Microsoft Visual Basic 4.0 application using the AT Scheduler
	service, if the service is configured to use any account other than the system
	user account, the application will quit, and in Windows NT 3.51 get the
	following error:
	
	  Unexpected error, quitting
	
	Under Windows NT 4.0, you will get the following error:
	
	  Application error caused a Stack Fault in Module <unknown> 00c7:4394f
	  will close.
	
	CAUSE
	=====
	
	Windows applications can be scheduled to run interactively only if the Scheduler
	service is running under the system user account (the default account). If you
	reconfigure the Scheduler service to run using any other account, including
	administrator accounts, then Windows applications cannot be scheduled to run
	fully interactively (that is, they cannot make use of the screen and keyboard).
	This apparent limitation is designed to avoid possible security issues.
	
	If you attempt to schedule a Microsoft Visual Basic 4.0 application under any
	account other than the system account, the VB runtime DLL VB40032.dll will cause
	a memory access violation because it does not have access rights to some desktop
	resources.
	
	NOTE: If you try to run a VB4 application with scheduler under Windows NT 4.00,
	you will get the following error regardless of whether you have scheduler setup
	for the /INTERACTIVE switch and "Allow Service To Interact With Desktop":
	
	  Application Error
	  Caused a Stack Fault in Module <unknown>00c7:4394|||will close
	
	For additional information on this error, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q156735
	  TITLE : WOW Applications Stack Fault When Launched by a Service
	
	
	NOTE: If you schedule a VB5 application it will work fine with system account or
	a specific user's account (necessary for network access)
	
	WORKAROUND
	==========
	
	To get a VB 4.0 application to run under the scheduler service using Windows NT
	3.51, do the following:
	
	1. Ensure that the Scheduler service is configured to run using the system
	  account. To do this, select the Services tool under Control Panel. From the
	  list of services, select Schedule and click the Startup button. Make sure
	  that you click the Log On As System Account button.
	
	2. When you schedule the application using the AT command line, make sure you
	  include the interactive switch.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Hardware          : ALPHA x86
	
	=============================================================================
	

{% endraw %}
