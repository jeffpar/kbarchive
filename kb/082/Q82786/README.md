---
layout: page
title: "Q82786: System Hangs After Installing Windows or Windows Application"
permalink: kb/082/Q82786/
---

## Q82786: System Hangs After Installing Windows or Windows Application

	Article: Q82786
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If your system hangs while rebooting after installing Windows 3.1 or a Windows
	application, the MS-DOS path may be too long. Windows and Windows applications
	frequently add their directory to the path. Under some versions of MS-DOS, such
	as MS-DOS 4.01 or Compaq DOS 3.31, a PATH statement longer than 127 characters
	can cause the system to lock up during system startup.
	
	If this problem occurs, either start the computer by booting from a system disk
	in drive A, or press CTRL+C (or CTRL+BREAK) before the PATH statement is reached
	in the AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	If the path is very close to 127 characters, and the current Windows directory
	entry in the path is not preceded with the drive designation (for example,
	PATH=\DOS;\WINDOWS;...), Windows will add the C: to the Windows directory entry
	in the path.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
