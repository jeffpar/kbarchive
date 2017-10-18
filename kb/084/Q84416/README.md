---
layout: page
title: "Q84416: GP Fault in Ventura 4.0 After Installing Windows 3.1"
permalink: kb/084/Q84416/
---

## Q84416: GP Fault in Ventura 4.0 After Installing Windows 3.1

	Article: Q84416
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Windows version 3.1, you may receive the following
	error message:
	
	  General Protection Fault Error in module VPWINLIB.DLL
	
	This error occurs in version 4.0 of Ventura for Windows and can be corrected by
	freeing up more memory for Ventura's use.
	
	MORE INFORMATION
	================
	
	Ventura 4.0 for Windows requires at least 3 MB of free RAM (conventional plus
	extended memory) to run with standard mode Windows. After installing Windows
	3.1, less memory is available to Ventura for operation.
	
	Ventura technical support suggests that you not load unnecessary TSRs and device
	drivers that may take up conventional and extended memory (if loaded into the
	UMA, upper memory area).
	
	Also, set the BUFFERS statement in the CONFIG.SYS file to at least 15. The TEMP
	variable should point to its own TEMP directory contained in the root directory.
	(There may be problems with Ventura's operation when the TEMP variable is set to
	the root directory, the MS-DOS directory, or a directory contained on a RAM
	drive.)
	
	For additional information, contact Ventura Technical Support.
	
	The Ventura products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: gpf 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
