---
layout: page
title: "Q85242: Using CalComp 2300 Drawing Boards with Windows 3.1"
permalink: /kb/085/Q85242/
---

## Q85242: Using CalComp 2300 Drawing Boards with Windows 3.1

	Article: Q85242
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to CalComp Technical Support, the CalComp 2300 series Drawing Boards
	are compatible with Microsoft Windows version 3.1. A manual installation
	procedure is required to properly configure the drawing board with Windows 3.1.
	
	MORE INFORMATION
	================
	
	To use the CalComp 2300 Series Drawing Boards with Windows 3.1, do the
	following:
	
	NOTE: The following procedure was supplied by CalComp technical support and has
	not yet been fully researched or tested by Microsoft.
	
	1. Determine the communications port to which the drawing board is connected.
	
	2. Copy WIN-DRVX.DRV from the V1.1 Software Driver Set disks into the SYSTEM
	  subdirectory under Windows, where x is 1 or 2.
	
	  NOTE: WIN-DRVX.DRV is the communications driver that should be copied from the
	  disks, depending on whether the drawing board is connected to COM1 or COM2.
	  All subsequent references to WIN-DRVX.DRV should use the appropriate driver
	  name.
	
	3. Edit the [boot] section of the SYSTEM.INI file as follows:
	
	  mouse.drv=win-drvx.drv
	
	4. Edit the [boot.description] section of the SYSTEM.INI as follows (case and
	  spacing sensitive):
	
	  mouse.drv=CALMOUSE driver for Windows (R) 3.0 Feb.4 1991 COMx
	
	  NOTE: COMx (where x is 1 or 2) refers to the COM port to which the Drawing
	  Board is connected.
	
	For further information or technical support, contact CalComp technical support.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
