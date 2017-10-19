---
layout: page
title: "Q100842: File Limit for DIR Command Sort Options"
permalink: /kb/100/Q100842/
---

## Q100842: File Limit for DIR Command Sort Options

	Article: Q100842
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22; Win95:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DIR command with the /O switch at a command prompt, you may
	receive the following error message:
	
	  Too many files, directory not sorted
	
	The directory listing is then displayed, but it is not sorted as you requested.
	
	CAUSE
	=====
	
	There are more files in the directory than the command interpreter (COMMAND.COM)
	can sort. The maximum amount of memory that COMMAND.COM can allocate for a DIR
	operation is 64 kilobytes minus 512 bytes. Each file displayed by the DIR
	command requires 22 bytes for its entry, making the total number of files that
	can be displayed in a sorted directory equal to 2295 files [(65536-512)/22].
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The MS-DOS DIR command is internal (built-in) to COMMAND.COM. The DIR command
	uses memory allocated by COMMAND.COM for its processing.
	
	REFERENCES
	==========
	
	For more information about the DIR command and its sorting options, type "dir
	/?" (without the quotation marks) at an MS-DOS command prompt.
	
	Additional query words: 5.00 5.00a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22; Win95:
	
	=============================================================================
	
