---
layout: page
title: "Q114536: PRB: C2129 Generated With Forward Reference Used in Prototype"
permalink: /kb/114/Q114536/
---

## Q114536: PRB: C2129 Generated With Forward Reference Used in Prototype

	Article: Q114536
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,7.0
	Operating System(s): 
	Keyword(s): kbCompiler
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a C++ source file which uses a forward reference to a struct in a
	function prototype will cause the compiler to generate the following error:
	
	  error C2129: static function 'Function' declared but not defined
	
	The sample code shown below can be used to illustrate this problem. Note: the
	error does not occur if the same file is compiled as a C source file.
	
	CAUSE
	=====
	
	This is by design. In C++, a tag not previously seen is entered in the current
	scope. In the sample code, the ForwardRef appearing in the parameter list is a
	different struct than the one defined afterwards.
	
	RESOLUTION
	==========
	
	To resolve this problem, move the declaration of the struct so that it is
	located before the function prototype.
	
	Sample Code
	-----------
	
	     /* Compile options needed: /Tp to force this to be compiled as a C++
	     *                          source file.
	     */ 
	
	     static void Function( int i, struct ForwardRef * frPtr );
	
	     // To work around this problem place the following declaration before
	     // the Function prototype.
	
	     struct ForwardRef
	     {
	         int data;
	     };
	
	     void main( void )
	     {
	         struct ForwardRef *frPtr;
	         int j;
	         Function( j, frPtr );
	     }
	
	     static void Function( int i, struct ForwardRef *frPtr ){}
	
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
