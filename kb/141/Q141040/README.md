---
layout: page
title: "Q141040: BUG: Step Out in Debugger Ignores Try/Catch Scope"
permalink: /kb/141/Q141040/
---

## Q141040: BUG: Step Out in Debugger Ignores Try/Catch Scope

	Article: Q141040
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDebug kbide
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The debug Step Out command does not step you to the expected function when used
	within try/catch blocks.
	
	RESOLUTION
	==========
	
	As an alternative to Step Out, use one of the other debug step options such as
	Run to Cursor or Step Over.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	When you debug an application that uses either the C++ try or catch keywords or
	the MFC TRY or CATCH macros, attempting to step out of the try or catch block
	results in popping two frames off the stack. While executing code within the try
	block or the catch block, Step Out should step you out of the block and into the
	function that contains the try/catch blocks. Step Out instead takes you to the
	function that called the function containing the try/catch blocks.
	
	Additional query words: kbVC400bug shift f11 f7
	
	======================================================================
	Keywords          : kbDebug kbide 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:
	Issue type        : kbbug
	
	=============================================================================
	
