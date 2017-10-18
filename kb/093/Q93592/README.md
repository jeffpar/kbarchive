---
layout: page
title: "Q93592: Correcting Illegal Directory Names With DELTREE and MOVE"
permalink: kb/093/Q93592/
---

## Q93592: Correcting Illegal Directory Names With DELTREE and MOVE

	Article: Q93592
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS DEL command cannot be used to delete a directory with a blank space
	in the name (for example "C:\MY WORK"). However, you can use the MS-DOS programs
	DELTREE and MOVE to delete or rename these directories.
	
	MORE INFORMATION
	================
	
	Some utilities and installation programs allow you to create directory names
	with illegal characters (such as spaces). Because a directory name with a space
	or other illegal character is not expected, DEL was not designed to work with
	them.
	
	Using DELTREE to Delete Illegal Directories
	-------------------------------------------
	
	The DELTREE program can be used to delete illegal directories. For example, type
	the following at the MS-DOS command prompt:
	
	  " DELTREE "MY WORK"" (without the quotation marks)
	
	NOTE: You must type the quotation marks.
	
	Using MOVE to Rename Illegal Directories
	----------------------------------------
	
	The MOVE program can be used to rename illegal directories. For example, type the
	following at the MS-DOS command prompt:
	
	  " MOVE "MY WORK" MY_WORK" (without the quotation marks)
	
	NOTE: You must type the quotation marks.
	
	Additional query words: 6.22 6.0 6.00 6.20 invalid
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
