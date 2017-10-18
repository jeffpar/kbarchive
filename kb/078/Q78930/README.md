---
layout: page
title: "Q78930: PRB: Unresolved Externals Remain When Libraries Share a Name"
permalink: kb/078/Q78930/
---

## Q78930: PRB: Unresolved Externals Remain When Libraries Share a Name

	Article: Q78930
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.2,5.2x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.2, 5.2x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  LINK : error L2029: 'symbol' : unresolved external
	
	CAUSE
	=====
	
	The application is linked to more than one library that have the same name but
	that are stored in different directories. LINK searches for symbols only in the
	first library with the listed name. This calls all symbols referenced in the
	other libraries to remain unresolved.
	
	RESOLUTION
	==========
	
	To work around this problem, change the names of the libraries such that each
	one has a unique name.
	
	STATUS
	======
	
	Changing this behavior is under review and will be considered for a future
	release of Microsoft LINK.
	
	MORE INFORMATION
	================
	
	The following linker response file demonstrates this situation. All symbols
	referenced in the TEST.LIB file in the \LIB2 directory remain unresolved.
	Changing the name of at least one of the two libraries addresses this
	situation.
	
	TEST.LRF
	--------
	
	  TEST.OBJ
	  TEST.EXE
	  TEST.MAP
	  \LIB1\TEST.LIB +
	  \LIB2\TEST.LIB
	
	Additional query words: 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.61 3.64 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK520xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.2,5.2x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
