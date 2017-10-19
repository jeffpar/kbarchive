---
layout: page
title: "Q105334: MemMaker Removes Question Mark Characters from CONFIG.SYS"
permalink: /kb/105/Q105334/
---

## Q105334: MemMaker Removes Question Mark Characters from CONFIG.SYS

	Article: Q105334
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
	
	MemMaker removes question mark characters (?) from commands in your CONFIG.SYS
	and AUTOEXEC.BAT files.
	
	CAUSE
	=====
	
	MemMaker does not have the ability to analyze your CONFIG.SYS and AUTOEXEC.BAT
	files without removing the question mark characters.
	
	RESOLUTION
	==========
	
	To work around this problem, edit your CONFIG.SYS or AUTOEXEC.BAT files after
	you run MemMaker and add the question mark characters.
	
	For more information on using the question mark in your startup files, type "help
	config.sys" (without the quotation marks) at the MS-DOS command prompt and then
	press ENTER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.2. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.22 6.20 special character
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
