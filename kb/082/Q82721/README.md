---
layout: page
title: "Q82721: Problems Running Windows 3.1 After Installing Desktop 1.0"
permalink: /kb/082/Q82721/
---

## Q82721: Problems Running Windows 3.1 After Installing Desktop 1.0

	Article: Q82721
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Norton Desktop for Windows (NDW) version 1.0 or 1.1, you may
	have trouble restarting Windows version 3.1. This is due to the
	DEVICE=VDMADX.386 that NDW automatically adds to the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	VDMADX.386 replaces the internal 386 enhance mode virtual device driver *VDMAD.
	If VDMADX.386 is not compatible with your system, Windows may exit to the MS-DOS
	command line when being started, or you may receive an error message indicating
	that the incorrect version of VDMAD is installed.
	
	If either of these problems occur, replace DEVICE=VDMADX.386 with DEVICE=*vdmad
	in the [386Enh] section of the SYSTEM.INI file. The Windows 3.1 version of
	*VDMAD should be compatible with NDW.
	
	
	Additional query words: 1.00 1.10 winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
