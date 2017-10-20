---
layout: page
title: "Q148704: FIX: Template Keyword Can't Be Used Inside Class Declarations"
permalink: /kb/148/Q148704/
---

## Q148704: FIX: Template Keyword Can't Be Used Inside Class Declarations

{% raw %}

	Article: Q148704
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any attempt to use the keyword 'template' within a class definition results in
	the following two errors:
	
	  error C2059: syntax error : 'template'
	
	  error C2238: unexpected token(s) preceding ';'
	
	RESOLUTION
	==========
	
	The resolution will vary according to the circumstances. For example, when
	declaring a template function to be a friend of a non-template class, find
	another way to manipulate the members of the class; for example, declare them to
	be public instead of private or provide public access member functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Examples where you need to use the keyword template within a class definition
	include:
	
	- Declaring a template function to be a friend of a non-template class.
	
	- Declaring a template class to be a friend of a non-template class.
	
	- Declaring a template function as a member of a non-template class.
	
	Sample Code
	-----------
	
	     /* Compile options needed: None
	        This sample illustrates the case of declaring a template function
	        to be a friend of a non-template class.
	     */ 
	
	     class A;
	     template <class T> void f(T, A *a)  { a->x; }
	
	     class A {
	     private:
	         int x;
	         template <class T> friend void f(T, A*);
	     };
	
	Additional query words: kbVC400bug 10.0 10.00 10.1 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
