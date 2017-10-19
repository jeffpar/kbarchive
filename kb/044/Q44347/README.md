---
layout: page
title: "Q44347: MS-DOS: Using the /e Parameter with APPEND.EXE"
permalink: /kb/044/Q44347/
---

## Q44347: MS-DOS: Using the /e Parameter with APPEND.EXE

	Article: Q44347
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The APPEND.EXE command is a terminate-and-stay-resident (TSR) utility that
	allows you to specify a path or paths that are to be searched when the operating
	system is trying to find data files. This is similar to the PATH environment
	variable, with the exception that the search paths indicated by the PATH
	environment variable are for executable files, not data files.
	
	Beginning with MS-DOS version 3.30, the APPEND program has allowed an /e
	parameter, which specifies that the APPEND search paths are to be included in
	the environment with the APPEND environment variable. This allows you to view
	the APPENDed directories using the SET command at the MS-DOS command prompt.
	Without this switch, you must type "APPEND" without any parameters to see the
	active search paths.
	
	The /e parameter is only allowed with the first invocation of the APPEND command.
	If the /e parameter is not included with the first invocation, the value of the
	APPEND path is not stored in the environment. If the /e parameter is included
	with any subsequent APPEND command (regardless of whether it was included with
	the first invocation), an "Invalid Parameter" error message is displayed on the
	screen.
	
	MORE INFORMATION
	================
	
	For more information on the APPEND and SET commands, please refer to the
	"Microsoft MS-DOS User's Guide."
	
	Additional query words: 6.22 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
