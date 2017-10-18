---
layout: page
title: "Q146110: Unable to Remove Network Connection Created by AT Scheduler"
permalink: kb/146/Q146110/
---

## Q146110: Unable to Remove Network Connection Created by AT Scheduler

	Article: Q146110
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to remove a network connection in File Manager, the following
	error message appears:
	
	  There are no network connections to disconnect.
	
	If you type the command "NET USE <drive>: /D" (without quotes) at the MS-
	DOS Command Prompt, the following error message appears:
	
	  The network connection could not be found.
	
	CAUSE
	=====
	
	This problem occurs if you connect to a network share on the same computer using
	AT.EXE and the Windows NT Scheduler service. For example, if you type the
	following at MyComputer and attempt to remove the share (MyShare) in File
	Manager or the MS-DOS Command Prompt, the above error messages appear:
	
	  AT 12:00 /interactive "net use d: \\MyComputer\MyShare"
	
	
	RESOLUTION
	==========
	
	To correct this problem, type the following at the MS-DOS Command Prompt (using
	the names in the example above):
	
	AT 12:15 /interactive "net use d: \\MyComputer\MyShare /d"
	
	NOTE: The AT scheduler keeps its own network connection list.
	
	In some cases, you must stop and restart the Workstation service to clear the
	ghosted connections.
	For additional related articles please see the article below:
	
	  
	
	  Q130668 Mapping Netware Drives with the AT Scheduler
	
	Additional query words: prodnt 3.50 3.51 remote disk icon schedule
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
