---
layout: page
title: "Q72099: Greater than 16 MB RAM in System in Windows 3.0"
permalink: kb/072/Q72099/
---

## Q72099: Greater than 16 MB RAM in System in Windows 3.0

	Article: Q72099
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A computer system with more than 16 MB of RAM may not be able to run Microsoft
	Windows version 3.0 in standard mode. Real and enhanced modes run correctly.
	
	MORE INFORMATION
	================
	
	Windows version 3.0 can access up to 16 MB of memory. In standard mode,
	HIMEM.SYS attempts to block Windows from seeing memory above 16 MB, but may not
	be successful in doing so on some hardware. In this situation, removing the
	memory above 16 MB is the only solution. In enhanced mode, Windows version 3.0
	ignores all memory above 16 MB.
	
	If you encounter this problem, please contact Microsoft Product Support Services
	at (425) 637-7098. Please be prepared to provide:
	
	- the contents of your AUTOEXEC.BAT and CONFIG.SYS files
	
	- the name of your computer's manufacturer
	
	- the ROM BIOS manufacturer and version
	
	NOTE: This problem does not occur in later versions of Microsoft Windows.
	
	Additional query words: tshoot 3.00 win30 3.00A
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
