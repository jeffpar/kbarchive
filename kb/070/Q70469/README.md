---
layout: page
title: "Q70469: Incompatible Windows 3.0 ATI Video Drivers"
permalink: /kb/070/Q70469/
---

## Q70469: Incompatible Windows 3.0 ATI Video Drivers

	Article: Q70469
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ATI Technologies has reported that the following two ATI video drivers do not
	work properly with Microsoft Windows version 3.0 and should be removed from the
	CONFIG.SYS file:
	
	- ATIVIDEO.SYS
	
	- ROMBIOS.SYS
	
	MORE INFORMATION
	================
	
	ATI uses the drivers ATIVIDEO.SYS and ROMBIOS.SYS to shadow the video BIOS from
	read only memory (ROM) into random access memory (RAM)
	
	Video or ROM shadowing is when the instructions contained on the ROM chip are
	copied to the RAM chip at bootup. Accessing RAM is faster than accessing ROM,
	and shadowing the video BIOS into RAM increases the speed of the screen writes.
	
	ATI recommends taking these drivers out of CONFIG.SYS for other reasons, also. If
	you have a 286 or 386 system, your machine may have the capability to provide
	these features in the system setup of your machine. This procedure does not use
	valuable conventional memory for these settings such as loading the drivers in
	the CONFIG.SYS does.
	
	For more information, contact ATI technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these product's performance
	or reliability.
	
	Additional query words: 3rdparty WIN30 3.0 3.00a 3.0a graphics display card adapter monitor screen windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
