---
layout: page
title: "Q104887: DBLSPACE /DEFRAG and DEFRAG May Exit Without Error Message"
permalink: kb/104/Q104887/
---

## Q104887: DBLSPACE /DEFRAG and DEFRAG May Exit Without Error Message

	Article: Q104887
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If your system is very low on memory and you try to run DBLSPACE /DEFRAG,
	DoubleSpace may be unable to run and may not display an error message. If you
	then try to run DEFRAG, it may start normally but exit unexpectedly when it
	attempts to run DBLSPACE /DEFRAG. Again, no error message is displayed.
	
	CAUSE
	=====
	
	This problem occurs when there isn't enough memory for DoubleSpace to display an
	error message. The amount of memory at which this problem occurs depends on your
	system configuration and the size of your DoubleSpace-compressed drive.
	Typically, this problem does not occur if you have more the 430K of free
	conventional memory.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Run MemMaker to increase your conventional memory.
	
	-or-
	
	- Use the Clean Start (F5) or Interactive Start (F8) key to load fewer device
	  drivers and terminate-and-stay-resident (TSR) programs before running DEFRAG
	  or DBLSPACE /DEFRAG.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
