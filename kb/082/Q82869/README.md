---
layout: page
title: "Q82869: GP Fault in HPPCL5A.DRV Using ATM and Carbon Copy for Windows"
permalink: kb/082/Q82869/
---

## Q82869: GP Fault in HPPCL5A.DRV Using ATM and Carbon Copy for Windows

	Article: Q82869
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Microsoft Windows version 3.1, a general protection (GP) fault can occur
	when you print with the HPPCL5A printer driver and use Adobe Type Manager (ATM)
	and Carbon Copy for Windows simultaneously.
	
	
	CAUSE
	=====
	
	Carbon Copy for Windows alters the SYSTEM.INI file, inserting its own display
	driver as follows:
	
	  [boot]
	  display.drv=CCVGA.DRV
	
	WORKAROUND
	==========
	
	To work around the problem, do one of the following:
	
	- Remove the CCVGA.DRV driver and replace it with a Windows 3.1 driver.
	
	- Print using a driver other than HPPCL5A.DRV.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: gpf 3.1 3.10 HP Hewlett Packard LaserJet macppt winppt 3.11 power point windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
