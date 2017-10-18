---
layout: page
title: "Q76077: PRB: L1006 Error When /STACK Option Contains a Space"
permalink: kb/076/Q76077/
---

## Q76077: PRB: L1006 Error When /STACK Option Contains a Space

	Article: Q76077
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.x,2.x,3.x,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 1.x, 2.x, 3.x, 4.x, 5.0x, 5.1x, 5.2x, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  LINK : fatal error L1006: ST : stack size exceeds 65535 bytes
	
	CAUSE
	=====
	
	The linker command line includes the /ST[ACK] option with a space between the
	option name and the numeric parameter.
	
	RESOLUTION
	==========
	
	To eliminate the error, edit the command line to remove the space.
	
	MORE INFORMATION
	================
	
	This error is caused by a space character before or after the colon in the
	/STACK linker option. Both of the following command lines cause the L1006
	error:
	
	  link /ST :4096 test.obj;
	  link /ST: 4096 test.obj;
	
	Additional query words: 1.08 1.10 2.00 2.01 2.10 2.40 2.41 2.44 2.50 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK1xDOSSearch kbLINK2xDOSSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK520xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:1.x,2.x,3.x,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
