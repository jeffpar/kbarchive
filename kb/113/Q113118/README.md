---
layout: page
title: "Q113118: BUG: C2061, C2062, C2226, C2039 Occur When Using enum types"
permalink: /kb/113/Q113118/
---

## Q113118: BUG: C2061, C2062, C2226, C2039 Occur When Using enum types

{% raw %}

	Article: Q113118
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,4.2,5.0,7.0
	Operating System(s): 
	Keyword(s): kbVC100bug kbVC150bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 4.0, 4.1, 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compilers listed above may misinterpret a combination of an enumerated type,
	a default parameter, and a constructor or function notation cast as a syntax
	error and may incorrectly generate one of the following:
	
	  error C2226: syntax error : unexpected type '<type>'
	
	-or-
	
	  error C2062: syntax error : unexpected type '<type>'
	
	-or-
	
	  error C2039: '<class>' : is not a member of '<class2>'
	
	-or-
	
	  error C2061: syntax error : identifier 'identifier'
	
	CAUSE
	=====
	
	The C++ compiler incorrectly parses declarations in which an enumerated type is
	used as a parameter to either a constructor or a function notation cast in a
	default parameter list. If there are other syntax errors in the declaration line
	in question, then it is possible that an erroneous error other than the ones
	listed might occur. The sample code shown below gives examples of how to
	generate these errors.
	
	This problem occurs only if an explicit construction [for example, A(A::FALSE)]
	or function notation cast [that is, int(FALSE)] is called with an enumerated
	type as an argument. If the compiler is allowed to do an implicit conversion,
	the error will not occur:
	
	     void Func(int i = FALSE) { printf("%d\n",i); };
	     B(A a = A::FALSE);
	
	RESOLUTION
	==========
	
	In most cases (such as the examples below), the construction or function
	notation cast is not explicitly needed, in which case it can be removed. If this
	is not the case, the type cast (as opposed to function notation cast) syntax for
	the function should be used instead. For example, the above functions would be
	modified to:
	
	     void Func(int i = (int) FALSE) { printf("%d\n",i); };
	     B(A a = (A) A::FALSE);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Sample Code
	-----------
	
	TEST1.CPP
	---------
	
	     /* The following code generates error C2061 or error C2226: */ 
	     /* Compiler options needed: none */ 
	
	     enum tagBool {FALSE,TRUE};
	
	     class A
	     {
	     public:
	
	       A(tagBool tc);
	
	     };
	
	     void Func(A a = A(FALSE));
	
	TEST2.CPP
	---------
	
	     /* The following code generates error C2061 or error C2062. */ 
	     /* Compiler options needed: none */ 
	
	     enum tagBool {FALSE,TRUE};
	
	     void Func(int i = int(FALSE)) { printf("%d\n",i); };
	
	TEST3.CPP
	---------
	
	     /* The following code generates the C2039 error. */ 
	     /* Using Visual C++ 4.0 and later, the following code compiles */ 
	     /* correctly. Compiler options needed: none */ 
	
	     class A
	     {
	     public:
	
	       enum tagBool {FALSE,TRUE};
	       A(tagBool tc);
	
	     };
	
	     class B
	     {
	     public:
	
	       B(A a = A(A::FALSE));
	
	     };
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbVC100bug kbVC150bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,4.1,4.2,5.0,7.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
