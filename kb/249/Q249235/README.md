---
layout: page
title: "Q249235: DOC: AfxLoadLibrary() Documentation is not Clear on Usage"
permalink: /kb/249/Q249235/
---

## Q249235: DOC: AfxLoadLibrary() Documentation is not Clear on Usage

	Article: Q249235
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbDLL kbMFC kbVC500bug kbVC600bug kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MSDN documentation for AfxLoadLibrary indicates that you need to use
	AfxLoadLibrary if your MFC application uses multiple threads; this is not
	totally correct.
	
	MORE INFORMATION
	================
	
	The only time you need to use AfxLoadLibrary is if you application is
	multithreaded and you are dynamically loading an MFC extension DLL. To load and
	unload regular DLLs you can use the Win32 functions LoadLibrary and FreeLibrary.
	Only when you are loading and unloading MFC extension DLLs in a multithreaded
	application do you need to use AfxLoadLibrary and AfxFreeLibrary.
	
	If you use AfxLoadLibrary in your application and link statically to MFC then you
	will get a complier error:
	
	  error C2065: 'AfxLoadLibrary' : undeclared identifier
	
	This is because the header file for AfxLoadLibrary, Afxdll_.h, is only included
	if MFC is linked to the application as a DLL. This is by design because you have
	to link to the DLL version of MFC to use or create extension DLLs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbDLL kbMFC kbVC500bug kbVC600bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
