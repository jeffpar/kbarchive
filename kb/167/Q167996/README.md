---
layout: page
title: "Q167996: FIX: /Og Causes Invalid Double Result Returned from Function"
permalink: /kb/167/Q167996/
---

## Q167996: FIX: /Og Causes Invalid Double Result Returned from Function

	Article: Q167996
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbCompiler kbVS97sp1fix kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are building with /Og and you call a function that returns a double, it
	apparently returns invalid results. The sample below demonstrates one form of
	this bug.
	
	CAUSE
	=====
	
	The compiler generating code pops the FPU stack without storing the result.
	
	RESOLUTION
	==========
	
	Disable /Og around the function that is calling the function returning double by
	using #pragma optimize("g",off).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	If you stepping through the following code in a debugger, demonstrates how the
	return of f1 is not stored in d.
	
	Sample Code
	-----------
	
	     // Compile options needed: /Og
	     double f1()
	     {
	        return 1.0;
	     }
	     void f2()
	     {
	        double d = 0.0;
	        d=f1();
	     }
	
	Additional query words: /O2
	
	======================================================================
	Keywords          : kbcode kbtool kbCompiler kbVS97sp1fix kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
