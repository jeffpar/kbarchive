---
layout: page
title: "Q19972: INFO: Jumping into the Middle of a For Loop Is Not Recommended"
permalink: kb/019/Q19972/
---

## Q19972: INFO: Jumping into the Middle of a For Loop Is Not Recommended

	Article: Q19972
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C and in Microsoft C/C++, the goto statement and its corresponding
	label must be part of the same function; no other restrictions apply. However,
	because different compilers optimize for loops and allocate stack space for
	automatic variables in various ways, using a goto statement to transfer
	flow-of-control into the middle of a for loop is not portable and is considered
	unsafe.
	
	The most common use for the goto statement in structured programming involves
	error handling. In these cases, the goto statement usually leads out of a deeply
	nested for loop.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
