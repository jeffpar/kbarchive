---
layout: page
title: "Q192560: HOWTO: Add ATL Control Containment Support to Any Window"
permalink: /kb/192/Q192560/
---

## Q192560: HOWTO: Add ATL Control Containment Support to Any Window

	Article: Q192560
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATLWC kbCOMt kbContainer kbCtrl kbVC600 kbATL300 kbFAQ kbGrpDSMFCATL
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to add Active Template Library (ATL) generic control
	containment capability to any window, so that the window can host ActiveX
	controls. The control containment support conforms to the OCX 96 specification
	and supports windowless activation and flicker-free drawing.
	
	MORE INFORMATION
	================
	
	To add control control containment, follow these steps:
	
	1. Add the following header files and pragma directives to your code. If you
	  want to link to the containment code in Atl.dll, add the following code:
	
	       // AtlAxWinInit is implemented in Atl.dll
	           #pragma comment(lib, "atl.lib")
	           #include <atldef.h>
	           #define _ATL_DLL_IMPL
	           #include <atliface.h>
	
	  Atl.dll must be shipped when you use ATL containment code, regardless of
	  whether you Min Size build or Min Dependency build.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q244955 PRB: MinDependency Project May Need to Include Atl.dll
	
	2. Add the following code to the application initialization code, for example in
	  the beginning of WinMain():
	
	        //Initialize ATL control containment code.
	           AtlAxWinInit();
	
	3. Create the ActiveX controls: use the WIN32 CreateWindow() function, specify
	  "AtlAxWin" as the class name, and then specify either a GUID, a ProgID, or an
	  URL as the title. For example:
	
	        // Create the Calendar control specifying the ProgID.
	        // Make sure that the module handle you pass to CreateWindow is the
	        // same module handle where AtlAxWinInit() was called from.
	        HWND hWnd = ::CreateWindow("AtlAxWin", "MSCAL.Calendar",
	           WS_CHILD|WS_VISIBLE, 10, 10, 500, 300, hParent, NULL,
	           ::GetModuleHandle(NULL), NULL);
	
	        // Same as above, except CLSID is specified instead of ProgID.
	        // Corresponds to ProgID "MSCAL.Calendar.7"
	        HWND hWnd = ::CreateWindow("AtlAxWin",
	           "{8E27C92B-1264-101C-8A2F-040224009C02}",
	           WS_CHILD|WS_VISIBLE, 10, 10, 500, 300, hParent, NULL,
	           ::GetModuleHandle(NULL), NULL);
	
	        // Creates the Web Browser control and navigates to the 
	        // specified web page.
	        HWND hWnd = ::CreateWindow("AtlAxWin", "http://www.microsoft.com", 
	           WS_CHILD|WS_VISIBLE, 10, 10, 500, 300, hParent, NULL,
	           ::GetModuleHandle(NULL), NULL);
	
	        // Creates an instance of an dynamic HTML document.
	        HWND hWnd = ::CreateWindow("AtlAxWin", "mshtml:<H1>Hello World</H1>",
	           WS_CHILD|WS_VISIBLE, 10, 10, 500, 300, hParent, NULL,
	           ::GetModuleHandle(NULL), NULL);
	
	4. If you added _Module.Init(), add the following code in application
	  termination code (for example, in WinMain(), after the message loop):
	
	  _Module.Term()
	
	You can get the IUnknown* of the control via AtlAxGetControl(). To get the
	IUnknown* of the container, use AtlAxGetHost(). The HWND returned from
	CreateWindow() for the control is passed as the first parameter in both
	functions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbATLWC kbCOMt kbContainer kbCtrl kbVC600 kbATL300 kbFAQ kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
