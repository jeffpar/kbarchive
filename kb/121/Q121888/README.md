---
layout: page
title: "Q121888: PRB: C2440 When Initializing an Object Within an Object"
permalink: /kb/121/Q121888/
---

## Q121888: PRB: C2440 When Initializing an Object Within an Object

{% raw %}

	Article: Q121888
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC420 kbVC500 kbVC6
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an object is used to initialize an embedded structure, the compiler produces
	error C2440: 'initializing': cannot convert from '<type1> ' to
	'<type2> '.
	
	CAUSE
	=====
	
	This behavior is by design. Although an aggregate that is a class may be
	initialized with an object of its class, there is not a similar provision for
	subaggregates.
	
	RESOLUTION
	==========
	
	To work around this behavior, use a member by member initialization.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates this problem and its resolution. The
	error produced in the initialization of two2 is error C2440: 'initializing' :
	cannot convert from 'struct ::One ' to 'int '.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  struct One
	  {
	     int  i;
	  };
	
	  struct Two
	  {
	     int  j;
	     One  one;
	     int  k;
	  };
	
	  One one1 = { 3 };              // Initialize structure member - OK
	
	  One one2 = one1;               // Initialize structure - OK
	
	  Two two1 = { 1, one1, 3 };     // Error, can not initialize subaggregate
	
	  Two two2 = { 1, one1.i, 3 };   // Member by member initialization - OK
	
	Additional query words: 8.00 8.00c 9.00 10.00 11.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
