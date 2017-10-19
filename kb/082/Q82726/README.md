---
layout: page
title: "Q82726: NUCONFIG.EXE Is Not Compatible with Windows 3.1"
permalink: /kb/082/Q82726/
---

## Q82726: NUCONFIG.EXE Is Not Compatible with Windows 3.1

	Article: Q82726
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
	
	The program NUCONFIG.EXE that comes with Norton Utilities 6.x doesn't run
	correctly under the Microsoft Windows operating system version 3.1.
	
	MORE INFORMATION
	================
	
	This program configures NCACHE.EXE, which shouldn't be used with Windows 3.1.
	SMARTDrive or some other Windows 3.1 compatible disk cache should be used when
	running Windows 3.1.
	
	NUCONFIG.EXE appears to hang when run under Windows 3.1. In most cases, if you
	wait long enough, the program will complete and release the system.
	
	This application may also cause a System Integrity Violation error under Windows
	3.1.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
