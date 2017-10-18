---
layout: page
title: "Q167995: FIX: Calling a Function Returning double May Not Pop FPU Stack"
permalink: kb/167/Q167995/
---

## Q167995: FIX: Calling a Function Returning double May Not Pop FPU Stack

	Article: Q167995
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
	
	When you call a function that returns a double, from within a conditional, and
	build with /Od, the compiler does not pop the Coprocessor stack. This may cause
	a floating point stack overflow (0xc0000092), or later calculations involving
	the FPU to evaluate to -1.#IND00. The sample below demonstrates a form of this
	bug.
	
	RESOLUTION
	==========
	
	Enable global optimizations (/Og).
	
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
	
	Sample Code
	-----------
	
	     // Compile options needed: /Od
	     #include <float.h>
	     #include <stdio.h>
	     double func()
	     {
	       return 1.0;
	     }
	     void main()
	     {
	        int i;
	        double d=2.0;
	        // uncomment the next line to unmask exception
	        //_controlfp(_EM_OVERFLOW, _MCW_EM );
	        for( i = 0; i < 10; i++ )
	        {
	           if( func() );
	        }
	        // outputs -1.#IND00
	        printf("%f",d+d);
	     }
	
	Additional query words: STATUS_FLOAT_STACK_CHECK EXCEPTION_FLT_STACK_CHECK indefinite
	
	======================================================================
	Keywords          : kbcode kbtool kbCompiler kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
