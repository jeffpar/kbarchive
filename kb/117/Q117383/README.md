---
layout: page
title: "Q117383: BUG: C2483 Instantiating Objects with the Thread Attribute"
permalink: kb/117/Q117383/
---

## Q117383: BUG: C2483 Instantiating Objects with the Thread Attribute

	Article: Q117383
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC50
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Instantiating a C++ object with the thread attribute generates the following
	error message if the class contains private or protected members:
	
	  error C2483: object with constructor cannot be declared 'thread'
	
	To paraphrase page 397 of the "C++ Language Reference," class objects may be
	instantiated with the thread attribute if the objects do not need to be
	constructed or destructed. However, this error occurs even though the class does
	not have a constructor or a destructor.
	
	CAUSE
	=====
	
	Currently, thread local storage has only been implemented for aggregate types.
	An aggregate type is defined as an array or object of a class with no
	constructors, no private or protected members, no base classes, and no virtual
	functions. In this case, private or protected members make the class an
	aggregate; therefore, the error message is generated.
	
	RESOLUTION
	==========
	
	To avoid this error, make all private or protected members of the class public
	members.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates how to produce and avoid the error message.
	Uncomment the "public" keyword before the data member to avoid the error.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /c /MT
	  */ 
	
	  class B
	  {
	  // Uncomment the following line to eliminate compiler error
	  // public:
	        int i;
	  };
	
	  __declspec(thread) B b; // error C2483
	
	Additional query words: kbVC400bug 8.00 9.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
