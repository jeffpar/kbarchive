---
layout: page
title: "Q186605: Terminal Server Client Error: Not a Valid Windows NT Application"
permalink: /kb/186/Q186605/
---

## Q186605: Terminal Server Client Error: Not a Valid Windows NT Application

	Article: Q186605
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A non-administrator user tries to launch an applications and receives the
	following error:
	
	  <application> is not a valid Windows NT application.
	
	The error may also occur if the system tried to start an application (such as
	Systray.exe on startup). Also, the system may not be able to determine what
	application is failing. In this case, the error message will appear but the
	<application> area may be blank.
	
	CAUSE
	=====
	
	The most likely cause is that the administrator has turned on the administrator
	utility Application Security, but has not added the failing application to the
	list of allowed applications.
	
	RESOLUTION
	==========
	
	At the Terminal Server, the administrator can add the failing application to the
	list of authorized applications. To do this,
	
	1. Run the Application Security application and click ADD.
	
	2. Browse for the application or enter the path. If the error message does not
	  list the application, the administrator may need to run file auditing to
	  determine what is failing.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
