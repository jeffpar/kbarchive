---
layout: page
title: "Q168029: FIX: Global Optimizations (/Og) May Cause the Compiler to Hang"
permalink: /kb/168/Q168029/
---

## Q168029: FIX: Global Optimizations (/Og) May Cause the Compiler to Hang

	Article: Q168029
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbCompiler kbVC500bug kbVS97sp1fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler hangs when you are building a function that contains many
	expressions involving floating-point operations and the /Og optimization is
	enabled.
	
	RESOLUTION
	==========
	
	Disable global optimizations for the file that is causing the compiler to hang.
	You can do this with either #pragma optimize("g",off) or by using the /Og-
	switch.
	
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
	
	The following sample reproduces the problem. Other examples of this problem are
	too large to demonstrate in a small sample.
	
	Sample Code
	-----------
	
	      // Compile options: /c /Og
	      float f(int i)
	      {
	        switch(i)
	        {
	        case  1: return ( 1.1f * i );
	        case  2: return ( 2.2f * i );
	        case  3: return ( 3.3f * i );
	        case  4: return ( 4.4f * i );
	        case  5: return ( 5.5f * i );
	        case  6: return ( 6.6f * i );
	        case  7: return ( 7.7f * i );
	        case  8: return ( 8.8f * i );
	        }
	
	      return(2.0f*i);
	      }
	
	Additional query words: /O2 Release Maximum Speed
	
	======================================================================
	Keywords          : kbcode kbtool kbCompiler kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
