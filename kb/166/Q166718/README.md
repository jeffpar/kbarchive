---
layout: page
title: "Q166718: FIX: C1001 from Conditional Operator in Initializer"
permalink: /kb/166/Q166718/
---

## Q166718: FIX: C1001 from Conditional Operator in Initializer

{% raw %}

	Article: Q166718
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbCompiler kbVC500bug kbVS97sp1fixkbbuglist
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Use of the conditional operator in the member initialization list may cause the
	following error:
	
	  test.cpp(20) : fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'E:\utc\src\\P2\main.c', line 379)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information
	
	RESOLUTION
	==========
	
	Initialize the members in the function code instead of in the initialization
	list.
	
	  -or-
	
	Modify the order in which the variables are declared. For example, with the
	following sample the error only occurs if you attempt to initialize the second
	variable rather than the first variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /*Compiler options needed : none */ 
	
	  class B  {
	     char *_s[20];
	  public:
	     ~B();
	      B(char const * = 0);
	  };
	
	  class D  {
	  public:
	      D(B& rB, int i);
	  private:
	      B m_b1;
	      B m_b2;
	  };
	
	  D::D(B& rB, int i)
	     : m_b2(i ? rB : 0)
	  {}    // Error is on this line.
	
	======================================================================
	Keywords          : kbcode kbtool kbCompiler kbVC500bug kbVS97sp1fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
