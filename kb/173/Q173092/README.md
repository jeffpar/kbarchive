---
layout: page
title: "Q173092: FIX: /Og Causes C1001 Traversing Non-Trivial List of Pointers"
permalink: kb/173/Q173092/
---

## Q173092: FIX: /Og Causes C1001 Traversing Non-Trivial List of Pointers

	Article: Q173092
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbCPPonly kbVC kbVC500bug kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling code similar to that in the sample below may cause the following error
	to be generated:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file
	  'E:\utc\src\\P2\main.c', line 379)
	
	RESOLUTION
	==========
	
	In the sample below, initializing all the local integers to known values,
	instead of leaving them uninitialized, will allow the code below to compile
	without generating the C1001 error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Sample
	------
	
	     // compile options: /Og /c
	     struct B;
	     struct A {
	        B * pB;
	     };
	     struct B {
	        A * pA;
	        B * pBnext;
	        B * pBb;
	     } ;
	     void f() {
	        int i;    // initialize for workaround
	        int j;    // initialize for workaround
	        int k = 0;
	        B * pB1;
	        B * pB2 = 0;
	        B * pB3;
	        B * rgpB[2];
	        int rgi[2];
	        while(1)
	        {
	           rgi[i] = k++;
	           pB2 = pB2->pBb;
	           rgpB[k] = pB2;
	           j = k++;
	           pB3 = rgpB[j];
	           pB1 = pB3->pA->pB;
	           while (pB1)
	              pB1 = pB1->pBnext;
	        }
	     }
	
	Additional query words: ICE
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbCPPonly kbVC kbVC500bug kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
