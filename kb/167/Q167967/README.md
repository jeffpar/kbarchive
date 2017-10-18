---
layout: page
title: "Q167967: FIX: /Og Increments the Index of a Loop Too Soon"
permalink: kb/167/Q167967/
---

## Q167967: FIX: /Og Increments the Index of a Loop Too Soon

	Article: Q167967
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbCodeGen kbCompiler kbVC500bug kbVS97sp1fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The array elements in the sample are assigned incorrect values when:
	
	1. You use the compiler option /Og (Global optimizations).
	
	2. You access the array elements using a pointer.
	
	The /Og (Global Optimizations) compiler option increments the index in a loop
	before executing the body of the loop. As a result, incorrect values are
	assigned to the array elements.
	
	RESOLUTION
	==========
	
	You can disable global optimization on a function-by-function basis using the
	optimize pragma with the g option. /Og- disables global optimization on a
	file-by-file basis.
	
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
	
	The following sample demonstrates the problem.
	
	Sample Code
	-----------
	
	     /*
	     * Compiler option: /Og
	     */ 
	
	     //typedef short* T ;
	     //typedef char* T ;
	
	     extern T rg ;
	
	     void f1()
	     {
	        int ndx = 0 ;
	        do
	        {
	           rg[ndx] = ndx++ ;
	        }
	        while (ndx < 5)
	     }
	
	     void f2()
	     {
	        int ndx = 0 ;
	        while(ndx < 5)
	        {
	           rg[ndx] = ndx ;
	           ndx++ ;
	        }
	     }
	
	     void f3()
	     {
	       int ndx = 0 ;
	       for(ndx = 0; ndx < 5; ndx++)
	       {
	          rg[ndx] = ndx ;
	       }
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbtool kbCodeGen kbCompiler kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
