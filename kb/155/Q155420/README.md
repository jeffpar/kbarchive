---
layout: page
title: "Q155420: PRB: C2146, C2065, C2143 Instantiating Template Class Objects"
permalink: /kb/155/Q155420/
---

## Q155420: PRB: C2146, C2065, C2143 Instantiating Template Class Objects

{% raw %}

	Article: Q155420
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The compiler generates error C2146 followed by C2065 and finally C2143, all
	pointing to the same line in the source.
	
	This sequence of errors can be caused by the following type of construct:
	
	  ClassA<int, ClassB<int>> iA ;
	
	The problem is caused by the consecutive closing chevrons ">>" at the end
	of the declaration.
	
	RESOLUTION
	==========
	
	The solution is to put a space between the consecutive >>, so the above
	code becomes:
	
	  ClassA<int, ClassB<int> > iA ;
	
	This is not a compiler bug. The language specification requires the space between
	the two ">"; otherwise, the lexical parser generates the token ">>",
	which is the largest possible token.
	
	Sample Code
	-----------
	
	  //Compile options needed: none
	  // test.cpp
	
	  template <class T>
	  class ClassB {} ;
	
	  template <class T1, class T2>
	  class ClassA{} ;
	
	  void main()
	  {
	      ClassA<int, ClassB<int>> iA; // causes C2146, C2065, C2143
	      //ClassA<int, ClassB<int> > iA;  //workaround
	
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
