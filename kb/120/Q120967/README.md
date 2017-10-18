---
layout: page
title: "Q120967: BUG: Try Blocks Within a Switch Statement Behave Incorrectly"
permalink: kb/120/Q120967/
---

## Q120967: BUG: Try Blocks Within a Switch Statement Behave Incorrectly

	Article: Q120967
	Product(s): Microsoft C Compiler
	Version(s): 2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbVC kbVC200bug kbVC400bug kbVC410 kbVC420bug kbVC500bug kb
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A try block within a switch statement may cause the exception to be handled
	incorrectly, as illustrated by the sample code in the MORE INFORMATION section
	below.
	
	CAUSE
	=====
	
	The compiler doesn't recognize catch blocks within the switch statement.
	Therefore, the compiler attempts to link the try block to the next catch block
	outside the switch. In the sample code in the More Information section below,
	the second catch block is executed after the exception is thrown.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following sample code demonstrates the problem:
	
	  /* Compile options needed: /GX
	  */ 
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	     int i = 0;
	
	     try
	     {
	        switch ( i )
	        try
	        {
	           case 0:
	              throw i;
	        }
	        catch( int )
	        {
	        /* Should be caught here but isn't */ 
	           printf( "Passed.\n" );
	        }
	     }
	     catch (...)
	     {
	     /* Is caught here incorrectly */ 
	        printf( "Failed.\n" );
	     }
	  }
	
	Additional query words: kbVC400bug 9.00 10.00 10.10 10.20 exception handling
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbVC kbVC200bug kbVC400bug kbVC410 kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
