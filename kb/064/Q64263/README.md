---
layout: page
title: "Q64263: Toshiba T1200XE Needs /M:toshiba for Standard-Mode Windows"
permalink: /kb/064/Q64263/
---

## Q64263: Toshiba T1200XE Needs /M:toshiba for Standard-Mode Windows

	Article: Q64263
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Toshiba T1200XE cannot run standard-mode Microsoft Windows version 3.0
	without the HIMEM.SYS parameter /M:toshiba. This line is inserted if the Setup
	program's choice of "MS-DOS or PC-DOS System" is overridden and Toshiba T1600 is
	chosen instead. This is not the case for the Toshiba T1200 (plain), which runs
	Windows correctly if it is set up for "MS-DOS or PC-DOS System."
	
	NOTE: Running the maintenance Setup from the Windows directory or from the
	Windows Setup icon does not add the /M:toshiba line to the CONFIG.SYS. You must
	go back through Setup or add this parameter manually.
	
	MORE INFORMATION
	================
	
	The Toshiba T1200XE was released shortly before Windows 3.0. As a result, it was
	not possible to test on this machine and include the Toshiba on the Hardware
	Compatibility List.
	
	It has been reported that if this machine is set up for CGA, the screen that
	shows the hardware detected by Setup doesn't show any detected display and the
	last line, which should be highlighted, is not. If you use the arrow keys to
	move from line to line, the selected line can't be seen. You can work around
	this by running SETUP /I to disable auto-detection of the hardware and choosing
	COMPAQ PORTABLE PLASMA display and Toshiba 1600 as mentioned above. This allows
	the Setup program to run correctly, and Windows 3.0 works properly after Setup.
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.00 3.00a 3.0 3.0a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
