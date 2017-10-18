---
layout: page
title: "Q87544: FIX: &quot;Application Error&quot; When HEAPSIZE MAXVAL in .DEF File"
permalink: kb/087/Q87544/
---

## Q87544: FIX: &quot;Application Error&quot; When HEAPSIZE MAXVAL in .DEF File

	Article: Q87544
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.0x,5.1x,5.2,5.3x,5.5; OS/2:5.0x,5.1,5.11,5.13,5.15,5.31
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.0x, 5.1x, 5.2, 5.3x, 5.5 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15, 5.31 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows version 3.1, an attempt to run an application linked with
	Microsoft LINK fails and Windows displays the following message:
	
	  Application Execution Error
	
	  Insufficient memory to run this application. Quit one or more Windows
	  Applications and then try again.
	
	In Windows version 3.0, an attempt to run the application causes the computer to
	hang.
	
	CAUSE
	=====
	
	The module-definition (.DEF) file for the application contains a HEAPSIZE MAXVAL
	statement. The error occurs because the data segment is 64K; Windows requires 16
	free bytes in each application's data segment.
	
	RESOLUTION
	==========
	
	Modify the module-definition file such that the value specified for the HEAPSIZE
	added to the size of the DGROUP segment is no larger than 64K - 16 bytes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LINK versions 5.3, 5.31.009, and
	5.5 for MS-DOS and version 5.31 for OS/2. This problem was corrected in LINK for
	MS-DOS version 5.6.
	
	MORE INFORMATION
	================
	
	HEAPSIZE MAXVAL sets the heap size to 64K minus the size of DGROUP. This does
	not leave the required 16 bytes free.
	
	Additional query words: 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK550DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2 kbLINK531OS2
	Version           : MS-DOS:5.0x,5.1x,5.2,5.3x,5.5; OS/2:5.0x,5.1,5.11,5.13,5.15,5.31
	Solution Type     : kbfix
	
	=============================================================================
	
