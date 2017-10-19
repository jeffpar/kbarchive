---
layout: page
title: "Q115692: BUG: No Video Refresh When .PIF Runs When Logged Off"
permalink: /kb/115/Q115692/
---

## Q115692: BUG: No Video Refresh When .PIF Runs When Logged Off

	Article: Q115692
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1
	Operating System(s): 
	Keyword(s): kbtool kbOSWinNT310
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Server version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the AT command or Command Scheduler to schedule a .pif file to run
	when you have logged off or locked the computer, the screen is not refreshed
	when you log on. However, the screen is refreshed after you minimize or maximize
	the window.
	
	RESOLUTION
	==========
	
	To avoid this problem, select the Windowed option in the display usage section
	when you edit the .pif files to run when you have logged off or when the
	computer is locked.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1.
	
	Additional query words: prodnt video
	
	======================================================================
	Keywords          : kbtool kbOSWinNT310 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
