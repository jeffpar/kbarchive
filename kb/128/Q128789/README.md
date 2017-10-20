---
layout: page
title: "Q128789: BUG: LNK2001 on Member Function When Use Nested Class Template"
permalink: /kb/128/Q128789/
---

## Q128789: BUG: LNK2001 on Member Function When Use Nested Class Template

{% raw %}

	Article: Q128789
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500bug
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build a program that uses nested class templates, the following link
	error is generated:
	
	  test.obj: error LNK2001: unresolved external symbol
	  "?Funtion@BB@?$AA@HH@@QAEHXZ
	  ( public: int __thiscall AA<int,int>::BB::Funtion(void) )"
	
	CAUSE
	=====
	
	The compiler does not generate code for the member function in the nested class
	template.
	
	RESOLUTION
	==========
	
	To work around the problem, use one of the following suggestions:
	
	- Define the function in the class declaration as an inline function. Be sure
	  to define the function body in the class declaration. Defining the function
	  as an inline function outside the class declaration will not eliminate the
	  problem.
	
	  -or-
	
	- Use the member function specialization technique to work around the problem.
	  This technique is demonstrated in the "Sample Code" section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following code can be used to reproduce or work around the problem.
	
	Sample Code
	-----------
	
	     /* Compile options needed: None.
	     */ 
	
	     #include <stdio.h>
	
	     template <class T1, class T2>
	     class AA
	     {
	       public:
	         class BB
	         {
	           public:
	             int Function();
	
	     // Work around #1, replace the previous line with
	     //        int Function() { return 0; }
	         };
	     };
	
	     // Work around #2, uncomment the following function
	     // AA<int,int>::BB::Function()
	     // {
	     //   return 0;
	     // }
	
	     template <class T1, class T2>
	     int AA<T1,T2>::BB::Function()
	     {
	        return 0;
	     }
	
	     void main()
	     {
	       AA<int,int>::BB b;
	       printf( "%d\n", b.Function() );
	     }
	
	Additional query words: 9.0 9.00 9.1 9.10 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
