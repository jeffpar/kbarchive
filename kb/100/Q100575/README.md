---
layout: page
title: "Q100575: MemMaker Err Msg: &quot;SIZER: Program Load Error&quot;"
permalink: /kb/100/Q100575/
---

## Q100575: MemMaker Err Msg: &quot;SIZER: Program Load Error&quot;

{% raw %}

	Article: Q100575
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run MemMaker, your computer may beep and the following error may be
	displayed after MemMaker reboots the system the first time:
	
	  SIZER: Program load error.
	
	MemMaker continues optimizing your system.
	
	After MemMaker has optimized your system and restarts the computer a second time,
	the following error may be displayed:
	
	  Bad or missing <drivername>
	  Error in CONFIG.SYS line nn
	
	CAUSE
	=====
	
	The first error indicates that SIZER.EXE tried to size a device driver or
	terminate-and-stay-resident (TSR) program in the CONFIG.SYS or AUTOEXEC.BAT file
	that does not exist on the specified path.
	
	The second error occurs when the driver or TSR program that caused the first
	error is in the CONFIG.SYS file, but does not exist, or the path is incorrect,
	or the filename is spelled incorrectly.
	
	Additional query words: 6.22 6.00 error message errmsg 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
