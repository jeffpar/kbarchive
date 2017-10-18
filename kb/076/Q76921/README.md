---
layout: page
title: "Q76921: Executing TSRs Through MS-DOS Shell with Task Swapper Active"
permalink: kb/076/Q76921/
---

## Q76921: Executing TSRs Through MS-DOS Shell with Task Swapper Active

	Article: Q76921
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you return to the MS-DOS Shell from a program with Task Swapper active, the
	following message may appear:
	
	  MS-DOS Task Switcher's Pop-up Program Support Your pop-up program has been
	  loaded and you may activate it as you would normally. When you have finished
	  using this pop-up program, exit it and press Ctrl+C to return to DOS.
	
	This message indicates that a terminate-and-stay-resident (TSR) or memory
	resident program/driver was executed and is attempting to remain in memory when
	Shell is being swapped from disk back into memory.
	
	MORE INFORMATION
	================
	
	Task Swapper, when active, must have control of all programs that are being
	loaded into memory when Shell is used. The DOSSWAP program will not allow
	programs to stay resident and asks you to remove them to allow it to manage
	memory properly.
	
	TSRs can be executed before running Shell because Task Swapper does not monitor
	memory usage at the time of their execution.
	
	Pressing ALT+ESC to swap a memory resident program from memory instead of
	terminating it will cause Task Swapper to function incorrectly when other
	programs in the Task List are being swapped from memory.
	
	Note: Some executable files may have memory resident portions that may produce
	the above error message.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
