---
layout: page
title: "Q167351: FIX: Using Declaration Causes C2327"
permalink: /kb/167/Q167351/
---

## Q167351: FIX: Using Declaration Causes C2327

{% raw %}

	Article: Q167351
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A using declaration causes the following error:
	
	  error C2327: 'B::A::T2' : member from enclosing class is not a type name,
	  static, or enumerator
	
	CAUSE
	=====
	
	The name specified in a using declaration has the same name as an identifier in
	the template argument list of a templated class.
	
	RESOLUTION
	==========
	
	Modify the name in the using declaration or modify the name of the identifier in
	the template argument list (see sample code below).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     // Sample Code that causes the error.
	
	     template <class T1> struct A {
	     int x;
	     T1 y;
	     int T2;
	     };
	
	     template <class T2> struct B : A<T2> {
	     using A<T2>::T2;
	     };
	
	     // Sample Code that works around the error by changing the template
	     // argument list.
	
	     template <class T1> struct A {
	     int x;
	     T1 y;
	     int T2;
	     };
	
	     template <class T3> struct B : A<T3> {
	     using A<T3>::T2;
	     };
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbtool kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
