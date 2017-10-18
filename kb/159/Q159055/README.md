---
layout: page
title: "Q159055: NTBACKUP Always Reports Time as PM in Backup.log"
permalink: kb/159/Q159055/
---

## Q159055: NTBACKUP Always Reports Time as PM in Backup.log

	Article: Q159055
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use NTBACKUP in Windows NT Server version 4.0 and Windows NT
	Workstation version 4.0, and you set the clock to use twenty-four hour time,
	there is an incorrect PM setting appended to the operation in the Backup.log
	file. Twenty-four hour time does not use or need AM or PM settings and should
	not be applied to any events that use this measurement of time.
	
	RESOLUTION
	==========
	
	This problem has been fixed in Service Pack 2 for Windows NT Server and
	Workstation version 4.0
	
	Additional query words: Time 24 Backup Winnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
