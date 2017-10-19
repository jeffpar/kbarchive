---
layout: page
title: "Q70262: FIX: Invalid Executable File, 65,535 Byte Stack Size Requested"
permalink: /kb/070/Q70262/
---

## Q70262: FIX: Invalid Executable File, 65,535 Byte Stack Size Requested

	Article: Q70262
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.2; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.2 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to run an executable file fails and the computer hangs, the program
	gives unexpected results, or generates the following message:
	
	  run-time error R6000
	  - stack overflow
	
	CAUSE
	=====
	
	The application specifies a stack size of exactly 65,535 bytes. When the
	Microsoft LINK /STACK option specifies 65,535 bytes (or the Microsoft language
	compiler /F option specifies FFFFh bytes), the linker does not display a warning
	message and it sets the stack size to zero bytes. The error occurs because LINK
	rounds an odd stack size to the next larger even value in an effort to create
	the most efficient executable file.
	
	RESOLUTION
	==========
	
	To request the largest possible stack size, specify 65,534 in the /STACK linker
	option (or /F compiler option).
	
	Microsoft has confirmed this to be a problem in LINK versions listed above. LINK
	versions 5.3 and higher (16-bit versions) generate an error if the user
	specifies a stack size larger than 65,534 (64K - 2).
	
	Additional query words: 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.2; OS/2:5.0x,5.1,5.11,5.13,5.15
	Solution Type     : kbfix
	
	=============================================================================
	
