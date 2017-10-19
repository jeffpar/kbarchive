---
layout: page
title: "Q101869: Print Manager Reports &quot;Printer Out of Paper&quot; on Serial Port"
permalink: /kb/101/Q101869/
---

## Q101869: Print Manager Reports &quot;Printer Out of Paper&quot; on Serial Port

	Article: Q101869
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error conditions cause a "Printer out of paper" message when your
	printer is connected to a serial port:
	
	- The printing device is out of paper.
	
	- The printing device is offline.
	
	- The printing device is switched off.
	
	- The cable to the printing device is disconnected.
	
	CAUSE
	=====
	
	When you print to a serial port, there is only one error condition available
	(time-out). In a serial connection, there are no status lines available to
	inform Windows NT as to which specific problem exists (as do parallel ports).
	Therefore, Windows NT defaults to "Printer out of paper" with serial printers.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kberrmsg kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
