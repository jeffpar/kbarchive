---
layout: page
title: "Q155386: FIX: C1001 in Compiler File MSC1.CPP at Line 1089"
permalink: /kb/155/Q155386/
---

## Q155386: FIX: C1001 in Compiler File MSC1.CPP at Line 1089

{% raw %}

	Article: Q155386
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When defining a template function and a nontemplate function of the same name
	such that the nontemplate version is defined within a namespace, you may
	encounter the following error:
	
	  
	
	  test.cpp(28) : fatal error C1001: INTERNAL COMPILER ERROR
	                 (compiler file 'msc1.cpp', line 1089)
	
	RESOLUTION
	==========
	
	There are three ways to work around this problem:
	
	1. Change the name of one of the functions involved.
	
	-or-
	
	2. Move the using directive to local function scope. See the sample code below.
	
	-or-
	
	3. Instead of a using directive, use the scope resolution operator to reference
	  objects in the namespace. See the sample code below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: None
	     */ 
	     template<class T> int test1( T x)
	     {
	         return 1;
	     }
	
	     namespace A{
	
	         int test1(int)
	         {
	             return 1;
	         };
	     }
	
	     int test2()
	     {
	         return test1(1);
	     }
	
	     using namespace A;  // comment out this line for workarounds 2 & 3.
	
	     void main()
	     {
	     //  using namespace A;  // uncomment this line for workaround 2
	         test1(1);
	     //  A::test1(1);        // uncomment this line for workaround 3
	     }
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
