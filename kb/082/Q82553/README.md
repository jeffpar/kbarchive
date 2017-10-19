---
layout: page
title: "Q82553: Problems with SMARTDRV.EXE and Norton's Disk Protect"
permalink: /kb/082/Q82553/
---

## Q82553: Problems with SMARTDRV.EXE and Norton's Disk Protect

	Article: Q82553
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Do not use the Disk Protect feature in Norton Utilities version 6.0 Disk Monitor
	with SMARTDRV.EXE version 4.0, which ships with Microsoft Windows operating
	system version 3.1. If you try to write to the protected drive, you will get an
	error and your system will fail. If you want to write to and cache a protected
	drive, add that drive letter to the SMARTDRV.EXE command line in your
	AUTOEXEC.BAT file. For example, if drive D is a protected drive, you would add
	the following line to your AUTOEXEC.BAT file:
	
	  SMARTDRV.EXE D
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	
	Additional query words: 3.10 3.11 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
