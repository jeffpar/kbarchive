---
layout: page
title: "Q87015: INFO: C2466 Error When Allocating an Array of Length 0"
permalink: /kb/087/Q87015/
---

## Q87015: INFO: C2466 Error When Allocating an Array of Length 0

{% raw %}

	Article: Q87015
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Microsoft C/C++, the constant expression that you use to allocate
	or declare an array must be an integral type greater than zero. If not, the
	following error will occur:
	
	  C2466: Cannot allocate an array of constant size 0
	
	The following examples are some ways this error can occur:
	
	     int *p = new X[0];        // error
	     C *aC = new [int_var] C;  // error
	     int a[0];                 // error
	     int func(char *[0]);      // error
	
	NOTE: This does not apply to Visual C++, 32-bit Edition, version 2.0 and later.
	
	If you use the Microsoft extensions (/Ze), an array declaration with a zero
	subscript is legal for a class, structure, or union member. For more information
	about valid zero-sized arrays, search the Visual C++ online documentation for
	the topic "Unsized Arrays."
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbVC151 kbVC32bitSearch kbVC16bitSearch kbVC152
	Version           : :1.0,1.5,1.51,1.52
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
