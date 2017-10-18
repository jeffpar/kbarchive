---
layout: page
title: "Q81796: DOSPAC.SYS Is Not Compatible with SMARTDRV.EXE Version 4.0"
permalink: kb/081/Q81796/
---

## Q81796: DOSPAC.SYS Is Not Compatible with SMARTDRV.EXE Version 4.0

	Article: Q81796
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
	
	Some Tandon removable disk drives require the device driver DOSPAC.SYS. This
	device driver is not compatible with SMARTDRV.EXE version 4.0, which shipped
	with Microsoft Windows version 3.1.
	
	MORE INFORMATION
	================
	
	To use SMARTDrive on a machine with the DOSPAC.SYS device driver loaded, disable
	caching for the removable drive. For example, if drive D is the removable disk
	drive, the following line could be used to enable read caching for drive C and
	disable all caching of drive D:
	
	  SMARTDRV C D-
	
	For additional information on DOSPAC.SYS, please contact Tandon Corporation.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3rdParty win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
