---
layout: page
title: "Q95560: MemMaker Converts Some Variables to Drive Letters"
permalink: /kb/095/Q95560/
---

## Q95560: MemMaker Converts Some Variables to Drive Letters

	Article: Q95560
	Product(s): Microsoft Disk Operating System
	Version(s): 6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set an environment variable in the Autoexec.bat file and then use it to
	run a program, MemMaker converts the environment variable to its true name.
	
	For example, if your Autoexec.bat file contains these lines before you run
	MemMaker:
	
	  set xdrive=d
	  %xdrive%:\dos\doskey
	
	they are converted to:
	
	  set xdrive=d
	  lh /l:xxxx  d:\dos\doskey
	
	WORKAROUND
	==========
	
	To work around this issue, either do not set environment variables to drive
	letters or directories, or modify your Config.sys and Autoexec.bat files after
	you run MemMaker.
	
	Additional query words: 6.22 6.0 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : :6.0,6.2,6.21,6.22
	
	=============================================================================
	
