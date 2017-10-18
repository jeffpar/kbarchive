---
layout: page
title: "Q105557: HIMEM.SYS Verbose and Quiet Switches"
permalink: kb/105/Q105557/
---

## Q105557: HIMEM.SYS Verbose and Quiet Switches

	Article: Q105557
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although it seem contradictory, HIMEM.SYS supports both Quiet (/Q) and Verbose
	(/VERBOSE or /V) switches.
	
	MORE INFORMATION
	================
	
	Without either switch specified on the DEVICE= command in the CONFIG.SYS file,
	HIMEM.SYS displays only one message during system startup (unless an error
	occurs):
	
	  HIMEM is testing extended memory...
	
	If you specify the Quiet switch, no messages are displayed at system startup
	unless an error occurs.
	
	If you specify the Verbose switch, HIMEM.SYS displays all status and error
	messages while loading.
	
	Additional query words: 6.22 6.20 quite
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
