---
layout: page
title: "Q259746: FIX: C1001 Compiler Error When Virtual Function Used Parameter"
permalink: kb/259/Q259746/
---

## Q259746: FIX: C1001 Compiler Error When Virtual Function Used Parameter

	Article: Q259746
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCPPonly kbLangCPP kbVC kbVC600fix kbVS600sp3bug kbVS600sp4fix kbVS600sp5fix
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE) 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following C1001 compiler error can occur when a virtual function is used as
	a parameter:
	
	  test.cpp(18) : fatal error C1001: INTERNAL COMPILER ERROR (compiler file
	  'msc1.cpp', line 1786) Please choose the Technical Support command on the
	  Visual C++ Help menu, or open the Technical Support help file for more
	  information
	
	  Error executing cl.exe.
	
	Please refer to the "More Information" section for sample code that reproduces
	the error.
	
	CAUSE
	=====
	
	This is a bug in the compiler.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Following is sample code to reproduce the error:
	
	  // cl /c /GX ice.cpp
	
	  class TestClass
	  {
	  };
	
	  class ExampleClass
	  {
	    public:	  
	      void Compute(void);
	      virtual TestClass&  TestFunction(void);
	  };
	
	  void ExampleClass::Compute(void)
	  {
	    TestClass *test;
	   
	    test = new TestClass(TestFunction());
	  }
	
	Following are three workarounds:
	
	1. Remove /GX (Enable exception handling) from compilation switches.
	
	2. Explicitly define a copy constructor for TestClass. For example:
	
	     public:
	     TestClass( TestClass&  );
	
	3. Introduce a temp variable of type TestClass, as follows:
	
	  void ExampleClass::Compute(void)
	  {
	    TestClass *test;
	   
	    TestClass temp = TestFunction();
	    test = new TestClass(temp);  
	  }
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCPPonly kbLangCPP kbVC kbVC600fix kbVS600sp3bug kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
