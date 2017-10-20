---
layout: page
title: "Q154744: PRB: Modifying CWinApp Members Causes Error in DBGHEAP.C"
permalink: /kb/154/Q154744/
---

## Q154744: PRB: Modifying CWinApp Members Causes Error in DBGHEAP.C

{% raw %}

	Article: Q154744
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error below may occur in an MFC application where one of the following is
	assigned a value by the programmer:
	
	  
	
	  CWinApp::m_pszAppName
	  CWinApp::m_pszRegistryKey
	  CWinApp::m_pszExeName
	  CWinApp::m_pszHelpFilePath
	  CWinApp::m_pszProfileName
	
	The following error is displayed in a message box:
	
	  
	
	  Debug Assertion failed
	  Program: my.exe
	  File: dbgheap.c
	  Line: 1017
	  Expression:_BLOCK_TYPE_IS_VALID(pHead->nBlockUse)
	
	In Visual C++ 6.0, the following error is displayed in a message box:
	
	  
	
	  Debug Assertion failed
	  Program: my.exe
	  File: dbgheap.c
	  Line: 1011
	  Expression: _CrtIsValidHelpPointer(pUserData)
	
	You may see this error when you upgrade from an earlier version of Visual C++ to
	Visual C++ versions 4.2 or later.
	
	CAUSE
	=====
	
	The CWinApp destructor in MFC included with Visual C++ 4.2 and later now frees
	the data assigned to the member variables shown above by passing the pointer to
	the free() function. Doing this prevents memory leaks, which would occur if an
	MFC regular DLL were dynamically loaded and unloaded.
	
	RESOLUTION
	==========
	
	This behavior is by design. If you assign a value to m_pszAppName,
	m_pszRegistryKey, m_pszExeName, m_pszHelpFilePath, or m_pszProfileName, the data
	must be dynamically allocated on the heap. You may want to use the _tcsdup()
	run-time library function to do this.
	
	Also, free the memory associated with the current pointer before assigning a new
	value. Here is an example:
	
	     // First free the string that was allocated by MFC in the startup
	     // of CWinApp. The string is allocated before InitInstance is
	     // called.
	     free((void*)m_pszProfileName);
	
	     // Change the name of the .INI file--CWinApp destructor will free
	     // the memory.
	     m_pszProfileName=_tcsdup(_T("d:\\somedir\\myini.ini"));
	
	Additional query words: 4.10 port porting strdup
	
	======================================================================
	Keywords          : kberrmsg kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
