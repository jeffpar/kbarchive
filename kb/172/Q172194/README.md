---
layout: page
title: "Q172194: How to Determine If a Program Is 16-Bit or 32-Bit"
permalink: kb/172/Q172194/
---

## Q172194: How to Determine If a Program Is 16-Bit or 32-Bit

	Article: Q172194
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS NT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine whether a program is a 16-bit or 32-bit
	program.
	
	MORE INFORMATION
	================
	
	1. Press CTRL+ALT+DELETE to open the Windows NT Security dialog box.
	
	2. Click Task Manager.
	
	3. Click the Processes tab.
	
	4. On the Options menu, make sure that there is a check mark next to Show 16-Bit
	  Tasks. If there is no check mark, click Show 16-Bit Tasks.
	
	5. All 16-bit tasks are indented under Ntvdm.exe (along with Wowexec.exe). All
	  other tasks or processes are 32-bit.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WINDOWS NT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
