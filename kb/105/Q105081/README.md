---
layout: page
title: "Q105081: PRB: &quot;Warning: Calling DestroyWindow in CWnd::~CWnd&quot; Message"
permalink: /kb/105/Q105081/
---

## Q105081: PRB: &quot;Warning: Calling DestroyWindow in CWnd::~CWnd&quot; Message

	Article: Q105081
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbVC kbWndw kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following warnings are displayed when a debug version of a program is
	executed and TRACE() diagnostics are enabled:
	
	  Warning: calling DestroyWindow in CWnd::~CWnd
	  OnDestroy or PostNcDestroy in derived class will not be called
	
	CAUSE
	=====
	
	The above warnings are displayed by the CWnd::~CWnd() destructor. The warnings
	indicate the following:
	
	- The programmer has most likely called "delete" on a CWnd object rather than
	  DestroyWindow().
	
	- An object derived from CWnd is not performing a DestroyWindow() call in its
	  destructor.
	
	- Because the DestroyWindow() call is executed in the destructor for CWnd, only
	  the CWnd portion of the CWnd-derived object is remaining when the
	  DestroyWindow() is called. Thus, if you have a CWnd-derived object and
	  receive this warning, the derived object's virtual functions will not exist
	  and the CWnd functions will be called instead.
	
	RESOLUTION
	==========
	
	MFC Technote #17 contains more information on how to properly destroy a Window
	object and states the following cardinal rule:
	
	  To destroy a C++ Windows object, use DestroyWindow, not "delete".
	
	Also, examining CWnd::~CWnd() will reveal that the foremost task of the
	destructor is to ensure that the associated Windows window object has been
	destroyed. If a program calls DestroyWindow() before the CWnd destructor is
	called, the m_hWnd data member will be NULL, the TRACE0() messages will not
	occur, and DestroyWindow() will not be called in CWnd::~CWnd().
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbVC kbWndw kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
