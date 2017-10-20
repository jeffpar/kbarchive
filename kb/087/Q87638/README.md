---
layout: page
title: "Q87638: PRB: C4512 &quot;Class&quot;: Assignment Operator Could Not Be Generated"
permalink: /kb/087/Q87638/
---

## Q87638: PRB: C4512 &quot;Class&quot;: Assignment Operator Could Not Be Generated

{% raw %}

	Article: Q87638
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kb
	Last Modified: 01-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0, 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following warning may be generated when Microsoft C/C++ version 7.0 or later
	is used to compile a C++ source file that uses a class containing a const data
	member:
	
	  C4512: <class_name> : assignment operator could not be generated
	
	where class_name is the name of the class containing the const data member.
	
	CAUSE
	=====
	
	The compiler will generate an assignment operator function for a class that does
	not define one. This assignment operator is simply a memberwise copy of the data
	members of an object. Because const data items cannot be modified after
	initialization, if the class contains a const item, the default assignment
	operator would not work.
	
	RESOLUTION
	==========
	
	The C4512 warning will not prevent the generation of an object module. The
	warning can be eliminated by any of the following methods:
	
	- Explicitly define an assignment operator for the class.
	
	  -or-
	
	- Remove the const data item from the class.
	
	  -or-
	
	- Use the #pragma warning statement.
	
	MORE INFORMATION
	================
	
	The following sample C++ code demonstrates this situation.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /W4
	  */ 
	
	  #include <iostream.h>
	
	  class base
	  {
	     const int a;
	
	  public:
	     base(int val = 0) : a(val) {}
	     int get_a(void) { return a; }
	  };
	
	  void main()
	  {
	     base first;
	     base second(5);
	
	     cout <<
	     "First = " <<
	     first.get_a() <<
	     '\n';
	
	     cout <<
	     "Second = " <<
	     second.get_a() <<
	     '\n';
	  }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVCNET kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
