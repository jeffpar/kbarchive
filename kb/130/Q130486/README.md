---
layout: page
title: "Q130486: PRB: LNK2001 on Pure Virtual Operator="
permalink: /kb/130/Q130486/
---

## Q130486: PRB: LNK2001 on Pure Virtual Operator=

	Article: Q130486
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building an application that contains a base class with a pure virtual
	operator= function and a class derived from the base class with a defined
	operator= function, a following link error is generated for the base class's
	operator=:
	
	  error LNK2001: unresolved external symbol
	
	This also occurs if the classes reside in a DLL and are declared with the
	__declspec( dllexport ) storage-class attribute.
	
	In Visual C++ .NET you will receive the following error message:
	
	  LNK2019: unresolved external symbol
	
	CAUSE
	=====
	
	This behavior is by design. The assignment operator is not inherited. Normal
	inheritance rules do not apply, and declaring it pure virtual does not have the
	usual affect.
	
	RESOLUTION
	==========
	
	Since operator= is not inherited, any declaration of operator= in the base class
	is unused and unnecessary. Do not declare the operator= in the base class.
	
	MORE INFORMATION
	================
	
	When built, the following code sample will generate the discussed LNK2001 error.
	Comment the declaration of the operator=() member in the base class to resolve.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  class A
	  {
	  public :
	     // To workaround LNK2001, comment the following line.
	     virtual const A& operator=( const A& f ) = 0;
	  };
	
	  class B : public A
	  {
	  public :
	     const A& operator=( const A& g ) {return g;}
	  };
	
	  B aB1, aB2;
	
	  void main( void )
	  {
	     aB2 = aB1;
	  }
	
	Additional query words: 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :1.0,2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
