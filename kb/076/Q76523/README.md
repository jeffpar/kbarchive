---
layout: page
title: "Q76523: PC Shell Requires LOADFIX with MS-DOS in the HMA"
permalink: kb/076/Q76523/
---

## Q76523: PC Shell Requires LOADFIX with MS-DOS in the HMA

	Article: Q76523
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
	
	PC Tools PC Shell version 6.0 from Central Point Software may hang if MS-DOS is
	loaded into the high memory area (HMA). The conflict occurs when PC Shell
	verifies that all of DOS is loaded into conventional memory.
	
	MORE INFORMATION
	================
	
	The LOADFIX.COM file will resolve this conflict and should be used to launch PC
	Shell when DOS is loaded into the HMA. To execute PC Shell with LOADFIX, execute
	the following command from a DOS prompt:
	
	  " loadfix pcshell " (without the quotation marks)
	
	LOADFIX.COM is located in the DOS directory. It can also be found on the
	Supplemental working disk, which is created with a setup to floppies (SETUP
	/F).
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
