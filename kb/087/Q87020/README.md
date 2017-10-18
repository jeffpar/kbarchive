---
layout: page
title: "Q87020: INFO: New C++ Type Conversions May Generate C2446 or C2664"
permalink: kb/087/Q87020/
---

## Q87020: INFO: New C++ Type Conversions May Generate C2446 or C2664

	Article: Q87020
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbCPPonly kbVC100 kbVC150 kbVC200 kbVC400 kbVC500
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft compilers listed above, in accordance with restrictions defined by
	the Annotated Reference Manual (ARM) and later X3J16 working papers, will
	prevent type conversions that would potentially allow the modification of data
	qualified as type "const". An example of this is as follows:
	
	  int             I =    8;
	  int          * pI =   &I;
	
	  const int      cI =   11;
	  const int  *  pcI =  &cI;
	  const int ** ppcI = &pcI;
	
	  ppcI = &pI; // This should not be allowed because later attempts
	              // to perform the assignment "*pI = 0;" would
	              // modify the value "**ppcI" that was declared as
	              // being constant.
	
	If the code above is compiled using C/C++ version 7.0, the following two errors
	will be generated:
	
	  error C2446: '=' : no conversion between 'const int __near * __near * ' and
	  'int __near *__near * '
	
	  error C2664: 'f_ppci' : cannot convert parameter 1 from 'int __near *__near *
	  ' to 'const int __near *__near * '
	
	If this same code is compiled using Visual C++ version 4.0, the following error
	will be generated:
	
	  error C2446: '=' : no conversion from 'int ** ' to 'const int ** ' (new
	  behavior; please see help)
	
	If this same code is compiled using Visual C++ version 5.0, the following error
	will be generated:
	
	  error C2440: '=' : cannot convert from 'int ** ' to 'const int ** '
	  Conversion loses qualifiers
	
	The Microsoft C/C++ compiler is correctly generating the errors. According to the
	ANSI committee for C++, the compiler should produce an error.
	
	MORE INFORMATION
	================
	
	There are eight legal conversions allowed by C++ (see ARM section 13.2 page 3),
	two of which are applicable to this example (if T represents a type):
	
	  T  --> T const (or const T)
	  T* --> T const * (or const T *)
	
	Using the T symbol, the example given above (ppcI = &pI) could be expressed
	as follows:
	
	  T** --> const T**
	
	To demonstrate why this conversion is not legal, substitute for T in the rules
	given earlier and show that the conversion "T** --> const T**" cannot be
	derived from those two rules:
	
	Let "int**" be T. By the first rule, then, the following is possible:
	
	  int** --> int** const
	
	You might immediately assume that because "T const" is the same as "const T",
	then "int** const" is the same as "const int**", but this is not true. The
	"const" keyword modifies whatever falls directly to the right of it. For
	example:
	
	const int* D;  // "int" is to the right of "const," so D is a
	              // pointer to a constant integer. The compiler
	              // will protect the value of *D
	
	int* const D;  // D is to the right of "const" and D is a
	              // pointer, so D would be called a "constant pointer
	              // to an integer." The compiler will allow you to
	              // modify *D, but not D itself.
	
	const int D;   // These two are identical.
	int const D;
	
	Hence, the first legal conversion (T --> T const) does not apply to this
	example.
	
	Try the second rule, and let 'int*' be T, which gives you:
	
	  'int*'* --> 'int*' const *
	
	The type "int* const *" can be translated as "a constant pointer to a pointer
	that points to an integer." The target is "a pointer to a pointer that points to
	a constant integer." So the second legal conversion is also not applicable to
	this example. With this, it is apparent that there is no legal combination of
	rules that will allow the conversion "T** --> const T**" to be made.
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbCPPonly kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
