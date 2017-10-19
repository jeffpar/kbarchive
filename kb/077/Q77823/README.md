---
layout: page
title: "Q77823: FIX: L2049 Error From LINK 5.1x with /HIGH Option"
permalink: /kb/077/Q77823/
---

## Q77823: FIX: L2049 Error From LINK 5.1x with /HIGH Option

	Article: Q77823
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  LINK : error L2049: no segments defined
	
	CAUSE
	=====
	
	The linker command line contains the /HIGH option switch. The error occurs
	because the linker checks for an empty .EXE file incorrectly.
	
	RESOLUTION
	==========
	
	LINK produces the .EXE file correctly. You can ignore the error message when the
	command line includes the /HIGH option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LINK versions 5.1, 5.11, 5.13,
	and 5.15 for MS-DOS. This problem was corrected in LINK version 5.2 for MS-DOS.
	LINK version 5.2 generates an L4076 warning message in place of the L2049 error
	message.
	
	Additional query words: 5.10 5.11 5.13 5.15
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK510DOS kbLINK511DOS kbLINK513DOS kbLINK515DOS
	Version           : MS-DOS:5.1,5.11,5.13,5.15
	
	=============================================================================
	
