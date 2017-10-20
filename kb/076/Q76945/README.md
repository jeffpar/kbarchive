---
layout: page
title: "Q76945: FIX: Sample Program BELL.C Causes R6001 Error"
permalink: /kb/076/Q76945/
---

## Q76945: FIX: Sample Program BELL.C Causes R6001 Error

{% raw %}

	Article: Q76945
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The sample program BELL.C, which is shipped with the Microsoft Macro Assembler
	(MASM) version 6.0, generates the following error when compiled and run:
	
	  run-time error R6001
	  - null pointer assignment
	
	CAUSE
	=====
	
	The run-time error R6001 occurs because the error-checking routine _nullcheck()
	is being invoked after the program has terminated to determine whether the
	contents of the NULL segment have been changed. Because this is a mixed C and
	assembly language program, the _nullcheck() routine is expecting to see the
	Microsoft C run-time library message in the NULL segment.
	
	However, because of the segment ordering that is done in the assembly code, this
	is not what is actually in the NULL segment. Although the code in the NULL
	segment is correct, it is not in the order that _nullcheck() is expecting.
	
	RESOLUTION
	==========
	
	As stated in the online help, the null pointer check can be suppressed by
	defining your own routine named _nullcheck() that does nothing. To prevent the
	above error, place the following _nullcheck() definition in the file BELL.C.
	
	     void _nullcheck (void)
	      {
	      }
	
	The /NOE link option must also be used to avoid multiple symbol definitions. The
	call to _nullcheck() will be satisfied by your definition of _nullcheck(), and
	the library version will not be loaded.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	Additional query words: BELL.MAK buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
