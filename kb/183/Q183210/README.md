---
layout: page
title: "Q183210: PRB: Flicker in ATL Controls When Resized"
permalink: kb/183/Q183210/
---

## Q183210: PRB: Flicker in ATL Controls When Resized

	Article: Q183210
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbGDI kbVC420 kbVC500 kbVC6
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Windows XP Home Edition 
	   - Microsoft Windows XP Professional 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ATL control might flicker while it is being resized. For example, if you have
	a ListView control inside an ATL control and you allow it to be resized at run
	time, a significant amount of flickering occurs.
	
	CAUSE
	=====
	
	ATL controls are created by default with the CS_HREDRAW and CS_VREDRAW class
	styles. These styles cause the entire window to be redrawn when the window is
	resized.
	
	RESOLUTION
	==========
	
	Remove the CS_HREDRAW and CS_VREDRAW styles from the window by overriding the
	GetWndClassInfo() function. Add the following function to your
	CComControl-derived class:
	
	Sample Code
	-----------
	
	  static CWndClassInfo& GetWndClassInfo()
	  {
	     static CWndClassInfo wc = { { sizeof(WNDCLASSEX), 0, StartWindowProc,
	     0, 0, 0, 0, 0, (HBRUSH)(COLOR_WINDOW+1), 0, "MyControlClass", 0 },
	     NULL, NULL, IDC_ARROW, TRUE, 0, _T("")};
	     return wc;
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	GetWndClassInfo() is called by the CWindowImpl<>::Create() method during
	window creation and uses the WNDCLASS structure initialized by
	GetWndClassInfo().
	
	Additional query words: WM_PAINT OnPaint OnDraw WM_SIZE OnSize SetObjectRects Invalidate InvalidateRect FireViewChange kbATL200 kbATL210 kbATL300 kbctrl
	
	======================================================================
	Keywords          : kbnokeyword kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbGDI kbVC420 kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbVCNET
	Version           : :2.0,2.1,3.0,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
