---
layout: page
title: "Q163364: FIX: Class-local typedef Causes C1001 in msc1.cpp, Line 1089"
permalink: /kb/163/Q163364/
---

## Q163364: FIX: Class-local typedef Causes C1001 in msc1.cpp, Line 1089

{% raw %}

	Article: Q163364
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a typedef class name defined local to another class, the
	following internal compiler error occurs:
	
	  
	
	   C:\code\cust2\Test.cpp(20) : fatal error C1001: INTERNAL COMPILER
	   ERROR (compiler file 'msc1.cpp', line 1089) Please choose the
	   Technical Support command on the Visual C++ Help menu, or open
	   the Technical Support help file for more information
	
	RESOLUTION
	==========
	
	Declare the typedef statement outside class scope to resolve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	      /* Compile options needed: none
	      */ 
	
	      class Alpha_Helper
	      {
	         int x;
	      };
	
	      class Alpha
	      {
	         public:
	            typedef Alpha_Helper Helper;
	
	      };
	
	      class Beta : public Alpha::Helper
	      {
	         int b;
	      };
	
	Additional query words: kbVC420bug kbDSupport
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
