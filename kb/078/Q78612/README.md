---
layout: page
title: "Q78612: The ANSI /S Switch"
permalink: kb/078/Q78612/
---

## Q78612: The ANSI /S Switch

	Article: Q78612
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some ROM BIOS video controllers do not fully support the PC standard
	specification for the number of lines in the display. When ANSI.SYS loads, it
	checks the PC standard location 40:84H to determine the number of rows active on
	the display. On displays that don't support this standard, garbage values may be
	at 40:84H. When this happens, ANSI.SYS will use this number to set the display,
	resulting in a distorted display.
	
	If you are experiencing a distorted display with ANSI.SYS (or other programs),
	load ANSI.SYS with the /S switch. This switch causes ANSI.SYS to ignore the
	value at 40:84H and use 25 for the number of rows.
	
	MORE INFORMATION
	================
	
	Loading ANSI.SYS with the /S switch can be used to remedy other programs that
	experience similar problems with the non-standard display.
	
	Additional query words: lockup 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
