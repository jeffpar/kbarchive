---
layout: page
title: "Q139054: Cannot Find The File Specified with AT Command"
permalink: kb/139/Q139054/
---

## Q139054: Cannot Find The File Specified with AT Command

	Article: Q139054
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the AT scheduler to run a command prompt operation, the following
	error message appears:
	
	  The system cannot find the file specified
	
	CAUSE
	=====
	
	This error occurs if the command prompt operation specified in the AT command
	contains directory names that include spaces. For example, the following AT
	command generates the above error:
	
	  AT 12:00 "XCOPY C\Source directory\*.* C:\Destination directory"
	
	Within the AT command, the XCOPY command parses the space in the directory name
	as a delimiter between parameters.
	
	RESOLUTION
	==========
	
	To correct this problem,
	
	1. Create a batch file that contains the desired command prompt operation.
	
	2. Specify the batch file as the desired command for the scheduler service to
	  run. For example:
	
	  AT 12:00 C:\TEST.BAT
	
	  where TEST.BAT contains the following:
	
	  XCOPY "C:\Source directory\*.*" "C:\Destination directory"
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
