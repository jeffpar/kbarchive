---
layout: page
title: "Q97504: MS-DOS: No Interactive Boot Option for the AUTOEXEC.BAT File"
permalink: /kb/097/Q97504/
---

## Q97504: MS-DOS: No Interactive Boot Option for the AUTOEXEC.BAT File

	Article: Q97504
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The interactive boot option included with MS-DOS 6.0 (the F8 key) works with the
	CONFIG.SYS file only; it does not work with the AUTOEXEC.BAT file. Stepping
	through a batch file using the interactive boot option is not a feature of
	MS-DOS 6.0. You can, however, use the CHOICE and IF ERRORLEVEL commands to step
	through the AUTOEXEC.BAT file.
	
	NOTE: This information does not apply to later versions of MS-DOS.
	
	MORE INFORMATION
	================
	
	The CHOICE command provides the ability to prompt for input while running a
	batch file program. With the CHOICE command, you can display a specified prompt
	and then pause for user input. For example, if you add the following line to a
	batch file program
	
	  " CHOICE /C:ABC Choose an Option " (without the quotation marks)
	
	the user sees the following when CHOICE is started:
	
	  Choose an Option [A,B,C,]?
	
	For more information on using the CHOICE command, type "help choice" (without the
	quotation marks) at the MS-DOS command prompt.
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
