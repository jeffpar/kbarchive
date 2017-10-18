---
layout: page
title: "Q89108: Using Grapevine LAN with Windows 3.0 and 3.1"
permalink: kb/089/Q89108/
---

## Q89108: Using Grapevine LAN with Windows 3.0 and 3.1

	Article: Q89108
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses running Grapevine LAN with Microsoft Windows. The
	following topics are included in this article:
	
	- SYSTEM.INI settings
	
	- Disable SMARTDrive version 4.0's write cache
	
	- Beeping network software
	
	MORE INFORMATION
	================
	
	SYSTEM.INI Settings
	-------------------
	
	The Grapevine LAN versions 3.1b and 4.1 may stop or hang when running Windows in
	386 enhanced mode if the following two entries are not in the SYSTEM.INI's
	[386enh] section
	
	     EMMEXCLUDE=xxxx-xxxx
	
	where xxxx-xxxx is the UMA range the network card is using. If you are using a
	UMA/UMB provider such as EMM386.EXE, then exclude this range in its command
	line.
	
	     ALLVMSEXCLUSIVE=YES
	
	When this is added to the SYSTEM.INI, it precludes running MS-DOS-based
	applications in the background or in a window.
	
	Disable SMARTDrive Version 4.0's Write Cache
	--------------------------------------------
	
	When running Grapevine LAN version 1.x, then disable SMARTDrive's Write cache by
	supplying drive letters at the end of the command line in the AUTOEXEC.BAT
	file:
	
	     C:\WINDOWS\SMARTDRV.SYS C D
	
	This disables Write cache on hard drive C and D. As a workaround, you could also
	use the SMARTDrive that came with Windows 3.0 or MS-DOS 5.0
	
	Beeping Network Software
	------------------------
	
	When running version 1.4g of Grapevine LAN, you may hear tones when accessing
	some options inside of Windows, such as the Virtual Memory button.
	
	Grapevine LAN sends a series of descending tones as a warning that a drive
	specified in the Make Directories Available To Network section of the Define
	Drives menu is offline. This warning is not received when running in the menu
	mode. For more information, contact Grapevine technical support.
	
	The Grapevine product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: windows 3.10 3.11 3.00 3.00a hang lockup up lock freeze crash umb 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
