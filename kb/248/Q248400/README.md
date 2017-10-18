---
layout: page
title: "Q248400: BUG: Reregistered ATL Window Class May Cause Access Violation"
permalink: kb/248/Q248400/
---

## Q248400: BUG: Reregistered ATL Window Class May Cause Access Violation

	Article: Q248400
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1,3.0,5.0,6.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL200bug kbATL210bug kbATLWC kbCOMt kbCtrlCreate kbInprocSvr kbOSWinNT400
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ATL Component Object Model (COM) dynamic-link library (DLL) that registers
	and creates a window and runs on the Windows NT or Windows 2000 operating
	system, can cause an access violation.
	
	CAUSE
	=====
	
	ATL does not unregister the window classes that it registers.
	
	On a Windows 9x-based computer, all window classes that are registered by a DLL
	are unregistered when the DLL is unloaded. However, in the Windows NT and
	Windows 2000 operating systems, no window classes registered by a DLL are
	unregistered when the DLL is unloaded.
	
	RESOLUTION
	==========
	
	Unregister all of the window classes of the windows that you are creating inside
	of your ActiveX control. Use the code shown in the "Sample Code" section to
	unregister the window classes in the destructor of your class.
	
	Resolution for CContainedWindow Use
	-----------------------------------
	
	If you have a CContainedWindow object in your class, the m_lpszClassName member
	of the CContainedWindow class stores the class name that was used to register
	the class. The sample code uses the same logic that is used by ATL (in
	Atlwin.cpp, CContainedWindow::RegisterWndSuperclass) to construct the window
	class name, and uses that name to unregister the class:
	
	Sample Code
	
	      LPTSTR szBuff = (LPTSTR)_alloca((lstrlen(m_MyContainedWnd.m_lpszClassName) + 14) * sizeof(TCHAR));
	      lstrcpy(szBuff, _T("ATL:"));
	      lstrcat(szBuff, m_MyContainedWnd.m_lpszClassName);
	      ::UnregisterClass(szBuff, _Module.GetModuleInstance());
	
	Replace m_MyContainedWnd with your CContainedWindow object name.
	
	Resolution for CWindowImpl Use
	------------------------------
	
	If you have an ActiveX control or use one of the DECLARE_* macros, use code
	similar to the following:
	
	      ::UnregisterClass(CMyClass::GetWndClassInfo().m_wc.lpszClassName, CMyClass::GetWndClassInfo().m_wc.hInstance);
	
	Replace CMyClass with your class name.
	
	If you have multiple contained windows or have a contained window in a control,
	use both of these resolutions, according to how you have used the contained
	windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q167526
	
	Steps to Reproduce the Problem
	------------------------------
	
	This problem is difficult to reproduce. This behavior only occurs under the
	following conditions (for example):
	
	1. A client invokes two COM DLLs, DLL A and DLL B.
	
	2. Assume that DLL A registers a window class that is named "Button" and creates
	  a window of that type, and DLL B registers the same window class named
	  "Button" and creates another window.
	
	3. Invoke both the DLLs. This action registers the corresponding window classes.
	
	4. Force both of the DLLs to unload. You can use the ::CoFreeUnusedLibraries
	  function to do this.
	
	  At this point the registered window classes are not unregistered in Windows NT
	  and Windows 2000.
	
	5. If you load either one of the DLLs (A or B) again, and if they reload in
	  exactly the same address of the other module (the address where the other one
	  was loaded previously before getting unloaded), you will see a failure in the
	  CreateWindowEx call for the Button window, which was registered in both the
	  DLLs with the same class name.
	
	Here is a brief explanation of why this problem happens:
	
	The HINSTANCE value of a DLL is equal to the base address into which it was
	loaded. When DLL A registered the Button class, it assigned a WndProc address
	for the class in the address range of where it was loaded. DLL B also registered
	another class with the same name, but with a different WndProc location in its
	address space. Please note these window classes are local to the module that
	registered them. Thus, Button was registered from two different DLLs, even
	though the two DLLs were loaded in the same process. The HINSTANCE value
	determines whether a given DLL has already registered a particular window
	class.
	
	When you create a window by using ATL, ATL firsts attempts to find whether a
	window class was registered for the given window by using the ::GetClassInfoEx
	function. If the class is not registered, then ATL will register the class and
	create the window. In the scenario in the "Steps to Reproduce the Problem"
	section, DLL A and DLL B both register the Button class with different WndProc
	addresses. Assuming DLL B loaded first the second time around, this time at the
	base address of DLL A, the ::GetClassInfoEx function returns the WndProc address
	that was registered by DLL A for the Button class. The address is invalid, and
	the first call to it causes an access violation.
	
	REFERENCES
	==========
	
	For more information on the GetClassInfoEx function, please see the following
	MSDN reference:
	
	  http://msdn.microsoft.com/library/psdk/winui/winclass_2jp4.htm
	  (http://msdn.microsoft.com/library/psdk/winui/winclass_2jp4.htm)
	
	For more information on the RegisterClassEx function, please see the following
	MSDN reference:
	
	  http://msdn.microsoft.com/library/psdk/winui/winclass_0wc8.htm
	  (http://msdn.microsoft.com/library/psdk/winui/winclass_0wc8.htm)
	
	For a Window Classes Overview, please see the following MSDN reference:
	
	  http://msdn.microsoft.com/library/psdk/winui/winclass_1ooj.htm
	  (http://msdn.microsoft.com/library/psdk/winui/winclass_1ooj.htm)
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q167526 FIX: ATL Control May Cause an Access Violation
	
	Additional query words: CreateWindowEx Random Crash SuperClass Multiple
	
	======================================================================
	Keywords          : kbActiveX kbATL200bug kbATL210bug kbATLWC kbCOMt kbCtrlCreate kbInprocSvr kbOSWinNT400 kbOSWin2000 kbVC500bug kbVC600bug kbATL300bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:2.0,2.1,3.0,5.0,6.0; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
