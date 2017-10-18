---
layout: page
title: "Q25025: Information Provided by Relocation Table"
permalink: kb/025/Q25025/
---

## Q25025: Information Provided by Relocation Table

	Article: Q25025
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.3,5.31.009,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.3, 5.31.009, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The relocation table offset gives the relative byte offset from the beginning of
	the run file to the relocation table. The relocation table offset can be found
	by using the EXEHDR utility.
	
	The relocation table contains a list of pointers to the locations within the .EXE
	image that must be adjusted when the .EXE is loaded. These locations are
	references to the program segments and must be adjusted because the program can
	be loaded starting at any segment address.
	
	REFERENCES
	==========
	
	For more information, see the "Microsoft MS-DOS Programmer's Reference"
	(Microsoft Press) or Article 4 of the "MS-DOS Encyclopedia" (Microsoft Press),
	pages 123-125.
	
	Additional query words: kbinf 1.08 1.10 2.00 2.01 2.10 2.40 2.41 2.44 2.50 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK50xOS2Search kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.3,5.31.009,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
