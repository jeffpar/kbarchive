---
layout: page
title: "Q77271: Using Expanded Memory on PS/2 286s Windows"
permalink: /kb/077/Q77271/
---

## Q77271: Using Expanded Memory on PS/2 286s Windows

	Article: Q77271
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On IBM 286-based PS/2s, the Windows Setup program removes the device driver
	XMA2EMS.SYS line from the CONFIG.SYS file. Running Windows Setup and allowing
	Setup to modify the CONFIG.SYS file deletes this line. To provide expanded
	memory to MS-DOS applications outside of Windows, you must reinsert the
	XMA2EMS.SYS line using a text editor.
	
	NOTE: XMA2EMS.SYS is incompatible with Windows versions 3.0 and 3.1, and was
	removed during Setup. The only way to use expanded memory with Windows is to
	install an expanded memory board and load the provided drivers for that board
	into the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	To reinsert the expanded memory driver, do the following:
	
	1. Locate the file C:\CONFIG.OLD, which is an exact copy of your CONFIG.SYS file
	  before Windows changed it.
	
	2. Place into your current CONFIG.SYS a line similar to the following: (include
	  the correct drive and path syntax originally used)
	
	        DEVICE=C:\XMA2EMS.SYS
	
	Now non-Windows applications can access expanded memory outside of Windows.
	
	Additional query words: 3.00 3.00a 3.0 3.0a PS/2 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
