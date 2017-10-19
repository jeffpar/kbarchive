---
layout: page
title: "Q107979: MemMaker Err Msg: Error Reading CONFIG.SYS in Root"
permalink: /kb/107/Q107979/
---

## Q107979: MemMaker Err Msg: Error Reading CONFIG.SYS in Root

	Article: Q107979
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
	
	When you run MS-DOS MemMaker, you may receive the following error message:
	
	  Error reading CONFIG.SYS in root
	
	CAUSE
	=====
	
	This error occurs when a program or command in your AUTOEXEC.BAT file changes
	the default drive (for example, from C to D), you run MemMaker, choose Custom
	Setup, and then choose to "Optimize upper memory for use with Windows."
	
	RESOLUTION
	==========
	
	To correct this situation, edit your AUTOEXEC.BAT file and add "C:" (without the
	quotation marks) (without the quotation marks) after the line for the program or
	command that is changing the default drive. For example, if your AUTOEXEC.BAT
	file has
	
	  D:
	  DOSKEY
	
	add "C:" (without the quotation marks) after the DOSKEY line:
	
	  D:
	  DOSKEY
	  C:
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
