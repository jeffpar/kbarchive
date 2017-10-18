---
layout: page
title: "Q164947: FIX: Nested Macros Cause Errors C2065 and C2064"
permalink: kb/164/Q164947/
---

## Q164947: FIX: Nested Macros Cause Errors C2065 and C2064

	Article: Q164947
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A nested macro may cause errors similar to the following:
	
	  error C2065: 'MACRO_B' : undeclared identifier
	
	  error C2064: term does not evaluate to a function
	
	  error C2143: syntax error : missing ';' before '}'
	
	CAUSE
	=====
	
	The second macro is not being expanded correctly. A preprocessed file for the
	following sample shows that MACRO_B is not expanded:
	
	        { MACRO_B ("Hello world.\n") };
	
	It should expand to:
	
	        { { printf("Hello world.\n"); } };
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32-bit Edition,
	versions 4.2.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	        /* Compile options needed: none
	        */ 
	
	        #include <stdio.h>
	
	        #define MACRO_A(A)      { MACRO_B A }
	        #define MACRO_B(A)      { printf(A); }
	
	        void main()
	        {
	            MACRO_A(("Hello world.\n"));
	        }
	
	Additional query words: kbVC420bug kbVC400bug
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
