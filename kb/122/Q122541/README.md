---
layout: page
title: "Q122541: BUG: Goto() Within Try-Except Block Causes C2705 Error"
permalink: kb/122/Q122541/
---

## Q122541: BUG: Goto() Within Try-Except Block Causes C2705 Error

	Article: Q122541
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Goto statement within a try-except block causes the following incorrect error
	if the destination of the Goto is within the same try-except block:
	
	  error C2705: '<label>' : illegal jump into __try scope
	
	RESOLUTION
	==========
	
	One workaround demonstrated in the example in the More Information section of
	this article is to remove the extra braces around the block containing the Goto.
	This places the goto() at the same nesting level as the destination.
	
	Another workaround is to use the __leave keyword to jump to the end of the
	try-except block. If you do this, execution resumes after the end of the
	exception handler. One difference between __leave and Goto is that the __leave
	statement does not cause stack unwinding, so it is more efficient than goto().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate both the problem and the
	workaround:
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	  class TestClass {
	        public:
	          TestClass() {}
	         ~TestClass() {}
	  };
	  void main (void) {
	      __try
	      {
	         {
	         TestClass test;
	         if (1) {
	            goto bail;
	  //         __leave;    // Use this instead of the goto
	         }
	      }
	      bail:  ;
	      }
	      __except(0) { }
	  }
	
	Additional query words: 8.00 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbcode kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
