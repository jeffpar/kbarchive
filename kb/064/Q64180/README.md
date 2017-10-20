---
layout: page
title: "Q64180: PRB: L1089 Error Caused by Incorrect Linker Version"
permalink: /kb/064/Q64180/
---

## Q64180: PRB: L1089 Error Caused by Incorrect Linker Version

{% raw %}

	Article: Q64180
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.3,5.31.009,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.3, 5.31.009, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK displays the
	following message:
	
	  LINK : fatal error L1089: filename : cannot open response file
	
	CAUSE
	=====
	
	The version of Microsoft LINK in use is earlier than the linker version provided
	with the Microsoft language product. This can occur when the PATH environment
	variable lists an operating system directory that contains a copy of Microsoft
	LINK before the directory that contains the language product.
	
	NOTE: With Microsoft Fortran version 5.1, this same message may be displayed if
	the source file does not have a ".for" extension.
	
	RESOLUTION
	==========
	
	To address this situation, perform one of the following two steps:
	
	- Modify the PATH environment variable to list the directory with the correct
	  linker before any other directories that contain a copy of Microsoft LINK.
	
	- Change the name of other versions of Microsoft LINK to LINK.OLD to prevent
	  them from being used accidentally while allowing the file to be recovered for
	  use if necessary.
	
	Additional query words: 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK50xOS2Search kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.3,5.31.009,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	

{% endraw %}
