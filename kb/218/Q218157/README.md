---
layout: page
title: "Q218157: Drwtsn32.exe May Fail to Handle an Abnormal Termination Event"
permalink: kb/218/Q218157/
---

## Q218157: Drwtsn32.exe May Fail to Handle an Abnormal Termination Event

	Article: Q218157
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A service running on the system abnormally terminates and Drwtsn32.exe is called
	and fails to run. A Drwtsn32 dialog box is displayed indicating the following:
	
	  User32.dll failed to initialize.
	
	Drwtsn32.log or User.dmp files are not generated.
	
	CAUSE
	=====
	
	If the service is configured to run in a user context other than LocalSystem,
	Drwtsn32.exe will fail to run because it needs access to the desktop to function
	properly and this access is denied because it is running in the same context as
	the failing service.
	
	RESOLUTION
	==========
	
	To work around this problem, configure the service to run as the LocalSystem
	user account until the cause of the failure is determined and corrected.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
