---
layout: page
title: "Q74305: Logitech Mouse Driver Will Not Work with E000 Page Frame"
permalink: kb/074/Q74305/
---

## Q74305: Logitech Mouse Driver Will Not Work with E000 Page Frame

	Article: Q74305
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Logitech MOUSE.COM driver will not work when a page frame of E000-EFFF is
	set up using EMM386.EXE.
	
	MORE INFORMATION
	================
	
	When EMM386 is used to emulate expanded memory with a page frame of E000-EFFF,
	the mouse will not function correctly. Using the D000-DFFF range with EMM386.EXE
	and including the E000-EFFF range with the following statement will work, as
	follows:
	
	  DEVICE=C:\DOS\EMM386.EXE 512 RAM M5 I=E000-EFFF
	
	Note that this statement will only work on machines that have the E000-EFFF range
	available. This range is reserved on many machines, including IBM PS/2s. Do not
	attempt to use this range unless you have ascertained that this range is
	available.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
