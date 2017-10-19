---
layout: page
title: "Q85181: Central Point Backup Version 7.2 May Remap Keys in Windows 3.1"
permalink: /kb/085/Q85181/
---

## Q85181: Central Point Backup Version 7.2 May Remap Keys in Windows 3.1

	Article: Q85181
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run an MS-DOS-based application (including MS-DOS Prompt) from Windows
	version 3.1 in 386 enhanced mode, keyboard input may be remapped to incorrect
	characters if the following line is in the [386enh] section of the SYSTEM.INI
	file:
	
	     Device=CPBVXD.386
	
	For the keyboard to work correctly, either remove this line or place a ";" in
	front of it.
	
	MORE INFORMATION
	================
	
	Central Point Backup for Windows version 7.2 adds the virtual device driver
	CPBVXD.386 to the [386enh] section of the SYSTEM.INI file. This driver does not
	replace any device drivers internal to Windows, and can be removed without
	affecting the functionality of Windows.
	
	To correct the keyboard mapping problem, change the following line
	
	     Device=CPBVXD.386
	
	to:
	
	     ;Device=CPBVXD.386
	
	This disables the driver, and Central Point Backup, from working in 386 enhanced
	mode.
	
	For more information contact, Central Point technical support.
	
	The Central Point Backup product included here is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
