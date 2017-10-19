---
layout: page
title: "Q34142: PRB: Link Error L1073: &quot;File-segment Limit Exceeded&quot;"
permalink: /kb/034/Q34142/
---

## Q34142: PRB: Link Error L1073: &quot;File-segment Limit Exceeded&quot;

	Article: Q34142
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.50,5.60
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 5.01.20, 5.01.21, 5.03, 5.05, 5.1, 5.13, 5.15, 5.3, 5.31.009, 5.50, 5.60 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application with Microsoft LINK fails and the linker
	displays the following message on the screen:
	
	  L1073: File-segment Limit Exceeded
	
	CAUSE
	=====
	
	The application contains more than the 255 segment limit imposed by the
	Microsoft Windows and OS/2 protected mode operating systems for each application
	and dynamic-link library (DLL).
	
	RESOLUTION
	==========
	
	Reduce the number of segments in the application. With Microsoft language
	compilers, modify the compiler command line to specify the /PACKCODE option, the
	/PACKDATA option, or both to place more information into each segment.
	
	MORE INFORMATION
	================
	
	The linker creates a file segment for each group definition, non-packed logical
	segment, and set of packed segments.
	
	Additional query words: 3.64 3.65 3.69 4.06 4.07 4.10 5.10 5.20 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK50120DOS kbLINK50121DOS kbLINK503DOS kbLINK510DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK505DOS
	Version           : MS-DOS:3.x,5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.50,5.60
	
	=============================================================================
	
