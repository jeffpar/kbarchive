---
layout: page
title: "Q101059: Current Directory Changes When Using the LABEL Command"
permalink: /kb/101/Q101059/
---

## Q101059: Current Directory Changes When Using the LABEL Command

	Article: Q101059
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the MS-DOS LABEL command to change the volume label for a drive other
	than the current one, the current directory changes if it has the same name as
	one of its subdirectories.
	
	For example, if you have a directory structure such as C:\TEST\TEST and the
	current directory is C:\TEST, if you enter
	
	  " LABEL A: " (without the quotation marks)
	
	the current directory changes to C:\TEST\TEST.
	
	This problem occurs only when the first directory is directly off the root and
	the second-level directory has the same name as the first.
	
	NOTE: This could cause problems in batch files that expect the current directory
	to remain the same.
	
	WORKAROUND
	==========
	
	As a workaround in batch files using the LABEL command, you should add a command
	below the LABEL command that changes to the desired directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft MS-DOS versions 6.0,
	6.2, 6.21, and 6.22. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
