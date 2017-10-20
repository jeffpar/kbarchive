---
layout: page
title: "Q166513: FIX: Typedef Type Causes C2275: Illegal Use of Type"
permalink: /kb/166/Q166513/
---

## Q166513: FIX: Typedef Type Causes C2275: Illegal Use of Type

{% raw %}

	Article: Q166513
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0
	Operating System(s): 
	Keyword(s): kbtool kbVC420bug kbVC500bug kbVC600fixkbbuglist
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a typedef cast in the member initialization of a class may cause the
	following errors:
	
	  error C2275: 'test::run' : illegal use of this type as an expression
	  error C2146: syntax error : missing ')' before identifier 'arg'
	  error C2612: trailing '.*|->*' illegal in base/member initializer list
	  error C2059: syntax error : ')'
	  error C2143: syntax error : missing ';' before '{'
	  fatal error C1004: unexpected end of file found
	
	RESOLUTION
	==========
	
	Use the actual type rather then the typedef. For example, in the following
	sample use test::run rather than test_run. Or, use the functional notation
	test_run (arg) for type conversion instead of the cast notation. Another option
	is to initialize the member in the body of function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	  /* Compiler Options Needed : none */ 
	
	      class test {
	      public:
	          enum run{ one, two, three };
	      };
	
	      typedef test::run test_run;
	
	      class test2 {
	          test2(int);
	          ~test2();
	      public:
	          test_run testvalue;
	      };
	
	      test2::test2(int arg):testvalue( (test_run) arg) {}     //Causes error
	
	      // test2::test2(int arg):testvalue( (test::run) arg) {} //WORKAROUND 1
	      // test2::test2(int arg):testvalue( test_run (arg)) {}  //WORKAROUND 2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC420bug kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
