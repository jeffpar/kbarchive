---
layout: page
title: "Q172224: PDLSVC: Application Terminates Attaching To Many Servers"
permalink: /kb/172/Q172224/
---

## Q172224: PDLSVC: Application Terminates Attaching To Many Servers

	Article: Q172224
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add eight or more servers to the Performance Data Log Service utility
	provided in the Windows NT 4.0 Resource Kit, one of the following symptoms may
	occur when attempting to stop the service:
	
	  Error: "The instruction at "0x77f64c5f" referenced memory at "0x013ab60d".
	  The memory could not be "read". Click on OK to terminate the application."
	
	-or-
	
	  Error: "The instruction at "0x77f64c5f" referenced memory at "0x013ab60d".
	  The memory could not be "written" Click on OK to terminate the application."
	
	-or-
	
	  The service is not stopped.
	
	The symptom occurs usually shortly after adding or removing computers or when
	starting or stopping monitoring.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Pdlsvc.exe utility in the
	Windows NT Resource Kit. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: pdlsvc.exe pdlcnfig pdlcnfig.exe perfdata perflog performance monitor services reskit
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
