---
layout: page
title: "Q99498: Quantum Hard Card EZ Driver Hangs MemMaker"
permalink: /kb/099/Q99498/
---

## Q99498: Quantum Hard Card EZ Driver Hangs MemMaker

	Article: Q99498
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Quantum Technical Support has confirmed that your computer may stop responding
	(hang) if you run MemMaker to optimize your computer's memory while a Quantum
	Hard Card EZ driver is installed in your CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	The Quantum Hard Card EZ models 42, 85, 127, and 240 use the ATDOSHC.SYS device
	driver in the CONFIG.SYS file. If you run MemMaker with this device driver in
	the CONFIG.SYS file, your computer may stop responding and display a blinking
	cursor when MemMaker restarts your machine the first time. To correct this
	problem, use a text editor to open the CONFIG.SYS file and temporarily remark
	out the ATDOSHC.SYS device line as follows:
	
	    REM DEVICE=ATDOSHC.SYS
	
	Save this change, quit the editor, restart your computer, and then run
	MEMMAKER.EXE again. After MemMaker has optimized your computer's memory, you can
	remove the REM command from the ATDOSHC.SYS line in the CONFIG.SYS file.
	
	The products included here are manufactured by Quantum, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	For more information, call Quantum Technical Support.
	
	Additional query words: 6.22 6.00 hard-card hardcard plus 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
