---
layout: page
title: "Q132165: FIX: Non-const Conversion Operators Allowed on const Object"
permalink: kb/132/Q132165/
---

## Q132165: FIX: Non-const Conversion Operators Allowed on const Object

	Article: Q132165
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.20
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1, 2.20 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual C++ illegally allows use of non-const member functions with const
	objects. Because of this, const data could be modified.
	
	Visual C++ correctly generates errors in most situations where non-const member
	functions are used on const objects, but fails to generate errors in the case of
	non-const conversion operators.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The sample code should generate this error message:
	
	  error C2664: 'x_t::x_t(const struct x_t&)' : cannot convert parameter 1
	  from 'struct x_t*const ' to 'const struct x_t&'
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: none
	  */ 
	  struct x_t {
	    int i;
	    operator int() {return i;}
	  };
	
	  void func(const x_t& x)
	  {
	      int j = (int)x;     //C2664 should be generated on this line
	  }
	
	Additional query words: 1.00 2.00 2.10 2.20 7.00 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
