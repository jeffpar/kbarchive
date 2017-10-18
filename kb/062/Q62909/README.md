---
layout: page
title: "Q62909: How to Disable QEMM.SYS Version 5.0 in Windows"
permalink: kb/062/Q62909/
---

## Q62909: How to Disable QEMM.SYS Version 5.0 in Windows

	Article: Q62909
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	There are three methods to disable QEMM.SYS version 5.0 from loading:
	
	1. Boot clean or from an MS-DOS disk that does not contain QEMM.SYS.
	
	2. Manually remove the device line from the CONFIG.SYS file
	  (device=<path>QEMM.SYS [parameters]). This can be done by without
	  erasing the user's configuration of QEMM.SYS by placing REM before the
	  device= line (this will cause MS-DOS versions earlier than 4.0 to give an
	
	  invalid line in CONFIG.SYS error
	
	  which will cause no harm to your system).
	
	3. Reboot or reset the computer.
	
	  a. After the initial computer beep, press the ALT key.
	
	  b. When the message "QEMM; Press any key to continue. ESC to abort" appears,
	     press ESC to disable QEMM.SYS.
	
	The third method also disables any LoadHi commands in the CONFIG.SYS or
	AUTOEXEC.BAT file.
	
	Additional query words: 3.0 3.0a 3.00 3.00a 3rdparty WIN286 WIN386
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	
