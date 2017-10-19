---
layout: page
title: "Q74191: MS-DOS Editor Corrupts Nontext Files"
permalink: /kb/074/Q74191/
---

## Q74191: MS-DOS Editor Corrupts Nontext Files

	Article: Q74191
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
	
	The MS-DOS Editor should not be used to edit nontext files. If it is used to
	edit a file that is not a text file, it will display any embedded text in the
	file, but will most likely corrupt the file when you save it.
	
	MORE INFORMATION
	================
	
	When the MS-DOS Editor is used to edit a file, it will only display the ASCII
	portion of the file, and will strip out all other characters. Consequently, all
	nondisplayable characters are lost when you save the file. No error messages or
	warnings are issued when this occurs.
	
	Problems typically occur if you attempt to edit document files created by word
	processing programs. The MS-DOS Editor may appear to edit these files properly,
	but will usually corrupt them when you save them, due to the loss of control
	information needed by the word processing program.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
