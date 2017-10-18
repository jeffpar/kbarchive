---
layout: page
title: "Q62331: FIX: Attempting to Expand a Help Dialog Box in PWB 1.0 May Hang"
permalink: kb/062/Q62331/
---

## Q62331: FIX: Attempting to Expand a Help Dialog Box in PWB 1.0 May Hang

	Article: Q62331
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0; OS/2:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.0 
	- Microsoft Programmer's Workbench for OS/2, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When one of the pull-down menus in the Programmer's WorkBench (PWB) version 1.0
	is selected (File, Edit, View, and so on) and then F1 is chosen for help on that
	menu, a small help screen appears. If CTRL+F10 is chosen in an attempt to expand
	the window to full screen, the machine will hang under DOS. If the machine
	doesn't hang, it may require another invocation of CTRL+F10 to cause the
	problem.
	
	Under OS/2, the machine may not hang, but the PWB's functionality will be
	disrupted and attempts to free oneself may cause a GP-fault. It may be possible
	to exit the PWB, but at the very least, the CURRENT.STS file will be corrupted
	so that future entrances to PWB will result in very odd window configurations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the PWB version 1.0. This
	problem was corrected in PWB version 1.1.
	
	Additional query words: 1.00 buglist1.00 fixlist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB100OS2
	Version           : MS-DOS:1.0; OS/2:1.0
	Solution Type     : kbfix
	
	=============================================================================
	
