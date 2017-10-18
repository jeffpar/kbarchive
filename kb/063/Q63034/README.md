---
layout: page
title: "Q63034: Windows 3.0 and the NEC Multispeed 80286"
permalink: kb/063/Q63034/
---

## Q63034: Windows 3.0 and the NEC Multispeed 80286

	Article: Q63034
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NEC Multispeed is an 80286 based laptop PC with an LCD screen and CGA
	adapter. When installing Microsoft Windows version 3.0, the CGA option should be
	used. The screen display quality is poor unless the command
	
	  MODE CO80
	
	is issued prior to starting Windows. This command can be included in AUTOEXEC.BAT
	or a batch file to start Windows.
	
	The program MODE.COM usually resides in the directory where the MS-DOS files are
	stored. Executing MODE CO80 sets the graphics mode to color and 80 columns.
	
	MORE INFORMATION
	================
	
	The NEC product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.0 3.0a lap top
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
