---
layout: page
title: "Q78721: MS-DOS Editor Can Edit Lines Greater than 256 Characters"
permalink: kb/078/Q78721/
---

## Q78721: MS-DOS Editor Can Edit Lines Greater than 256 Characters

	Article: Q78721
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
	
	A file created with or modified by an editor that allows the creation of lines
	longer than 256 characters may be edited with MS-DOS Editor up to the length of
	the longest line in that file (if the longest line is longer than 256
	characters).
	
	MORE INFORMATION
	================
	
	Page 211 of the version 5.0 "Microsoft MS-DOS User's Guide and Reference" states
	that MS-DOS Editor can create lines up to 256 characters long. This applies only
	to files created with MS-DOS Editor.
	
	If a file has been created or modified with another editor that can create lines
	longer than 256 characters, the MS-DOS Editor will be able to edit that file and
	create lines up to the length of the longest line in that file.
	
	If you shorten the longest line, the file may be edited only up to the new length
	of the longest line or 256 characters, whichever is greater.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
