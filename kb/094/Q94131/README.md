---
layout: page
title: "Q94131: MemMaker Values for Memory Change Don't Match"
permalink: /kb/094/Q94131/
---

## Q94131: MemMaker Values for Memory Change Don't Match

	Article: Q94131
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
	
	When MemMaker reports values in the Change column for conventional memory and
	upper memory, the values may not be the same. For example, MemMaker may report
	you have 58K more conventional memory and 62K less memory in the upper memory
	area (UMA).
	
	MORE INFORMATION
	================
	
	Under ideal conditions, these two numbers are the same. If one of the following
	conditions exist, the values for the change in conventional and upper memory
	don't match:
	
	- A program that loads itself into the UMA changes size (for example,
	  SMARTDRV.EXE)
	
	- The expanded memory manager (EMM) that MemMaker loads (EMM386.EXE) utilizes
	  the UMA differently from the current EMM
	
	- A program that MemMaker configured to load into the UMA did not because of an
	  unanticipated problem.
	
	Additional query words: 6.22 6.0 not memory maker 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
