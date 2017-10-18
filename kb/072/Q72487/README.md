---
layout: page
title: "Q72487: Error Messages Caused by DIRCMD"
permalink: kb/072/Q72487/
---

## Q72487: Error Messages Caused by DIRCMD

	Article: Q72487
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two error messages that can be caused by incorrectly setting DIRCMD
	options:
	
	  Path not found
	
	  and
	
	  Too many parameters - X
	  (Error occurred in the environment variable)
	
	MORE INFORMATION
	================
	
	DIRCMD allows you to "program" the DIR command. DIRCMD is an MS-DOS environment
	variable and can be set from the command line or the AUTOEXEC.BAT file. However,
	because it is a true environment variable, it can also be set to any ASCII
	string. All subsequent DIR commands will reference DIRCMD until reset or
	changed. If DIRCMD is improperly set, it can result in "odd" effects or error
	messages.
	
	The following are examples of errors caused by incorrectly setting DIRCMD:
	
	Example 1: set DIRCMD=\O\L
	--------------------------
	
	The use of backslashes instead of forward slashes will typically display the
	"Path not found" error message because MS-DOS searches for files in the "L"
	subdirectory under the "O" subdirectory.
	
	Example 2: set DIRCMD=O;L
	-------------------------
	
	MS-DOS will interpret "O" and "L" to be filenames. In addition, if file "O" is
	not found, MS-DOS will look at the "L" entry and give the following error
	message:
	
	  Too many parameters - L
	  (Error occurred in environment variable)
	
	In both cases, the files in the current directory will not be listed. This
	behavior continues until DIRCMD is reset.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
