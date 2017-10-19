---
layout: page
title: "Q164487: Briefcase May Take a Long Time to Update"
permalink: /kb/164/Q164487/
---

## Q164487: Briefcase May Take a Long Time to Update

	Article: Q164487
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the briefcase on a workstation with files that reside on a network
	drive, it may take a very long time to update the status of the files within the
	briefcase window opened by Explorer.
	
	Additionally, the CPU usage may go up to 100 percent until the status of all
	files has been updated.
	
	CAUSE
	=====
	
	This problem occurs if a large number of files in the briefcase (usually greater
	than 200) reside on the server.
	
	Note that a briefcase on Windows 95 with the same files will not take as long to
	update.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
