---
layout: page
title: "Q129596: PRB: C2517, C2653, or C2600 If Local Struct Contains Class."
permalink: /kb/129/Q129596/
---

## Q129596: PRB: C2517, C2653, or C2600 If Local Struct Contains Class.

	Article: Q129596
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbCPPonly kbVC
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a C++ program, when you define a local struct, class, or union in which one
	or more of the fields contains a struct, class, or union type that defines
	member functions, the compiler generates these compiler errors:
	
	In Visual C++ versions 1.5x:
	
	  
	
	  Error C2517 : 'S' : right of '::' is undefined
	  Error C2270 : 'S' : modifiers not allowed on nonmember functions
	  Error C2561 : 'S' : function must return a value
	  Error C2510 : 'S' : left of '::' must be a class/struct/union
	  Error C2084 : function 'S' already has a body
	
	In Visual C++ versions 2.x:
	
	  
	
	  Error C2653 : 'S' : is not a class name
	  Error C2561 : 'S' : function must return a value
	  Error C2084 : function 'int _cdecl S(void)' already has a body
	
	In Visual C++ version 4.0:
	
	  
	
	  error C2600: 'a' : uses 'A' in local class 'S' causing compiler-
	  generated special member functions
	  error C2601: functions cannot be defined in local classes
	
	Using any MFC classes in the local structure will also cause this problem.
	
	CAUSE
	=====
	
	Function definitions are found in a local struct, class, or union definition.
	Support for member functions of local classes is part of the current draft of
	the C++ Working Paper, but they are not currently supported by Microsoft Visual
	C++. They will be supported in a future release of Microsoft Visual C++.
	
	RESOLUTION
	==========
	
	To work around the problem, choose one of the following two methods:
	
	- Declare the structure in a file scope instead of a unit scope.
	
	-or-
	
	- If a local structure is needed for a class member function, define it inside
	  the class definition instead of within the function body as in this example:
	
	     class B;
	     class A
	     {
	       struct S
	       {
	         int a;
	         B   b;
	       };
	     };
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In the sample code below, even though the local struct S does not, at first
	glance, appear to have any member functions, the compiler attempts to generate a
	non-trival default constructor and destructor for the local struct S. Because
	the compiler is not designed to support member functions of local classes, this
	hidden attempt to generate two such functions causes the compiler to produce the
	error messages descibed in the SYMPTOMS section of this article.
	
	Sample Code to Reproduce Behavior
	---------------------------------
	
	     /* Compile options needed: none
	     */ 
	     struct A
	     {
	        A() {};
	        ~A() {};
	     };
	     void main()
	     {
	        struct S
	        {
	           A a;
	        };
	        S s_test;
	     }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152
	Version           : :1.5,1.51,1.52,2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	
