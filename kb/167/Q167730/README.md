---
layout: page
title: "Q167730: BUG: Wrong Member Name in C2039 Error Message"
permalink: /kb/167/Q167730/
---

## Q167730: BUG: Wrong Member Name in C2039 Error Message

	Article: Q167730
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbVC500bug kbVC600bugkbbuglist
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The C2039 the error message uses the incorrect class member name when you call a
	function that is not a member of a class. For example, the following sample code
	generates the errors:
	
	  Text1.cpp(6) : error C2039: '.H' : is not a member of 't' Text1.cpp(7) :
	  error C2039: '.D' : is not a member of 't' Text1.cpp(8) : error C2039: '.PAD'
	  : is not a member of 't'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     class t {
	     };
	
	     void func() {
	        t a;
	        a.operator int();
	        a.operator char();
	        a.operator char *();
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC500bug kbVC600bug kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
