---
layout: page
title: "Q95494: DoubleSpace Err Msg: 'Not Enough Conventional Memory...'"
permalink: /kb/095/Q95494/
---

## Q95494: DoubleSpace Err Msg: 'Not Enough Conventional Memory...'

	Article: Q95494
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you start your computer using the interactive startup option in order to free
	enough memory to run the DoubleSpace Stacker conversion option, you may receive
	the following error message after DoubleSpace restarts your computer:
	
	  Not enough conventional memory
	
	MORE INFORMATION
	================
	
	When you start your computer and press the F8, F5, or SHIFT key to free enough
	conventional memory to run the DoubleSpace Stacker converter, you must also use
	the interactive startup option when DoubleSpace restarts your computer. If you
	do not use this option, you will not have enough memory to complete the
	conversion.
	
	If you use the F5 key to bypass the CONFIG.SYS and AUTOEXEC.BAT files, the only
	directory in the PATH environment variable is C:\DOS; therefore, DoubleSpace
	cannot start Stacker.
	
	WORKAROUND
	==========
	
	To work around this situation, either use the F8 key to bypass some of your
	device drives before and during the Stacker conversion process, or remark out
	(REM) some of the device drivers and terminate-and-stay-resident (TSR) programs
	in your CONFIG.SYS file.
	
	Additional query words: 6.00 6.20 reboot boot dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
