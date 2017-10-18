---
layout: page
title: "Q168932: BUG: Multiple Based Conversion Results May Be Incorrect"
permalink: kb/168/Q168932/
---

## Q168932: BUG: Multiple Based Conversion Results May Be Incorrect

	Article: Q168932
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbCompiler kbVC500bug kbVC600bug
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform multiple conversions on pointers that are declared with the
	__based keyword, that have the same base, and are compiled as C++, the
	conversion results may be incorrect.
	
	RESOLUTION
	==========
	
	To work around this problem, limit __based type conversions to one. The sample
	code below demonstrates how to implement some workarounds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	  /* Compiler options: Use .cpp extension or /Tp switch */ 
	  #include <stdio.h>
	
	  void *pBase   = (void*)0x00010000;
	  void *pGlobal = (void*)0x00010000;
	
	  void __based(pBase)* SomeFunction()
	  {
	      static void* pv = (void*)0x00010000;
	      return( void __based(pBase)* )pv;
	  }
	
	  void main()
	  {
	      int __based(pBase)* test1;
	
	      /* The following conversion always fails.  A possible
	         solution is to have SomeFunction() simply return a
	         void*.
	      */ 
	      test1 = ( int __based(pBase)* )SomeFunction();
	      printf(  "Conversion 1 = %08X, should be 00000000\n",
	               (unsigned long)test1 );
	
	      /* This conversion fails on some versions.  In this
	         example, the double conversion isn't necessary.
	      */ 
	      test1 = ( int __based(pBase)* )( (void __based(pBase)*)
	                                            ((void*)0x00010000) );
	      printf(  "Conversion 2 = %08X, should be 00000000\n",
	               (unsigned long)test1 );
	
	      /* This conversion always works.
	      */ 
	      test1 = ( int __based(pBase)* )( ( void __based(pBase)* )
	                                                        pGlobal );
	      printf(  "Conversion 3 = %08X, should be 00000000\n",
	               (unsigned long)test1 );
	  }
	
	Output:
	
	Conversion 1 = FFFF0000, should be 00000000
	Conversion 2 = 00010000, should be 00000000
	Conversion 3 = 00000000, should be 00000000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbCompiler kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
