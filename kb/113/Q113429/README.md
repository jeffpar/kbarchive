---
layout: page
title: "Q113429: FIX: C1001: coff.c, Line 280, new of &#95;&#95;declspec(dllimport)"
permalink: /kb/113/Q113429/
---

## Q113429: FIX: C1001: coff.c, Line 280, new of &#95;&#95;declspec(dllimport)

	Article: Q113429
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE) 
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the following internal compiler error message when the
	sample program below is compiled:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)coff.c:1.14', line 280)
	
	The internal compiler error is triggered by the code, which does a new of an
	array of a class that is marked __declspec(dllimport).
	
	RESOLUTION
	==========
	
	To avoid the error, remove the __declspec(dllimport) from the class declaration
	and link with an import library instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. The problem was corrected in Visual C++, 32-bit
	edition, version 2.0.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /c
	  */ 
	
	  class __declspec(dllimport) CImport
	  {
	  public:
	      CImport();
	      ~CImport();
	  };
	
	  class CMyClass
	  {
	  protected:
	      CImport * piArray;
	  public:
	      CMyClass() {piArray = new CImport[2];}
	      ~CMyClass() {delete[] piArray;}
	  };
	
	Additional query words: 8.00 9.00 9.10 1.00 2.00 2.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbvc100 kbCVCComp
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
