---
layout: page
title: "Q67426: Conflict Between CTTY and Command-Line Editing Utilities"
permalink: kb/067/Q67426/
---

## Q67426: Conflict Between CTTY and Command-Line Editing Utilities

	Article: Q67426
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Command-line editors, such as MS-DOS 5.0 Doskey, may experience problems when a
	CTTY command is issued. Command-line editors use system BIOS calls to manipulate
	keyboard input and display so they can provide fast, flexible command-line
	editing. The CTTY command redirects MS-DOS character input and output calls, but
	not system BIOS calls. This can be confusing to command-line editors, producing
	unpredictable results.
	
	As a result, DOSKEY and such third-party command-line editors as DOSEDIT, CED,
	and PCED should not be used when the CTTY command is executed.
	
	Additional query words: 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
