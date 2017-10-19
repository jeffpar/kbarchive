---
layout: page
title: "Q193064: Pressing Cancel Button in Date/Time Utility Changes Date"
permalink: /kb/193/Q193064/
---

## Q193064: Pressing Cancel Button in Date/Time Utility Changes Date

	Article: Q193064
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You want to change your computer's date display through Control Panel. Go to the
	Date/Time tool. The following scenario describes the bug:
	
	1. Today's date is January 30. You decide to change the computer's display to
	  January 31. (This scenario is true if you select any month that has 31 days.)
	
	2. You change your mind and want to choose a different day, February 1.
	
	3. Even if you do not click the Change button to choose the 31st day of January,
	  when you choose February 1 (or any other day in any month with fewer than 31
	  days), and click Cancel to void your first choice, the computer's date now
	  registers one day behind the actual date, or January 29.
	
	You can check your computer date by moving your mouse pointer over the clock on
	the taskbar or by typing DATE at a command prompt.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
