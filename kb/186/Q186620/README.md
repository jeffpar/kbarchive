---
layout: page
title: "Q186620: Terminal Server Commands: AREVFIX"
permalink: kb/186/Q186620/
---

## Q186620: Terminal Server Commands: AREVFIX

	Article: Q186620
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AREVFIX command is a terminate-and-stay-resident (TSR) program that prevents
	Advanced Revelation 3.1 for MS-DOS from using all the CPU in the system. The
	default MS-DOS keyboard polling detection does not prevent Advanced Revelation
	from trying to use all the available CPU in the system. Before running Advanced
	Revelation, run AREVFIX in the MS-DOS window in which you will run Advanced
	Revelation. An Advanced Revelation .pif file can be set up to point to a custom
	Autoexec.nt file that automatically runs AREVFIX before running Advanced
	Revelation. Use DOSKBD to modify MS-DOS keyboard polling detection.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
