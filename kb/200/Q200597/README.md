---
layout: page
title: "Q200597: BUG: Debugger Cannot Step Out of Recursive Function"
permalink: kb/200/Q200597/
---

## Q200597: BUG: Debugger Cannot Step Out of Recursive Function

	Article: Q200597
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500bugkbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to step out of a recursive function that has called itself may result
	in no action by the Visual C++ debugger.
	
	CAUSE
	=====
	
	This problem is caused by the debugger's inability to differentiate between the
	current address context and the return address context if the addresses are the
	same. As a result, the debugger interprets the current address as the step-out
	breakpoint and breaks immediately without executing any instructions.
	
	RESOLUTION
	==========
	
	To work around this problem, for each step-out, just perform a step-over to make
	the current address different than the return address, then perform a step-out.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500bug kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
