---
layout: page
title: "Q122443: FIX: C2664 When Converting Type Defined Array to Const Array"
permalink: kb/122/Q122443/
---

## Q122443: FIX: C2664 When Converting Type Defined Array to Const Array

	Article: Q122443
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The C/C++ compiler incorrectly generates a C2664 error when attempting to
	implicitly convert from a typedef non-constant array type to a constant array
	type. The compiler reports an error that indicates a conversion from a constant
	array type to a non-constant array type. The following error message is reported
	by the compiler if a non-constant integer array type is used:
	
	  test.cpp(#): error C2664: 'copy' : cannot convert parameter 1 from 'const
	  int[2]' to 'int[2]'
	
	The # is the line number where the error occured.
	
	RESOLUTION
	==========
	
	To work around the problem, typedef a constant array type instead of using the
	keyword 'const' together with the typedef non-constant array type. An example is
	shown in the Sample Code section in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  /* -- test.cpp -- */ 
	
	  typedef       int ARRAY[2];
	  typedef const int CONST_ARRAY[2];
	
	  void copy ( const ARRAY src, ARRAY dest );
	  void copy1( CONST_ARRAY src, ARRAY dest );
	
	  class CTest
	  {
	    private:
	      ARRAY pts[2];
	    public:
	      void operator=( const CTest& src );
	  };
	
	  void CTest :: operator=( const CTest& src )
	  {
	    for ( int i=0; i<2; i++ )
	    {
	
	     copy ( src.pts[i], pts[i] );   // Generates C2664
	     copy1( src.pts[i], pts[i] );   // Workaround
	
	    }
	  }
	
	Additional query words: 2.00 9.00 buglist2.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
