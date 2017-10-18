---
layout: page
title: "Q152131: FIX: C1001: Extern in Function Call or Bad Type in Prototype"
permalink: kb/152/Q152131/
---

## Q152131: FIX: C1001: Extern in Function Call or Bad Type in Prototype

	Article: Q152131
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.04.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using extern in a function call, the compiler generates an Internal
	Compiler Error (ICE). A syntax error should be generated instead.
	
	When specifying an illegal type in a function prototype within a function, the
	compiler generates an ICE. A syntax error should be generated instead.
	
	Both of the above situations result in the following error message when using
	Visual C++ 4.0:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	
	  (compiler file 'msc1.cpp', line 899)
	
	When using Visual C++ 4.1, the error message in both situations is the
	following:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	
	  (compiler file 'msc1.cpp', line 1090)
	
	When using Visual C++ 4.2, the error message in both situations is the
	following:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	
	  (compiler file 'msc1.cpp', line 1089)
	
	RESOLUTION
	==========
	
	Do not use extern in a function call.
	
	Specify a legal type in the argument list of the function prototype.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	     //Code sample 1
	     int func(int);
	     void main () {
	        extern func(1);   //C1001 (ICE) on this line; "extern" is illegal
	     }
	     //Code sample 2
	     int func(int);
	     void main () {
	        extern int func(1);  //C1001 (ICE); "1" is an illegal type
	     }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
