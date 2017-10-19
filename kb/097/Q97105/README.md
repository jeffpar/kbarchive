---
layout: page
title: "Q97105: FoxPro Err Msg: Incompatible Memory Manager"
permalink: /kb/097/Q97105/
---

## Q97105: FoxPro Err Msg: Incompatible Memory Manager

	Article: Q97105
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.0,2.5,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run version 2.0 or 2.5 of Microsoft FoxPro for MS-DOS in extended mode
	with MS-DOS 6.x, you may receive an error message stating that the memory
	manager is incompatible.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Edit your CONFIG.SYS file to add the RAM parameter to the command for
	  EMM386.EXE and remove the NOEMS parameter. For example:
	
	     device=c:\dos\emm386.exe ram
	
	-or-
	
	- Run MemMaker. When you are asked if you use any programs that need expanded
	  memory, set the option to "Yes."
	
	This problem does not occur if you are running FoxPro 2.0 for MS-DOS in standard
	mode, FoxPro for MS-DOS 2.5 in any mode, or FoxPro for Windows.
	
	Additional query words: 6.22 6.00 EMS 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:2.0,2.5,6.0,6.2,6.21,6.22
	
	=============================================================================
	
