---
layout: page
title: "Q160656: Foreground Application Responsiveness Change in WinNT 4.0"
permalink: /kb/160/Q160656/
---

## Q160656: Foreground Application Responsiveness Change in WinNT 4.0

	Article: Q160656
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Performance Monitor in Windows NT version 4.0 does not display the same results
	as Performance Monitor in Windows version 3.51 when you change the Application
	Performance Boost setting.
	
	MORE INFORMATION
	================
	
	Windows NT 3.51 and earlier boosts the foreground application responsiveness by
	boosting the foreground thread priority base. Windows NT 4.0 boosts the
	foreground responsiveness by assigning a longer timeslice (quantum) to the
	foreground thread than what background threads receive, not by assigning a
	higher thread priority.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
