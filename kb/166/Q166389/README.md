---
layout: page
title: "Q166389: Err Msg: Cannot Find File or One of its Components"
permalink: /kb/166/Q166389/
---

## Q166389: Err Msg: Cannot Find File or One of its Components

	Article: Q166389
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbui osr2 win95
	Last Modified: 10-AUG-2001
	
	May also apply to Access2000 SR1 on Windows98 System.
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a file that is associated with a program, the program may
	start but you may receive the following error message
	
	  Cannot find file <file path> (or one of its components).
	  Check to ensure the path and filename are correct and that all required
	  libraries are available.
	
	where <file path> is the path to the file being loaded. When you click OK,
	the file is loaded correctly.
	
	CAUSE
	=====
	
	The Use DDE setting is enabled, or the information in that section is incorrect.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Double-click My Computer.
	
	2. On the View menu, click Options.
	
	3. Click the File Types tab. To modify an association, click the file type in
	  the Registered File Types box, and then click Edit.
	
	  To determine which file type is causing the problem, use the right mouse
	  button to click a file of the appropriate type in Windows Explorer, and then
	  click Properties. The line titled Type lists the entry in the Registered File
	  Types box that needs modification.
	
	4. Click the Use DDE check box to clear it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbui osr2 win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :2.0,4.0
	
	=============================================================================
	
