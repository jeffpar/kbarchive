---
layout: page
title: "Q122118: PRB: Editing While Debugging Causes Breakpoint Misalignment"
permalink: kb/122/Q122118/
---

## Q122118: PRB: Editing While Debugging Causes Breakpoint Misalignment

	Article: Q122118
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During debugging it is common to find bugs and make minor code changes as you
	continue debugging. However, editing source code while in the middle of a
	debugging session may cause new or existing "Break At Location" breakpoints to
	become misaligned with their corresponding instructions. ("Break At Location" is
	the default type if the breakpoints are set using the toolbar button in the
	Visual C++ development environment.)
	
	If, after editing, the source file remains the same in terms of line positions,
	then breakpoints will appear as expected. However, if the source file changes in
	terms of line positions, new breakpoint indicators (the red dots) will shift
	position with respect to their corresponding instruction by the number of lines
	added or deleted before each breakpoint.
	
	Alternately, the red dot breakpoint indicators for pre-existing breakpoints will
	follow their corresponding instructions during editing, but after the rebuild
	warning, the program execution continues and the pre-existing breakpoints are
	hit, the yellow current instruction pointer will be out of sync with the
	corresponding instruction by the number of lines added or deleted before each
	breakpoint.
	
	CAUSE
	=====
	
	The debugger does not track line number changes during editing, so it does not
	update new breakpoint and the current instruction pointer indicators
	accordingly.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: IDE VWB visual workbench source window
	
	======================================================================
	Keywords          : kbDebug kbide kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : :2.0,2.1,2.2,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
