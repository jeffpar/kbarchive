---
layout: page
title: "Q145832: Remote Debugging AT&amp;T System 3000 Multiprocessor Computers"
permalink: /kb/145/Q145832/
---

## Q145832: Remote Debugging AT&amp;T System 3000 Multiprocessor Computers

	Article: Q145832
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you initiate remote debugging on an AT&T System 3000 multiprocessor
	computer running Windows NT 3.51 (AT&T version), the computer reboots after
	2 to 3 minutes of processor inactivity.
	
	RESOLUTION
	==========
	
	To disable the rebooting feature, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\HWMon
	
	2. From the Edit menu, select Add Value.
	
	3. Enter the following:
	
	  Value Name: WatchDogTimerPeriod
	  Data Type: REG_DWORD
	  String: 0
	
	4. Click OK and quit the Registry Editor.
	
	5. Shut down and restart Windows NT (AT&T version).
	
	The AT&T products discussed here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: blue stop ncr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
