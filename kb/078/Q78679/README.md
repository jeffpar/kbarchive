---
layout: page
title: "Q78679: WordPerfect Office TSRs Don't Function Correctly"
permalink: /kb/078/Q78679/
---

## Q78679: WordPerfect Office TSRs Don't Function Correctly

	Article: Q78679
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WordPerfect Office versions 3.0 and 3.01 include terminate-and-stay- resident
	programs (TSRs) that run in graphics mode. These programs may not execute
	properly within MS-DOS Shell if Shell is also operated in graphics mode.
	
	To avoid this problem, run Shell in text mode by using the /T switch, as
	follows:
	
	  dosshell /t
	
	MORE INFORMATION
	================
	
	Microsoft Windows 3.0 and other programs that use graphic screen drawings may
	also prevent WordPerfect Office TSR programs from functioning properly.
	
	The WordPerfect utilities include CL.EXE, a calendar utility, and NOTIFY.EXE, a
	notification utility.
	
	The WordPerfect products included here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 5.00 3.00 3.10 dosshell word perfect 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
