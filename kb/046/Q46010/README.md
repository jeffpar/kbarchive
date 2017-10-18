---
layout: page
title: "Q46010: PRB: CodeView Skips Over a Line of Source Code"
permalink: kb/046/Q46010/
---

## Q46010: PRB: CodeView Skips Over a Line of Source Code

	Article: Q46010
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC _IK
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CodeView does not recognize a breakpoint set in an application. If you run the
	program, execution does not stop on the breakpoint. If you single-step through
	the code, CodeView steps past the specified line. This problem also occurs in
	the QuickC and Visual C++ integrated debuggers.
	
	CAUSE
	=====
	
	This behavior occurs because CodeView is line-based and the C compiler is
	token-based.
	
	RESOLUTION
	==========
	
	This restriction is inherent in the CodeView design. To work around this
	behavior, select mixed source code and assembly language mode and place the
	breakpoint on the correct line of assembly language code.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate this problem.
	
	Sample Code
	-----------
	
	       /*
	      * Compile options needed: /Zi /Od
	      */ 
	
	     int i, j, k, l;
	
	     void main(void)
	     {
	        for (i = 0; i < 20; i++)
	        {
	           j = 0;
	           for (k = 0; k < 20; k++)
	              if (j == 0)
	                 break;
	
	           j = 1; /*** set breakpoint here ***/ 
	        }
	
	        l = 0;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC _IK 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Issue type        : kbprb
	
	=============================================================================
	
