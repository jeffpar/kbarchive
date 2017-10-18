---
layout: page
title: "Q25108: Using LIB to Combine Two Libraries"
permalink: kb/025/Q25108/
---

## Q25108: Using LIB to Combine Two Libraries

	Article: Q25108
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.0,3.04,3.07,3.08,3.1,3.11,3.14,3.17,3.2,3.20.010,3.31,3.4; OS/2:3.11,3.14,3.17
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Library Manager for MS-DOS, versions 3.0, 3.04, 3.07, 3.08, 3.1, 3.11, 3.14, 3.17, 3.2, 3.20.010, 3.31, 3.4 
	- Microsoft Library Manager for OS/2, versions 3.11, 3.14, 3.17, 3.2 
	-------------------------------------------------------------------------------
	
	The Microsoft Library Manager utility (LIB.EXE) can be used to combine
	two libraries into one.
	
	The following is an example of how to add the contents of LIB1.LIB to
	LIB2.LIB in a single LIB command:
	
	  LIB LIB2.LIB+LIB1.LIB;
	
	You may also have LIB prompt you for input, in which case the input
	and prompts will appear as follows:
	
	  LIB <ENTER> Library name: LIB2.LIB <ENTER> Operations: +LIB1.LIB
	  <ENTER>
	
	Note that the .LIB extension is required; otherwise, LIB will assume
	LIB1 is an object module.
	
	Additional query words: kbinf 3.00 3.10 3.20 3.40
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbZNotKeyword3 kbLibMan300DOS kbLibMan304DOS kbLibMan307DOS kbLibMan308DOS kbLibMan310DOS kbLibMan311DOS kbLibMan314DOS kbLibMan317DOS kbLibMan320DOS kbLibMan320010DOS kbLibMan331DOS kbLibMan340DOS kbLibMan311OS2 kbLibMan317OS2 kbLibMan320OS2 kbLibMan314OS2
	Version           : MS-DOS:3.0,3.04,3.07,3.08,3.1,3.11,3.14,3.17,3.2,3.20.010,3.31,3.4; OS/2:3.11,3.14,3.17,3.2
	
	=============================================================================
	
