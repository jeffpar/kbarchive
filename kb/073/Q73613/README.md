---
layout: page
title: "Q73613: Texas Instruments Travel Mate 2000 and Windows 3.0"
permalink: /kb/073/Q73613/
---

## Q73613: Texas Instruments Travel Mate 2000 and Windows 3.0

	Article: Q73613
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Texas Instruments Travel Mate 2000 is a 286 laptop with VGA display, a 20 MB
	hard drive, and 1 MB of memory. This computer does NOT run in standard mode
	unless the hardware setup is changed as follows:
	
	1. Reboot.
	
	2. Press CTRL+ALT+SETUP (do this twice for hardware setup).
	
	3. Set the boundary address to 14000h (this frees extended memory for Windows to
	  run in standard mode).
	
	4. Remove the cache from the AUTOEXEC.BAT file because it conflicts with
	  SMARTDRV.SYS.
	
	5. Remove EMM4J.SYS because it conflicts with HIMEM.SYS.
	
	MORE INFORMATION
	================
	
	If you are still unable to get into standard mode, check for and remove the
	following terminate-and-stay-resident programs (TSRs) from the AUTOEXEC.BAT
	file:
	
	- SHADOW.COM
	
	- RPAL.COM
	
	- BW.COM (the battery watch)
	
	For more information about the Texas Instruments Travel Mate 2000, contact Texas
	Instruments technical support.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
