---
layout: page
title: "Q112369: MEMMAKER /BATCH Adds Multiple NOMOVEXBDA Switches"
permalink: /kb/112/Q112369/
---

## Q112369: MEMMAKER /BATCH Adds Multiple NOMOVEXBDA Switches

	Article: Q112369
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the MEMMAKER /BATCH command several times to optimize your system's
	memory configuration, the EMM386.EXE command line in the CONFIG.SYS file may
	contain multiple NOMOVEXBDA switches.
	
	CAUSE
	=====
	
	This problem occurs when you are running MEMMAKER /BATCH if the semicolon (;)
	has been removed from the NOMOVEXBDA line in the "default options" section in
	the MEMMAKER.INF file.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Remove the extra NOMOVEXBDA switches from the EMM386.EXE command line after
	  you run MemMaker.
	
	- Do not run MEMMAKER /BATCH when the NOMOVEXBDA line in MEMMAKER.INF file has
	  been enabled.
	
	- Run MemMaker in custom mode and choose No for the "Move Extended BIOS Data
	  Area from Conventional to Upper Memory?" option.
	
	Additional query words: 6.22 6.00 6.20 mem maker
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
