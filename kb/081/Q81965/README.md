---
layout: page
title: "Q81965: Loading SMARTDrive Low May Improve Speed w/ Double Buffering"
permalink: /kb/081/Q81965/
---

## Q81965: Loading SMARTDrive Low May Improve Speed w/ Double Buffering

	Article: Q81965
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If double buffering is enabled for SMARTDrive version 4.x or 5.x, a significant
	performance gain can be achieved by loading SMARTDrive low.
	
	MORE INFORMATION
	================
	
	If double buffering is required, it must be loaded from the CONFIG.SYS file as
	in the following example:
	
	      DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	NOTE: This only loads the double buffer driver. It does not load the disk cache
	portion of SMARTDrive, and cannot be loaded high.
	
	To force SMARTDrive to load into conventional memory, use the /L parameter in the
	AUTOEXEC.BAT file, as in the example below.
	
	       SMARTDRV C: D: /L
	
	When double buffering is enabled for SMARTDrive, system performance decreases.
	This is expected, due to the nature of adding an additional buffer to handle all
	disk reads and writes through conventional memory.
	
	Loading SMARTDrive into low memory is quicker than loading it into an upper
	memory block (UMB) because this eliminates the additional step of buffering from
	the UMB to conventional memory.
	
	Additional query words: 3.10 SMARTDRV.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
