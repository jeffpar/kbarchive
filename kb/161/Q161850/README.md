---
layout: page
title: "Q161850: Userinit.exe Entry Point Not Found"
permalink: kb/161/Q161850/
---

## Q161850: Userinit.exe Entry Point Not Found

	Article: Q161850
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT 4.0, the following message appears on the screen
	after you log on to Windows NT.
	
	  Userinit.exe - Entry Point Not Found
	
	The procedure entry point, WnetRestoreConnection, could not be located in the
	dynamic-link library Mpr.dll.
	
	After you click OK, the screen will only display the wallpaper.
	
	CAUSE
	=====
	
	This problem occurs if an older version of Userinit.exe, from Windows NT 3.51,
	is still located on the hard disk drive. The current version of the Userinit.exe
	file is located in the Winntroot\System32 directory.
	
	RESOLUTION
	==========
	
	The following steps will correct this problem.
	
	1. After you log on to Windows NT, press CTRL+ALT+DEL.
	
	2. Click the Task Manager.
	
	3. Under the Applications Tab, click New Task.
	
	4. Type Explorer.exe, and then click OK.
	
	5. After Explorer is running, do a search on the hard disk drive for all
	  instances of Userinit.exe.
	
	6. Delete all instances of Userinit.exe except for the file located in the
	  Winntroot\System32 directory.
	
	Additional query words: blank screen upgrade ntw nts
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	
