---
layout: page
title: "Q137719: Program Manager Disappears After Running XTree Uninstall"
permalink: /kb/137/Q137719/
---

## Q137719: Program Manager Disappears After Running XTree Uninstall

	Article: Q137719
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you uninstall XTree Pro or XTree for Windows and restart Windows NT,
	Program Manager is missing. When you press CTRL+ESC, no task is listed in Task
	Manager.
	
	CAUSE
	=====
	
	This problem occurs due to XTree's Uninstall program not removing its entries in
	the registry properly.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	1. Press CTRL+ESC to display the Task List.
	
	2. Type REGEDT32.EXE for New Task and choose Run.
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	4. Select the following entry: Shell
	
	5. From the Edit menu, select String.
	
	6. Change the string to PROGMAN.EXE.
	
	7. Choose OK and quit Registry Editor.
	
	8. Shutdown and restart Windows NT.
	
	The XTree products discussed here are manufactured by the XTree Company, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
