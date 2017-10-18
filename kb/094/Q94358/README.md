---
layout: page
title: "Q94358: MemMaker Err Msg with QEMM: 'Bad Command or Filename'"
permalink: kb/094/Q94358/
---

## Q94358: MemMaker Err Msg with QEMM: 'Bad Command or Filename'

	Article: Q94358
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using QEMM to load your files into upper memory and the FILES command
	has a plus (+) sign for a delimiter (for example, C:\QEMM\LOADHI /R:1 FILES+30),
	you will receive the following error message:
	
	  Bad Command or Filename
	
	CAUSE
	=====
	
	Using a plus sign as a delimiter is not standard for MS-DOS. If your QEMM
	command contains "FILES+nn", MemMaker returns the error message noted above.
	
	WORKAROUND
	==========
	
	To work around the problem, remove the QEMM "FILES+nn" command from your
	AUTOEXEC.BAT file and use the "files=" setting in your CONFIG.SYS file to
	specify the number of open files. Run MemMaker again to ensure that you have the
	optimal memory configuration.
	
	Additional query words: 6.22 6.00 handles 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
