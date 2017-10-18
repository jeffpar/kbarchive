---
layout: page
title: "Q120878: PRB: Operator New Can't Be Called for CONST or VOLATILE Types"
permalink: kb/120/Q120878/
---

## Q120878: PRB: Operator New Can't Be Called for CONST or VOLATILE Types

	Article: Q120878
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbLangCPP kbVC
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to allocate memory from the heap on const or volatile types, you may
	see this error:
	
	  error C2468: 'new' : cannot allocate 'const'/'volatile' objects
	  (type is 'const int ')
	
	CAUSE
	=====
	
	This behavior is by design. For any type T, the type-specifier cannot contain
	const T or volatile T. For example, the following type-specifiers won't work:
	
	  new const int;        // Returns 'const int *'
	  new volatile int;     // Returns 'volatile int *'
	  new int * const;      // Returns 'int * const *'
	  new int * volatile;   // Returns 'int * volatile *'
	
	RESOLUTION
	==========
	
	The following type-specifiers will work:
	
	  new int const *;      // Returns 'int const **' (or 'const int**')
	  new int volatile *;   // Returns 'int volatile **'
	                        // (or 'volatile int**')
	
	MORE INFORMATION
	================
	
	For more information, please see the description on 'new Operator' in the C++
	Language Reference that comes with Microsoft C/C++ version 7.0 and Microsoft
	Visual C++ version 1.0 for Windows or Windows NT.
	
	Sample Code
	-----------
	
	     /* Compile options needed: /c /W3
	     */ 
	
	     void main(void)
	     {
	     // illegal
	
	       // Would return a 'const int *'
	            const int* i = new const int;
	
	       // Would return a 'volatile int *'
	            volatile int* j = new volatile int;
	
	       // Would return a 'int * const *'
	            int* const* k = new int * const;
	
	       // Would return a 'int * volatile *'
	            int* volatile* l = new int * volatile;
	
	     // legal
	
	         // pointer to const pointer to int
	             int const* *m = new int const *;
	
	             int volatile* *n = new int volatile *;
	     }
	
	Additional query words: errmsg 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kberrmsg kbLangCPP kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
