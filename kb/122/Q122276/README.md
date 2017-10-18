---
layout: page
title: "Q122276: FIX: Library Version of atan2(0,0) Does Not Return 0"
permalink: kb/122/Q122276/
---

## Q122276: FIX: Library Version of atan2(0,0) Does Not Return 0

	Article: Q122276
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCRT kbVCkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.10, 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The on-line help and documentation for Visual C++ specify that calling the atan2
	function should return 0.0 if both parameters are 0. The documentation is
	correct, but the library version of atan2() does not return 0.0, rather, it
	returns a "not a number" value.
	
	RESOLUTION
	==========
	
	The true intrinsic version of atan2() works as documented. There are two ways to
	instruct the compiler to use the true intrinsic version of the atan2()
	function:
	
	- Compile with the /Oi and /Og switches, or any switch that implies them both
	  (such as /Ox or /O2). Using /Oi and /Og together instructs the compiler to
	  replace function calls with their true intrinsic version, if one exists.
	  Therefore, when using these switches together, the library version of atan2()
	  is never called, and the problem does not occur.
	
	  NOTE: /Oi and /Og are implied by the /O2 switch, which is the current default
	  for release mode builds.
	
	-or-
	
	- Use the #pragma intrinsic directive at the global level in the source file
	  that requires the use of atan2() as in this example:
	
	     #pragma intrinsic(atan2)
	
	- The #pragma stays in effect for the entire source file. Use the #pragma
	  function directive to instruct the compiler to use the library version of
	  atan2(). Because the #pragma intrinsic is equivalent to using /Oi on the
	  command line, the source file must be compiled with /Og, as above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++ 32-bit
	Edition, version 4.1.
	
	MORE INFORMATION
	================
	
	A true intrinsic function is a function that gets expanded inline without the
	overhead of a function call. These can be faster than full function calls. In
	the case of atan2(), both arguments are pushed onto the floating point stack,
	and the arctangent of y/x is calculated via the fpatan instruction.
	
	The "not a number" value is -1.#IND00.
	
	Sample Code
	-----------
	
	  /* Compile options needed to show the problem: none
	     Compile options for workaround /Oi /Og
	  */ 
	
	  #include <stdio.h>
	  #include <math.h>
	
	  void main(void) {
	       double testreturn;
	
	       testreturn = atan2(0.0,0.0);
	       printf("testreturn = %lf",testreturn);
	  }
	
	Additional query words: 1.00 1.10 2.00 4.00 partial arctangent
	
	======================================================================
	Keywords          : kbCRT kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
