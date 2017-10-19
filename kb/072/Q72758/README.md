---
layout: page
title: "Q72758: EMM386.EXE with IBM PCS 3270 Causes Lockup"
permalink: /kb/072/Q72758/
---

## Q72758: EMM386.EXE with IBM PCS 3270 Causes Lockup

	Article: Q72758
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
	
	Running the PCS batch file to start the IBM 3270 emulation program will hang the
	system. It appears to load the program but does not return to the command prompt
	and locks up the system.
	
	When IBM PCS version 1.0, 1.21, or 3.0 is spawned with EMM386.EXE loaded with
	NOEMS or RAM switch in CONFIG.SYS, it will hang the system. The system will need
	a hard boot.
	
	Excluding C000-CFFF with EMM386.EXE will solve the problem. For example:
	
	  device=c:\dos\emm386.exe noems x=c000-cfff
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
