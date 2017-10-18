---
layout: page
title: "Q74211: Using Compaq CACHE.EXE with MS-DOS 5.0"
permalink: kb/074/Q74211/
---

## Q74211: Using Compaq CACHE.EXE with MS-DOS 5.0

	Article: Q74211
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	COMPAQ DOS 4.01 contains a file called CACHE.EXE, which is similar to MS-DOS 5.0
	SMARTDRV.SYS. It is incompatible with MS-DOS 5.0 unless you use the SETVER
	command to set the version to 4.01 or earlier.
	
	MORE INFORMATION
	================
	
	To use CACHE.EXE, add the following statements to the CONFIG.SYS file:
	
	     device=c:\dos\setver.exe
	     device=c:\cache.exe
	
	To set the version, do the following:
	
	1. Type "SETVER CACHE.EXE 4.01" (without the quotation marks) and press ENTER.
	
	2. Reboot your computer.
	
	CACHE.EXE should be enabled.
	
	
	Reference(s):
	
	"Microsoft MS-DOS User's Guide and Reference" version 5.0, pages 561-564
	
	Compaq technical support: (800) 345-1518
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
