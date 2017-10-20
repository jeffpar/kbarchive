---
layout: page
title: "Q108113: FIX: MFC DLLs Don't Unregister Window Classes"
permalink: /kb/108/Q108113/
---

## Q108113: FIX: MFC DLLs Don't Unregister Window Classes

{% raw %}

	Article: Q108113
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbVC kbVC100bug kbVC200fix kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an MFC dynamic-link library (DLL) is loaded with LoadLibrary() and later
	released with FreeLibrary(), it will not be possible to load the library a
	second time during the same invocation of the main program. The library fails
	during initialization.
	
	CAUSE
	=====
	
	Four window classes are registered by the MFC initialization code. Windows NT
	3.1 does not automatically unregister window classes that were registered by a
	dynamically loaded DLL when the DLL's reference count reaches zero and the DLL
	is removed from memory. If the DLL is loaded a second time, the RegisterClass
	call in the initialization code fails because the classes are still registered.
	
	RESOLUTION
	==========
	
	The workaround is to unregister the window classes in the destructor for the DLL
	CWinApp object. The sample code below is an example of the code that is needed.
	
	If you register your own window class, you will also need to unregister that
	window class. The class name is returned as a char * by the
	AfxRegisterWndClass() function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in MFC 3.0, included with Visual C++
	32-bit Edition, version 2.0.
	
	Sample Code
	-----------
	
	  /* This is a code fragment and is not meant to be used alone. It will
	   * not compile.
	   *
	   * CMyDll is derived from CWinApp and is the application object for the
	   * DLL.
	   */ 
	  CMyDll::~CMyDll()
	  {
	     UnregisterClass("AfxWnd", m_hInstance);
	     UnregisterClass("AfxControlBar", m_hInstance);
	     UnregisterClass("AfxMDIFrame", m_hInstance);
	     UnregisterClass("AfxFrameOrView", m_hInstance);
	  }
	
	Additional query words: 1.00 2.00 2.10 USRDLL
	
	======================================================================
	Keywords          : kbDLL kbMFC kbVC kbVC100bug kbVC200fix kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
