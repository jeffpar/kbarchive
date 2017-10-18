---
layout: page
title: "Q83240: Professional Oracle Error: No Extended Memory Available"
permalink: kb/083/Q83240/
---

## Q83240: Professional Oracle Error: No Extended Memory Available

	Article: Q83240
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attempting to run Professional Oracle version 5.1 under Windows 3.0 and
	Microsoft Windows operating system version 3.1 produces the error:
	
	  No extended memory available
	
	This error occurs because Oracle uses the INT15 extended memory allocation rather
	than using the Microsoft eXtended Memory Specification (XMS). Oracle can be run
	from Windows 3.0 only in real mode, with HIMEM.SYS version 2.60 removed from the
	CONFIG.SYS file.
	
	Professional Oracle will not run under Windows 3.1.
	
	For Oracle to work properly under Windows 3.0 with the HIMEM.SYS file loaded,
	Oracle must be modified to use XMS memory allocation rather than using Int15.
	
	MORE INFORMATION
	================
	
	With MS-DOS 5.0 and Windows 3.1, HIMEM.SYS includes an /INT15 switch. This
	switch is not available with previous versions of MS-DOS or Windows. The device
	line in CONFIG.SYS should read as follows
	
	      Device=C:\DOS\HIMEM.SYS /INT15=XXX
	
	where XXX represents the amount of extended memory in kilobytes not to be
	converted to XMS.
	
	Valid ranges for XXX are 64 through 65535.
	
	Additional query words: 3.00 3.00a 3.0a DOS 5 Himem Switch
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
