---
layout: page
title: "Q58781: BUG: LINK Does Not Pause When Command Line Specifies /PAUSE"
permalink: /kb/058/Q58781/
---

## Q58781: BUG: LINK Does Not Pause When Command Line Specifies /PAUSE

	Article: Q58781
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.61,3.65,3.69,5.0x,5.1x,5.2x,5.3x,5.5; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.61, 3.65, 3.69, 5.0x, 5.1x, 5.2x, 5.3x, 5.5 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even though the Microsoft LINK command line includes the /PAU[SE] option switch,
	the linker does not pause for keyboard input before writing the executable file
	to disk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft LINK versions 3.61,
	3.65, 3.69, and 5.01.20 through 5.6 for MS-DOS and versions 5.0x, 5.1, 5.11,
	5.13, and 5.15 for OS/2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The /PAUSE linker option instructs LINK to pause the linking process and display
	a message before it writs the executable file to disk. The /PAUSE option is
	designed to allow you to insert a new disk on which to store the executable
	file.
	
	When the /PAUSE linker option functions correctly, LINK displays the following
	message before it creates the executable file:
	
	  About to generate .EXE file
	  Change diskette in drive ___ and press <ENTER>
	
	LINK resumes processing when the user presses the ENTER key.
	
	Additional query words: 3.61 3.65 3.69 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK520xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK365DOS kbLINK369DOS kbLINK550DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.61,3.65,3.69,5.0x,5.1x,5.2x,5.3x,5.5; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
