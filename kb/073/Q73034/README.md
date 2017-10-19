---
layout: page
title: "Q73034: Unable to LOADHIGH Correctly After NET5.COM Loaded"
permalink: /kb/073/Q73034/
---

## Q73034: Unable to LOADHIGH Correctly After NET5.COM Loaded

	Article: Q73034
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Novell network, you may have difficulty loading device drivers high after
	running NET5.COM. Drivers loaded after NET5 may exhibit two characteristics:
	
	- The driver loads in conventional memory.
	
	- The driver name is missing, contains only hyphens, or has a nonsense name
	  when viewed using the "MEM /C | MORE" command.
	
	CAUSE
	=====
	
	NET5.COM is a redirector provided by Novell to update network operations for
	MS-DOS version 5.0. It is loaded in the AUTOEXEC.BAT file. After NET5 is loaded,
	LOADHIGH statements do not operate properly. Loading NET5 high or low doesn't
	make a difference.
	
	WORKAROUND
	==========
	
	Currently the only workaround is to load all desired programs high BEFORE
	running NET5.
	
	Sample AUTOEXEC.BAT
	-------------------
	
	  path=c:\dos;c:\windows;c:\ 
	  prompt $p$g
	  loadhigh c:\mouse1\mouse.com
	  loadhigh c:\dos\doskey.com
	  loadhigh [drive][path]\ipx.exe
	  loadhigh [drive][path]\net5.com
	
	The above mentioned problem would occur if Doskey or Mouse were loaded after
	NET5.COM regardless of NET5 loading high or low.
	
	NET5.COM is a redirector provided by Novell for use with MS-DOS 5.0; Net5 was not
	developed by Microsoft.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
