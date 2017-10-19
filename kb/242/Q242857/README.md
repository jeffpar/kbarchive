---
layout: page
title: "Q242857: &quot;Operation Could Not Be Completed&quot; Error When Adding Printer"
permalink: /kb/242/Q242857/
---

## Q242857: &quot;Operation Could Not Be Completed&quot; Error When Adding Printer

	Article: Q242857
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a shared local printer in Windows NT, you may
	receive the following error message:
	
	  Operation could not be completed
	
	CAUSE
	=====
	
	This behavior can occur if the Server service is not started.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click the Server service, and then click Startup.
	
	3. In the Startup Type box, click Automatic, and then click OK.
	
	MORE INFORMATION
	================
	
	To share resources on a computer running Windows NT 4.0, the Server service must
	be started. If the Server service does not start or generates an error message,
	reapply your currently installed service pack. If this does not resolve the
	problem, make a note of the error message and consult the Microsoft Knowledge
	Base at the following Microsoft Web site:
	
	  http://support.microsoft.com/search/
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
