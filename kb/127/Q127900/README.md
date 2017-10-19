---
layout: page
title: "Q127900: BUG: C2487 Error Occurs If Multiple Static Vars Use dllexport"
permalink: /kb/127/Q127900/
---

## Q127900: BUG: C2487 Error Occurs If Multiple Static Vars Use dllexport

	Article: Q127900
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC kbVC500bug
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
	
	Using _declspec(dllexport) or _declspec(dllimport) on a class with multiple
	static variable definitions may cause a C2487 error to be generated on all but
	the first variable. For example, consider this class declaration:
	
	  class _declspec(dllexport) MyClass
	  {
	  public:
	  static int i,j,k;
	  };
	
	This class declaration generates these errors:
	
	  error C2487: 'j' : member of dll interface class may not be declared with dll
	  interface
	
	  error C2487: 'k' : member of dll interface class may not be declared with dll
	  interface
	
	RESOLUTION
	==========
	
	Move each static variable declaration to its own line. To fix the above class so
	that it will compile cleanly, use this:
	
	  class _declspec(dllexport) MyClass
	  {
	  public:
	    static int i;
	    static int j;
	    static int k;
	  };
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: kbVC400bug dllimport export afxdll 9.00 9.10 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbLangCPP kbVC kbVC500bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
