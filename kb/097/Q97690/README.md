---
layout: page
title: "Q97690: Compaq RUNHI Command Causes Problems with MS-DOS 6 Setup"
permalink: kb/097/Q97690/
---

## Q97690: Compaq RUNHI Command Causes Problems with MS-DOS 6 Setup

	Article: Q97690
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Compaq MS-DOS version 5.00a includes a command called RUNHI, which replaces both
	the DEVICEHIGH and LOADHIGH (LH) commands. RUNHI works in both the CONFIG.SYS
	and AUTOEXEC.BAT files and provides more control over memory location where
	programs load than does DEVICEHIGH or LOADHIGH.
	
	MORE INFORMATION
	================
	
	With the following exceptions, RUNHI is compatible with MS-DOS 6:
	
	- DoubleSpace can't be loaded high with RUNHI
	
	- MS-DOS 6 Upgrade Setup doesn't recognize lines in CONFIG.SYS or AUTOEXEC.BAT
	  files that start with RUNHI. As a result, you may end up with duplicate load
	  commands for drivers in those files after Setup has modified those files.
	
	  For example, if you have the line RUNHI MOUSE.COM in your AUTOEXEC.BAT file,
	  Setup finds that you have a mouse driver loaded and tries to update it, but
	  Setup doesn't find the line in the AUTOEXEC.BAT file where it is loaded. As a
	  result, it adds C:\DOS\MOUSE to the AUTOEXEC.BAT file. The RUNHI MOUSE.COM
	  command is not modified.
	
	
	Additional query words: 6.00 dblspace run high runhigh
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
