---
layout: page
title: "Q103495: Modifying USERDEF Hive So That New Users Get Defined Settings"
permalink: kb/103/Q103495/
---

## Q103495: Modifying USERDEF Hive So That New Users Get Defined Settings

	Article: Q103495
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Windows NT, you can modify the USERDEF hive so that all newly created
	users inherit certain settings. Anything that can be defined or modified in
	HKEY_CURRENT_USER can also be set in the USERDEF hive (for example, colors,
	screen savers, program groups, sounds, and cursors).
	
	MORE INFORMATION
	================
	
	To view or modify the USERDEF hive, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor by choosing Run from the File menu of Program Manager,
	  typing "regedt32" (without the quotation marks), and pressing ENTER.
	
	2. Select the "HKEY_USERS on Local Machine" window.
	
	3. From the Registry menu, choose Load Hive.
	
	4. From the C:\WINNT\SYSTEM32\CONFIG (or equivalent) directory, select the
	  USERDEF file.
	
	5. In the Key Name field, type "USERDEF" (without the quotation marks).
	
	6. Modify the USERDEF subkeys as desired.
	
	7. From the Registry menu, choose Unload Hive, and choose the Yes button.
	
	8. Quit Registry Editor.
	
	Now when you create a new user from User Manager, the new user's hive will
	contain the modified information.
	
	Additional query words: default groups profile
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
