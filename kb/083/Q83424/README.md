---
layout: page
title: "Q83424: SETUP.TXT Contains Smartdrive and Stacker Error"
permalink: kb/083/Q83424/
---

## Q83424: SETUP.TXT Contains Smartdrive and Stacker Error

	Article: Q83424
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is an error in the SETUP.TXT file that is copied into the Windows
	directory during installation of Windows 3.1. Under the "Using Stacker" heading,
	there is a section that discusses using the SmartDrive disk cache program on an
	uncompressed drive. The error reads as follows:
	
	  For example, if the Stacker swap utility swaps drives C and D so that C is
	  compressed and D is uncompressed, you would include the following line in
	  your CONFIG.SYS file:
	
	  DEVICE=\WINDOWS\SMARTDRV.EXE C- D+
	
	MORE INFORMATION
	================
	
	This line should be placed in the AUTOEXEC.BAT file (not in the CONFIG.SYS
	file), as follows:
	
	  <drive>:\WINDOWS\SMARTDRV.EXE C- D+
	
	Windows 3.1 loads the SMARTDRV.EXE cache device driver in the AUTOEXEC.BAT file.
	Only the double buffer device driver (if necessary) is loaded in the CONFIG.SYS
	file.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
