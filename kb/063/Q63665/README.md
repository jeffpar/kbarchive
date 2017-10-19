---
layout: page
title: "Q63665: Using HIMEM.SYS 2.60 with Dell 286-Based Machines"
permalink: /kb/063/Q63665/
---

## Q63665: Using HIMEM.SYS 2.60 with Dell 286-Based Machines

	Article: Q63665
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The command-line switch /M:7 must be used to use HIMEM.SYS version 2.60,
	released with Microsoft Windows version 3.0, with early Dell 286-based machines.
	Although this line indicates a Toshiba 1600, early Dell models cannot boot
	properly if HIMEM.SYS is installed without this switch. Typically, the system
	attempts to boot from the hard drive and stops responding (hangs) right after
	HIMEM.SYS is loaded.
	
	The line
	
	     DEVICE=C:\WINDOWS\HIMEM.SYS /M:7
	
	is the standard entry into CONFIG.SYS for early Dell 286-based models.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 KBHW 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
