---
layout: page
title: "Q82375: SMARTDrive Settings and Windows Running in Standard Mode"
permalink: kb/082/Q82375/
---

## Q82375: SMARTDrive Settings and Windows Running in Standard Mode

	Article: Q82375
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the default parameters for SMARTDrive, Microsoft Windows does not
	automatically start in enhanced mode on 386/486s with only 2 MB of memory. You
	must either remove SMARTDrive (SMARTDRV.EXE) from the AUTOEXEC.BAT file or
	reduce the cache size.
	
	MORE INFORMATION
	================
	
	SMARTDrive defaults to a 256K cache size. This reduces the amount of extended
	memory below what is required to automatically start Windows in enhanced mode.
	
	NOTE: You can try to force Windows into enhanced mode even though memory is low
	with this command:
	
	  WIN /3
	
	If you need more memory for Windows 3.1, change the settings of SMARTDrive in the
	AUTOEXEC.BAT file. The actual values needed vary depending on the device drivers
	and TSRs being loaded from the CONFIG.SYS and AUTOEXEC.BAT files. A good
	starting value to try is:
	
	  Smartdrv.exe 256 128
	
	The first value specifies the size of the cache when in MS-DOS, and the second
	value specifies the size of the cache while Windows is running.
	
	If this does not allow Windows to run in enhanced mode by default, lower the
	second value until Windows starts in enhanced mode by default.
	
	Before experimenting with SMARTDrive values, Microsoft recommends that you remark
	out SMARTDrive (use the REM command), and ensure that Windows runs in enhanced
	mode by default without SMARTDrive installed. To make these changes take effect,
	reboot your computer.
	
	Additional query words: 3.10 smartdrv smart drive 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
