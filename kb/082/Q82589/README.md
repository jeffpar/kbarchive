---
layout: page
title: "Q82589: Becker Tools Running with MS-DOS 5.0 and Windows 3.1"
permalink: kb/082/Q82589/
---

## Q82589: Becker Tools Running with MS-DOS 5.0 and Windows 3.1

	Article: Q82589
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the following issues:
	
	- General Protection (GP) Fault
	
	- Becker Tools Delete Option Does Not Work
	
	MORE INFORMATION
	================
	
	General Protection (GP) Fault
	-----------------------------
	
	If you run Becker Tools version 2.0 with Windows 3.1 in 386 enhanced mode and
	Microsoft MS-DOS 5.0, Becker Tools cannot perform the following commands: Make
	System, Display FAT, Disk Edit, and Rename Volume. The following error message
	is displayed when you quit the program:
	
	  Sector Not Found
	  GP fault in Module KRNL386.EXE at 0001:4f50
	
	Becker Tools is MS-DOS-version dependent. Becker Tools version 2.0 does not work
	correctly with MS-DOS version 5.0.
	
	
	Becker Tools Delete Option Does Not Work
	----------------------------------------
	
	With Windows 3.1, the Becker Tools Delete option does not work on a file if the
	Undelete option is set to On. To work around this problem, remove "PCTOOLS" and
	"NORTONS DATAMON" from the AUTOEXEC.BAT file.
	
	This problem is corrected in Becker Tools version 3.0.
	
	Becker Tools is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	For more information, contact Becker Tools Technical Support.
	
	Additional query words: 3.10 3.11 winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
