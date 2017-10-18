---
layout: page
title: "Q31990: Maximum Number of Segments LINK Supports"
permalink: kb/031/Q31990/
---

## Q31990: Maximum Number of Segments LINK Supports

	Article: Q31990
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.01.20, 5.01.21, 5.03, 5.05, 5.1, 5.13, 5.15, 5.3, 5.31.009, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	The /SEGMENTS:number linker option specifies the maximum number of program
	segments. The default limit in Microsoft LINK is 128 if the linker command
	line does not specify the /SEGMENTS option or if no number is specified.
	The maximum number of segments supported by LINK versions 5.10 and greater
	is 16,375. Segment definitions are constrained by the memory available at
	link time.
	
	Additional query words: kbinf 5.10 5.30 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50120DOS kbLINK50121DOS kbLINK503DOS kbLINK510DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK505DOS
	Version           : MS-DOS:5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6
	
	=============================================================================
	
