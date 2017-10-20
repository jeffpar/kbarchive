---
layout: page
title: "Q143083: FIX: C2664 When Array Is Passed as a Parameter to a Function"
permalink: /kb/143/Q143083/
---

## Q143083: FIX: C2664 When Array Is Passed as a Parameter to a Function

{% raw %}

	Article: Q143083
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler will generate the following error when you pass a multiple
	subscript array to a function that expects a const of the same type of array:
	
	  error C2664: 'Func2' : cannot convert parameter 1 from 'int [4][4]' to
	  'const int [][4]' (new behavior; please see help)
	
	RESOLUTION
	==========
	
	Don't declare the parameter to be 'const' in the function definition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	     /* Compile options needed: None
	     */ 
	
	     typedef int Matrix1[4];
	     typedef int Matrix2[4][4];
	
	     void Func1( const Matrix1 ) {}
	
	     // Remove const in the following statement to work around
	
	     void Func2( const Matrix2 ) {}
	
	     void main()
	     {
	        Matrix1 a = {1,2,3,4};
	        Matrix2 b = {1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4};
	
	        Func1( a );
	        Func2( b );   // C2664 here
	     }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
