---
layout: page
title: "Q163431: 16-Bit Application Stops Responding When Run on WinNT 4.0"
permalink: kb/163/Q163431/
---

## Q163431: 16-Bit Application Stops Responding When Run on WinNT 4.0

	Article: Q163431
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a 16-bit application on Windows NT 4.0, a second 16-bit application
	created by the first 16-bit application stops responding. This same application
	will run fine on Windows 3.1, Windows 95, and Windows NT 3.51.
	
	CAUSE
	=====
	
	The main application created (spawned) a child 16-bit task and then entered a
	loop issuing Yield() calls until the newly created task set a global variable to
	True. A race condition existed in which the WOW made an incorrect assumption
	about the task, calling the yield function after a new 16-bit task was created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt NT wow32 ntvdm hang
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
