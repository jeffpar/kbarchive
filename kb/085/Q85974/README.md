---
layout: page
title: "Q85974: Err Msg: &quot;Incorrect MS-DOS Version&quot; During Setup (W/QEMM386)"
permalink: /kb/085/Q85974/
---

## Q85974: Err Msg: &quot;Incorrect MS-DOS Version&quot; During Setup (W/QEMM386)

	Article: Q85974
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
	
	The Setup program for Microsoft Windows version 3.1 may give the error message
	
	  Incorrect MS-DOS Version - You Must Have Version 3.1 or Later
	
	if the system is configured using Quarterdeck QEMM386 versions 5.x, 6.x, or 7.x
	to load MS-DOS resource files high (using a LOADHI FILES +20 statement in the
	AUTOEXEC.BAT file).
	
	
	MORE INFORMATION
	================
	
	This error is more likely to occur during a network installation because more
	file handles are being used by the system on bootup.
	
	To correct this problem, try increasing the FILES= statement in the CONFIG.SYS
	file. Quarterdeck recommends increasing the number of files on the FILES= line
	in increments of 5 until the error is corrected.
	
	QEMM386 is manufactured by Quarterdeck, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 Setup win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
