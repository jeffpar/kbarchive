---
layout: page
title: "Q167350: FIX: Default Constructor Argument Can Not Use Namespace Scope"
permalink: kb/167/Q167350/
---

## Q167350: FIX: Default Constructor Argument Can Not Use Namespace Scope

	Article: Q167350
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbVC500bug kbVC600fixkbbuglist
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you give the default argument value for a class constructor a value that
	references a namespace via the '::' operator, a C2065 error occurs as follows:
	
	  [FileName](12) : error C2065: 'inside' : undeclared identifier
	
	RESOLUTION
	==========
	
	To work around this problem, use either the using directive to instruct the
	compiler to consider the namespace as a possible place to find all symbols, or
	the using declaration to tell the compiler to consider the namespace for the
	specific symbol that is referenced by the default argument. Please see the
	workarounds noted in the sample code below. Note that these workarounds make it
	unnecessary to use the '::' operator to explicitly reference the namespace, but
	it is also not necessary to remove it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile Options Needed: None */ 
	     namespace MyNameSpace {
	     int inside = 34;
	     };
	
	     // Uncomment the following to workaround via the using declaration
	     //using MyNameSpace::inside;
	     // Uncomment the following to workaround via the using directive
	     //using namespace MyNameSpace;
	
	     class MyClass {
	     public:
	     MyClass(int iVal = MyNameSpace::inside);
	     };
	
	When you compile the code above, the following error message appears:
	
	  [FileName](12) : error C2065: 'inside' : undeclared identifier
	
	Additional query words: name space
	
	======================================================================
	Keywords          : kbtool kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
