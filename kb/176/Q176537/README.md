---
layout: page
title: "Q176537: How to Run the Sounds Tool by Itself"
permalink: kb/176/Q176537/
---

## Q176537: How to Run the Sounds Tool by Itself

	Article: Q176537
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You want to run the Sounds tool in Control Panel; however, you cannot find the
	associated .cpl file.
	
	MORE INFORMATION
	================
	
	The Sounds tool does not have its own .CPL file; it uses the file Mmsys.cpl.
	
	To create a shortcut to the Sounds tool, add the word "sounds" to the end of the
	Mmsys.cpl shortcut. For example, the command line should read:
	
	  Control mmsys.cpl sounds
	
	Additional query words: policies zak zero admin kit administration lock down restrict
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
