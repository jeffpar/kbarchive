---
layout: page
title: "Q131322: PRB: C2710: Cannot Delete a Pointer to a Const Object"
permalink: /kb/131/Q131322/
---

## Q131322: PRB: C2710: Cannot Delete a Pointer to a Const Object

{% raw %}

	Article: Q131322
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbV
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to delete a pointer to a constant causes the compiler to generate the
	following correct error message:
	
	  Error C2710 : cannot delete a pointer to a const object
	
	NOTE: Visual C++ .NET compiler does not demonstrate this issue in conformance to
	the changes made in the C++ ANSI Standards.
	
	CAUSE
	=====
	
	Deleting a pointer to a constant should not be allowed by definition (ARM
	section 5.3.4) because it modifies the object pointed to. However, if you
	deliberately or accidentally use the explicit conversion, the compiler doesn't
	generate the error. The consequences of a such attempt are unpredictable and
	compiler implementation dependent.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code #1 to Demonstrate Behavior
	--------------------------------------
	
	  /* No special compile options needed. */ 
	
	  const int * pi   = new int(1000);
	  const char * pch = new char(65);
	
	  void main(void)
	  {
	    delete  pi  ;// Error C2710:cannot delete a pointer to a const object
	    delete  pch ;// Error C2710:cannot delete a pointer to a const object
	  }
	
	Visual C++ version 5.0 and 6.0 generate the following error:
	
	  Error C2664: 'delete' : cannot convert parameter 1 from 'const char *' to
	  'void *'
	
	Sample Code #2 to Demonstrate Behavior
	--------------------------------------
	
	  /* No special compile options needed.
	     The type casting of the pointer to const argument of the delete
	     operator prevents the C2710 error but is not recommended. */ 
	
	  const int * pi   = new int(1000);
	  const char * pch = new char(65);
	
	  void main(void)
	  {
	     delete (int *) pi;   //no error C2710 generated
	     delete (char *) pch; //no error C2710 generated
	
	  }
	
	REFERENCES
	==========
	
	For more information, see The Annotated C++ Reference Manual (1994) section
	5.3.4.
	
	Additional query words: 8.00 8.0 8.0c 8.00c 9.00 9.0 9.1 9.10
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVCNET kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
