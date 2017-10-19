---
layout: page
title: "Q74174: Invalid SET TEMP Prevents Operation of Task Swapper"
permalink: /kb/074/Q74174/
---

## Q74174: Invalid SET TEMP Prevents Operation of Task Swapper

	Article: Q74174
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the SET TEMP statement in your AUTOEXEC.BAT file is invalid, MS-DOS 5.0 Shell
	Task Swapper may not function properly. If this is the case, you will observe
	the following symptoms:
	
	- When you press CTRL+ESC to return to Shell from an application, the following
	  error message may be displayed:
	
	  Your program cannot be swapped out to disk
	
	- An application may not start from Shell. In this event, a blank screen may
	  appear for a few moments, followed by a return to Shell.
	
	MORE INFORMATION
	================
	
	There are two reasons that a SET TEMP statement might be invalid:
	
	- SET TEMP is pointing to a directory that doesn't exist. Common examples of
	  this situation include the following:
	
	   - SET TEMP is pointing to a directory on a RAM drive without RAMDRIVE.SYS
	     being loaded in the CONFIG.SYS file.
	
	   - The directory referenced by SET TEMP was included in a Stacker incremental
	     installation. (Stacker does not re-create empty directories.)
	
	   - The hard drive was repartitioned, and SET TEMP now points to a logical
	     drive that no longer exists.
	
	- SET TEMP will be invalid if the SET TEMP command line in the AUTOEXEC.BAT
	  file contains a trailing space. For example, the final "P" in the following
	  SET TEMP statement should be the last character in the line. If there are any
	  blank spaces after the last character, the SET TEMP line is invalid. For
	  example:
	
	  set temp=c:\windows\temp
	
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
