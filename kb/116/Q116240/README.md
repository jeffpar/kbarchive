---
layout: page
title: "Q116240: FIX: Compiler Errors Initializing const Reference to an Array"
permalink: /kb/116/Q116240/
---

## Q116240: FIX: Compiler Errors Initializing const Reference to an Array

{% raw %}

	Article: Q116240
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410bug kbVC42
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Initializing a "const" reference to an array with a "non-const" array causes
	incorrect compiler errors to be generated. Two such errors are C2607 and C2561.
	
	CAUSE
	=====
	
	The C++ compiler does not properly handle initialization of a "const T&",
	where T is an array. For example, you should be able to initialize a variable of
	type "const float (&ref)[3][2]" with a variable of type "float [3][2]", but
	the compiler does not handle this case. Furthermore, interactions between const
	declarations and typedefs of arrays do not work in all circumstances.
	
	RESOLUTION
	==========
	
	To work around the problem, either do not use the const specifier or add
	explicit casts to the appropriate const types.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates the problem. Compiling it yields at least one
	of the following error messages:
	
	  error C2607: 'initializing' : cannot implicitly convert a 'int [3][2]' to a
	  'int __near &[3][2]' that is not const
	
	  error C2561: 'getMtx' : function must return a value
	
	To work around the problem, use each commented line in the program to replace the
	line immediately above it.
	
	Note: Simply removing the const specifier from the getMtx function's return type
	eliminates the problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	  typedef int Matrix[3][2];
	
	  class Data
	  {
	      Matrix Mtx;
	      const Matrix& getMtx();
	      // const int (&getMtx() const)[3][2];
	  };
	
	  inline const Matrix& Data::getMtx()
	  // inline const int (&Data::getMtx() const)[3][2]
	  {
	      return Data::Mtx;
	      // return (const int (&)[3][2])Data::Mtx[0][0];
	  }
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
