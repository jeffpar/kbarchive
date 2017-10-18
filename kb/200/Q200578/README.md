---
layout: page
title: "Q200578: BUG: Cannot Step Over Function That Contains Data Breakpoint"
permalink: kb/200/Q200578/
---

## Q200578: BUG: Cannot Step Over Function That Contains Data Breakpoint

	Article: Q200578
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600bug kbDSupportkbbuglist
	Last Modified: 11-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to step over a function that contains a data breakpoint anywhere
	in its execution path and the data expression does not evaluate to true, the
	Developer Studio debugger may step into the function or appear to hang.
	
	CAUSE
	=====
	
	The RISC implementation of the breakpoint handler fails to differentiate between
	normal breakpoints and data breakpoints, and handles the data breakpoints
	incorrectly.
	
	RESOLUTION
	==========
	
	Disable or remove all data breakpoints when stepping through code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Data breakpoints are discouraged on Windows NT RISC platforms because most of
	these architectures don't support debug breakpoint registers, resulting in
	extremely poor performance.
	
	Additional query words: WBDebug VCAlpha
	
	======================================================================
	Keywords          : kbVC500bug kbVC600bug kbDSupport kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
