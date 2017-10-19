---
layout: page
title: "Q172887: FIX: Debugger Cannot Safely Change Current Location"
permalink: /kb/172/Q172887/
---

## Q172887: FIX: Debugger Cannot Safely Change Current Location

	Article: Q172887
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500bug kbVC600fix
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0, used with:
	      - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The debugger cannot safely change the current location of a stopped program (for
	example, using the Set-Next-Statement function) from inside a catch handler to
	the body of the program.
	
	CAUSE
	=====
	
	This problem is related to the difference between Intel and Alpha exception
	handling. The catch handler on the Alpha architecture is effectively a separate
	function that allows clean handling of exceptions that are raised within the
	exception handler. Any change of the current location from the handler to the
	body of the program would bypass the handler epilogue and result in incorrect
	values in the registers, and an incorrect stack frame.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	Additional query words: IP instruction
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
