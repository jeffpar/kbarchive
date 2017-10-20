---
layout: page
title: "Q123092: FIX: Duplicate Source Files Cause Breakpoint Failures"
permalink: /kb/123/Q123092/
---

## Q123092: FIX: Duplicate Source Files Cause Breakpoint Failures

{% raw %}

	Article: Q123092
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the same source file (or a copy with the same name in a different
	directory) is included in both a DLL and its calling application, the debugger
	can become confused about which module in memory to set breakpoints in. For
	example, a breakpoint set in the source file belonging to the DLL may be hit in
	the DLL or in the application's copy of the source file, and the module in which
	the breakpoint is hit may change from one debugging session to another.
	
	WORKAROUND
	==========
	
	The best solution is to not use source files that have the same name in the DLL
	and in its calling application. If you can't avoid it, try using the context
	operator to resolve the breakpoint conflict. To do this, specify both the source
	file and the EXE or DLL name in the breakpoint location field of the Breakpoints
	dialog box using this syntax:
	
	     {,source.cpp,target.exe} .line_number
	
	-or-
	
	     {,source.cpp,target.dll} .line_number
	
	Here line_number is the actual decimal line number in the source code. You may
	need to use full path names when specifying the source and the EXE or DLL
	names.
	
	NOTE: This workaround may not always be successful. If it doesn't work, you must
	either rename one of the source file copies or live with the errant breakpoint
	behavior.
	
	MORE INFORMATION
	================
	
	For additional information on the purpose and use of the context operator, refer
	to the "Using Breakpoints" section in the "Using the Debugger" chapter of the
	Visual C++ Books Online "Visual C++ User's Guide." Specifically, in Visual C++
	2.0, refer to the "General Syntax for Breakpoint Locations" entry in the "Using
	Breakpoints" section; in Visual C++ 4.0, refer to the "Advanced Breakpoint
	Syntax" entry of the "Using the Breakpoints Dialog Box" in the "Using
	Breakpoints" section.
	
	Additional query words: 2.00 2.10 4.00 VWB IDE
	
	======================================================================
	Keywords          :  
	Version           : 2.00 2.10 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
