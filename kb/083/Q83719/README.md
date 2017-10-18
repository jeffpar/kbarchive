---
layout: page
title: "Q83719: No MS-DOS Prompt on Novell Network with Windows 3.1"
permalink: kb/083/Q83719/
---

## Q83719: No MS-DOS Prompt on Novell Network with Windows 3.1

	Article: Q83719
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are running Windows version 3.1 on a Novell network and cannot run MS-DOS
	Prompt, the Windows 3.1 VPICD driver may not be loaded. When you attempt to run
	MS-DOS Prompt, it either will not run or you will receive the following error
	message:
	
	  INVALID VxD DYNAMIC LINK CALL TO # 0003, SERVICE 0013
	
	To correct this problem, edit the [386 Enh] section of the SYSTEM.INI file.
	Change the line that reads DEVICE=VPICDA.386, to DEVICE=*VPICD. This loads the
	latest VPICD driver that ships with Windows 3.1.
	
	MORE INFORMATION
	================
	
	VPICDA.386 was written by Novell to work with Microsoft Windows 3.0. Do not use
	this driver with Windows 3.1. Instead, use the VPICD device driver that is built
	into Windows 3.1.
	
	If you receive the following error message as well, you should remark out
	SETVER.EXE from the CONFIG.SYS file:
	
	  Unsupported MS DOS Version
	
	Note: Before remarking out SETVER.EXE, make sure you are not loading device
	drivers for your hard disk that require SETVER.EXE.
	
	Additional query words: 3.10 novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
