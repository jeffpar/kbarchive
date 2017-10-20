---
layout: page
title: "Q201540: HOWTO: Adding Tooltips to ATL ActiveX Controls"
permalink: /kb/201/Q201540/
---

## Q201540: HOWTO: Adding Tooltips to ATL ActiveX Controls

{% raw %}

	Article: Q201540
	Product(s): Microsoft C Compiler
	Version(s): 2.1,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL210 kbCOMt kbCtrlCreate kbToolTip kbVC500 kbVC600 kbATL300 kbDSupport kb
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.1, 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, ATL ActiveX controls do not support tooltips. Some containers like
	Microsoft Visual Basic add the tooltips as an extended control property
	(ToolTipText) for the ActiveX control. However, not all containers have this
	feature. If you want to support tooltips in several containers, you need to add
	tooltip support to your ATL ActiveX control yourself. This article shows how to
	add tooltip support to an ATL ActiveX Control.
	
	Here are three ways to add tooltip support to an ATL ActiveX control.
	
	- Use tooltip windows common control.
	
	- Use MFC's CToolTipCtrl class.
	
	- Use CToolTipCtrl ATL class from ATLCON sample.
	
	MORE INFORMATION
	================
	
	Using tooltip windows common control
	------------------------------------
	
	1. Add a variable to your ATL control class of type CWindow.
	
	  CWindow m_wndToolTip;
	
	2. Include Commctrl.h in Stdafx.h file.(include Afxcmn.h if application has MFC
	  support).
	
	  #include <commctrl.h>
	
	3. Override InplaceActive method and add the following code to create tooltip
	  control.
	
	  	
	  HRESULT InPlaceActivate(LONG iVerb, const RECT* prcPosRect=NULL)
	  {
	  	HRESULT hr;
	
	  	hr = CComControlBase::InPlaceActivate(iVerb, prcPosRect);
	  	if (m_wndToolTip.m_hWnd == NULL)
	  	{
	  		// If we're windowless we still need an HWND 
	  		if (m_bWndLess)
	  		{
	  			HDC hDC;
	  			// Get the HDC from the client
	  			m_spInPlaceSite->GetDC(NULL, OLEDC_NODRAW, &hDC);
	  			m_hTheWnd = WindowFromDC(hDC);
	  			m_spInPlaceSite->ReleaseDC(hDC);
	  		}
	  		else
	  			m_hTheWnd = m_hWnd;
	
	  		//Load the Common control library and create tooltip control
	  		InitCommonControls();
	  		m_wndToolTip.m_hWnd =
	  		::CreateWindow(TOOLTIPS_CLASS, (LPTSTR)NULL, TTS_ALWAYSTIP,
	  			CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT,
	  			NULL, (HMENU) NULL, _Module.GetModuleInstance(), NULL);
	
	  		// Ensure the tooltip always appears above our window
	  		::SetWindowPos(m_wndToolTip.m_hWnd, HWND_TOPMOST,0,0,0,0,
	  				SWP_NOACTIVATE|SWP_NOMOVE|SWP_NOREDRAW|SWP_NOSIZE);
	
	  		TOOLINFO    ti;
	  		ti.cbSize = sizeof(TOOLINFO);
	  		ti.uFlags = 0;
	  		ti.hwnd   = m_hTheWnd;
	  		ti.uId    = 1;
	  		ti.hinst  = NULL;
	  		ti.lpszText = m_bWndLess ? ti.lpszText = _T("My Windowless Tip") : ti.lpszText = _T("My Windowed Tip");
	  		m_wndToolTip.SendMessage(TTM_ADDTOOL, 0, (LPARAM)&ti);
	  	}
	  	return hr;
	  }
	
	4. Create a variable m_hTheWnd of type HWND in control class and then create
	  handlers for WM_LBUTTONDOWN and WM_MOUSEMOVE to the control's class. Relay
	  appropriate messages to the ToolTip control. The sample code is shown in the
	  following:
	
	  	
	  void RelayEvent(UINT message, WPARAM wParam, LPARAM lParam)
	  {
	  	if (NULL != m_wndToolTip.m_hWnd)
	  	{
	  		MSG msg;
	
	  		msg.hwnd= m_hTheWnd;
	  		msg.message= message;
	  		msg.wParam= wParam;
	  		msg.lParam= lParam;
	  		msg.time= 0;
	  		msg.pt.x= LOWORD (lParam);
	  		msg.pt.y= HIWORD (lParam);
	
	  		::SendMessage(m_wndToolTip.m_hWnd, TTM_RELAYEVENT, 0, (LPARAM)&msg);	
	  	}
	  } 
	
	  LRESULT OnLButtonDown(UINT uMsg, WPARAM wParam, LPARAM lParam,BOOL bHandled)
	  {
	  	bHandled = FALSE;
	  	RelayEvent(uMsg, (WPARAM)wParam,MAKELPARAM(LOWORD(lParam), HIWORD(lParam)));
	  	return 0L; 
	  }
	
	  LRESULT OnMouseMove(UINT uMsg, WPARAM wParam, LPARAM lParam,BOOL& bHandled)
	  {
	  	if (m_wndToolTip.m_hWnd)
	  	{
	  		POINT pt;
	  		static uId;
	  		pt.x = LOWORD(lParam);
	  		pt.y = HIWORD(lParam);
	
	  		TOOLINFO ti;
	  		ti.cbSize = sizeof(TOOLINFO);
	  		ti.hwnd   = m_hTheWnd;
	  		ti.uId    = 1;
	  		ti.rect.left   = pt.x;
	  		ti.rect.right  = pt.x+1;
	  		ti.rect.top    = pt.y;
	  		ti.rect.bottom = pt.y+1;
	  		m_wndToolTip.SendMessage(TTM_NEWTOOLRECT,   0, (LPARAM)&ti);
	  		
	  		RelayEvent(uMsg, wParam, lParam);
	  	}
	  	return 0;
	  }
	
	5. Link the project to Comctl32.lib. You can do either by specifying this
	  library name on linker settings of project/settings dialog box (or) by adding
	  this LIB manually to the project.
	
	Using MFC's CToolTipCtrl class
	------------------------------
	
	1. Add MFC support to ATL project.
	
	To use MFC's CToolTipCtrl class, an ATL application should support MFC in the
	first place. You could do this by selecting Support MFC option in Step1 of
	ATL/COM AppWizard for ATL DLLs. If the project has already been created without
	MFC support, you will have to add MFC support manually. The following article
	shows how to add MFC support ATL DLL/EXE:
	
	  Q173974 HOWTO: Add MFC Support to an ATL Project
	
	2. Use CToolTipCtrl instead of CWindow for m_wndToolTip member of control class.
	
	3. Call methods of CToolTipCtrl instead of sending messages.
	
	  HRESULT InPlaceActivate(LONG iVerb, const RECT* prcPosRect=NULL)
	  	{
	  		AFX_MANAGE_STATE(AfxGetStaticModuleState());
	  		CWnd parent;
	
	  		HRESULT hr;
	
	  		hr = CComControlBase::InPlaceActivate(iVerb, prcPosRect);
	  		if (m_wndToolTip.m_hWnd == NULL)
	  		{
	  			if (m_bWndLess)
	  			{
	  				HDC hDC;
	  				// Get the HDC from the client
	  				m_spInPlaceSite->GetDC(NULL, OLEDC_NODRAW, &hDC);
	  				m_hTheWnd = WindowFromDC(hDC);
	  				m_spInPlaceSite->ReleaseDC(hDC);
	  			}
	  			else
	  				m_hTheWnd = m_hWnd;
	
	  			::InitCommonControls();
	  			parent.Attach(m_hTheWnd);
	  			RECT rect = {0,0,0,0};
	  			if (!m_wndToolTip.Create(&parent))
	  				TRACE("Unable to create tip window.\n");
	  			else if (!m_wndToolTip.AddTool(&parent, LPCTSTR("TTip2 Control"),&rect, 1))
	  				TRACE("Unable to add tip for the control window.\n");
	  			else
	  				m_wndToolTip.Activate(TRUE);
	  			parent.Detach();
	  		}
	  		return hr;
	  	}
	
	  	void RelayEvent(UINT message, WPARAM wParam, LPARAM lParam)
	  	{
	  		if (NULL != m_wndToolTip.m_hWnd)
	  		{
	  			MSG msg;
	
	  			msg.hwnd= m_hTheWnd;
	  		    msg.message= message;
	  			msg.wParam= wParam;
	  			msg.lParam= lParam;
	  			msg.time= 0;
	  			msg.pt.x= LOWORD (lParam);
	  			msg.pt.y= HIWORD (lParam);
	
	  			m_ttip.RelayEvent(&msg);
	  		}
	  	} 
	  	LRESULT OnMouseMove(UINT uMsg, WPARAM wParam, LPARAM lParam,BOOL& bHandled)
	  	{
	  		if (m_wndToolTip.m_hWnd)
	  		{
	  			POINT pt;
	  			static uId;
	  			pt.x = LOWORD(lParam);
	  			pt.y = HIWORD(lParam);
	
	  			TOOLINFO ti;
	  			ti.cbSize = sizeof(TOOLINFO);
	  			ti.hwnd   = m_hTheWnd;
	  			uId = 1;
	  			ti.uId    = uId;
	  			ti.rect.left   = pt.x;
	  			ti.rect.right  = pt.x+1;
	  			ti.rect.top    = pt.y;
	  			ti.rect.bottom = pt.y+1;
	  			m_ttip.SendMessage(TTM_NEWTOOLRECT,   0, (LPARAM)&ti);
	  		}
	  		RelayEvent(uMsg, wParam, lParam);
	  		return 0;
	  	}
	
	  	LRESULT OnLButtonDown(UINT uMsg, WPARAM wParam, LPARAM lParam,BOOL bHandled)
	  	{
	  		bHandled = FALSE;
	  		RelayEvent(uMsg, (WPARAM)wParam,MAKELPARAM(LOWORD(lParam), HIWORD(lParam)));
	  		return 0L; 
	  	}
	
	Using ATLCON's CToolTipCtrl class
	---------------------------------
	
	1. Copy Atlcontrols.h file from ATLCON to your control project's directory and
	  add it to the project.
	
	2. Include it in the Stdafx.h file.
	
	3. Use CToolTipCtrl as you use MFC's CToolTipCtrl class.
	
	REFERENCES
	==========
	
	Visual C++ online documentation: Using the ATL COM AppWizard Step 2: Adding a
	Control
	
	  Q134209 How to use the ToolTip common control
	
	  Q173974 HOWTO: Add MFC Support to an ATL Project
	
	  Q223439 HOWTO: Using Class Wrappers to Access Windows Common Controls in ATL
	
	  Q141871 HOWTO: Add Tooltips to ActiveX Controls
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Sreedhar Pelluru, Microsoft Corporation
	
	
	Additional query words: ATL ActiveX tooltip
	
	======================================================================
	Keywords          : kbActiveX kbATL210 kbCOMt kbCtrlCreate kbToolTip kbVC500 kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.1,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
