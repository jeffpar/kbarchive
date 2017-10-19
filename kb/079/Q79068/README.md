---
layout: page
title: "Q79068: PRB: L1083 Error Caused By Read-Only Destination .EXE File"
permalink: /kb/079/Q79068/
---

## Q79068: PRB: L1083 Error Caused By Read-Only Destination .EXE File

	Article: Q79068
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:4.x,5.0x,5.1x,5.2,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 4.x, 5.0x, 5.1x, 5.2, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  L1083: Cannot open run file
	
	CAUSE
	=====
	
	The read-only attribute is set on the destination .EXE file.
	
	RESOLUTION
	==========
	
	Use the ATTRIB command with the -R option switch to remove the read-only
	attribute from the file.
	
	Additional query words: 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 5.60 link
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:4.x,5.0x,5.1x,5.2,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
