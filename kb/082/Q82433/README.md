---
layout: page
title: "Q82433: Meaning of the [compatibility] Section in SETUP.INF"
permalink: kb/082/Q82433/
---

## Q82433: Meaning of the [compatibility] Section in SETUP.INF

	Article: Q82433
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows has a SETUP.INF file that it uses as a script during the setup
	procedure. There is a [compatibility] section in the SETUP.INF file that the
	Setup program compares with the CONFIG.SYS file to see if any entries in the
	CONFIG.SYS file contain a driver that is on the list in the [compatibility]
	section. If so, Setup deletes the entry in the CONFIG.SYS file without warning
	the user. Setup does not attempt to unload the driver from memory. Consequently,
	you should restart your computer after running Setup.
	
	MORE INFORMATION
	================
	
	The [compatibility] list is similar to the following:
	
	  icache.sys
	  ibmcache.sys
	  cache.sys
	  cache.exe
	  mcache.sys
	  fast512.sys
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
