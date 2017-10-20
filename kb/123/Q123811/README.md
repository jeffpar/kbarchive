---
layout: page
title: "Q123811: FIX: C2466: Using New to Allocate an Array of Size Zero"
permalink: /kb/123/Q123811/
---

## Q123811: FIX: C2466: Using New to Allocate an Array of Size Zero

{% raw %}

	Article: Q123811
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- 
	   - Microsoft C/C++ Compiler (CL.EXE) 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a constant expression that evaluates to zero is used to allocate an array,
	the following error occurs:
	
	  error C2466: cannot allocate an array of constant size 0
	
	RESOLUTION
	==========
	
	To work around the problem, use a variable that is initialized to zero in place
	of the constant when allocating the array.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++, 32-bit Edition,
	version 2.0.
	
	MORE INFORMATION
	================
	
	The operator new() can be called with the argument zero. A distinct (non- null)
	pointer to an object will be returned (see Section 5.3.3 of the ARM - M.A.Ellis,
	B.Stroustrup). This is the behavior observed with Visual C++ version 2.0.
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: none
	  */ 
	
	  char * p = new char[0];  // Causes C2466
	
	Additional query words: 1.00 1.50 7.00 8.00 8.00c
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
