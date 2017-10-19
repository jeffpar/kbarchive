---
layout: page
title: "Q125473: DOC: Pass Counts for Breakpoints Undocumented"
permalink: /kb/125/Q125473/
---

## Q125473: DOC: Pass Counts for Breakpoints Undocumented

	Article: Q125473
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	A pass count in a breakpoint allows you to stop on the nth time a
	breakpoint condition is met. The integrated debugger in Visual C++ 2.0
	includes this feature, but it was not documented or exposed.
	
	To enable this feature, use the /BPPASSC:yes switch on the MSVC command
	line. This enables the pass count and exposes a Pass Count control in the
	breakpoint dialog.
	
	To set this type of breakpoint, fill in the fields in the breakpoint
	dialog as follows:
	
	  Location: .25
	  Expression: x==34
	  Pass Count: 1022
	
	NOTE: The Pass Count is the number of times to skip, so a count of 1022
	will stop execution on the 1023rd time.
	
	Additional query words: 2.00 2.10
	
	======================================================================
	Keywords          : kbDebug kbide 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC200 kbVC210 kbVC32bitSearch
	Version           : :2.0,2.1,6.0
	
	=============================================================================
	
