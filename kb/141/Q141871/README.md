---
layout: page
title: "Q141871: HOWTO: Add Tooltips to ActiveX Controls"
permalink: /kb/141/Q141871/
---

## Q141871: HOWTO: Add Tooltips to ActiveX Controls

	Article: Q141871
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbCtrl kbCtrlCreate kbMFC kbToolTip kbVC kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to add a ToolTip to an ActiveX Control.
	
	MORE INFORMATION
	================
	
	By default, ActiveX controls do not support ToolTips. The following steps,
	however, demonstrate how to modify a basic ActiveX control generated using the
	MFC ActiveX Control Wizard to add this support.
	
	1. Create a new Visual C++ Project by using the MFC ActiveX Control template.
	  Name the new control Basic.
	
	2. Open the Stdafx.h file associated with the project and add the following
	  line:
	
	        #include <afxcmn.h>
	
	The header file Afxcmn.h contains declarations for MFC classes that serve as
	wrappers to Windows Common Controls including CToolTipCtrl.
	
	3. Add the following lines to COleControl-derived class CBasicCtrl located in
	  BasicCtrl.h:
	
	        CToolTipCtrl m_ttip;
	        void RelayEvent(UINT message, WPARAM wParam, LPARAM lParam);
	
	The RelayEvent method will be used by the mouse message handlers to relay those
	messages to the ToolTip control.
	
	4. Add a WM_CREATE message handler to the CBasicCtrl message map. To do this,
	  click to select CBasicCtrl in the Class View window. With the CBasicCtrl node
	  selected, open the Properties window, and then click to select Messages. Find
	  the WM_CREATE message, and then add an OnCreate method to handle the message.
	  It is in this routine that the ToolTip control will be created. Add the
	  following code to this handler:
	
	        if (!m_ttip.Create(this))
	           TRACE0("Unable to create tip window.");
	        else
	           if (!m_ttip.AddTool(this, LPCTSTR(m_ToolTipText)))
	              TRACE0("Unable to add tip for the control window.");
	           else
	              m_ttip.Activate(m_ShowToolTip); 
	
	5. To relay appropriate messages to the ToolTip control, add handlers for
	  WM_LBUTTONDOWN, WM_LBUTTONUP, and WM_MOUSEMOVE to the CBasicCtrl message map.
	  The code for these handlers follows:
	
	        void CBasicCtrl::OnLButtonDown(UINT nFlags, CPoint point)
	        {
	           RelayEvent(WM_LBUTTONDOWN, (WPARAM)nFlags,
	                      MAKELPARAM(LOWORD(point.x), LOWORD(point.y)));
	
	           COleControl:: OnLButtonDown(nFlags, point);
	        }
	
	        void CBasicCtrl::OnLButtonUp(UINT nFlags, CPoint point)
	        {
	           RelayEvent(WM_LBUTTONUP, (WPARAM)nFlags,
	                      MAKELPARAM(LOWORD(point.x), LOWORD(point.y)));
	
	           COleControl::OnLButtonUp(nFlags, point);
	        }
	
	        void CBasicCtrl::OnMouseMove(UINT nFlags, CPoint point)
	        {
	           RelayEvent(WM_MOUSEMOVE, (WPARAM)nFlags,
	                      MAKELPARAM(LOWORD(point.x), LOWORD(point.y)));
	
	           COleControl::OnMouseMove(nFlags, point);
	        }
	
	        // implementation of the CBasicCtrl::RelayEvent method:
	
	        void CBasicCtrl::RelayEvent(UINT message, WPARAM wParam, LPARAM
	     lParam)
	        {
	           if (NULL != m_ttip.m_hWnd) {
	              MSG msg;
	
	              msg.hwnd= m_hWnd;
	              msg.message= message;
	              msg.wParam= wParam;
	              msg.lParam= lParam;
	              msg.time= 0;
	              msg.pt.x= LOWORD (lParam);
	              msg.pt.y= HIWORD (lParam);
	
	              m_ttip.RelayEvent(&msg);
	          }
	        }
	
	While it might seem reasonable to call CWnd::GetCurrentMessage instead of
	manually building a message, the value of the point that is returned is
	expressed in screen coordinates. When the ToolTip performs a hit test to
	determine if the point of the relayed message falls within the boundary of the
	client rectangle of any associated tools, the test will fail, and the ToolTip
	will not be displayed.
	
	
	6. Alter CBasicCtrl::DoPropExchange by adding code to initialize the
	  m_ToolTipText and m_ShowToolTip properties:
	
	        PX_Bool(pPX, _T("ShowToolTip"), (BOOL&)m_ShowToolTip, FALSE);
	        PX_String(pPX, _T("ToolTipText"), m_ToolTipText, _T("")); 
	
	7. To allow the user of the control some control over the ToolTip functionality,
	  add the following Automation properties to the CBasicCtrl class. To do this,
	  in the Class View window, select BasicLib (this node displays class view
	  information about the project IDL file). Open this node and right-click the
	  primary Interface node (_DBasic). Click Add, and then click Add Property. Add
	  the following two properties with the listed parameters:
	
	Property Name:          ShowToolTip            ToolTipText
	Property Type:          VARIANT_BOOL           BSTR
	Variable name:          m_ShowToolTip          m_ToolTipText
	Notification function:  OnShowToolTipChanged   OnToolTipTextChanged 
	
	ShowToolTip will allow the user to suppress the display of the ToolTip, and
	ToolTipText will track the text that is to be displayed when the ToolTip is
	visible.
	
	8. Modify the property change notification functions for these properties in the
	  following manner:
	
	        void CBasicCtrl::OnToolTipTextChanged()
	        {
	           if (m_ttip.m_hWnd && AmbientUserMode()) {
	              m_ttip.UpdateTipText(LPCTSTR(m_ToolTipText), this);
	              SetModifiedFlag();
	           }
	        }
	
	        void CBasicCtrl::OnShowToolTipChanged()
	        {
	           if (m_ttip.m_hWnd && AmbientUserMode()) {
	              m_ttip.Activate(m_ShowToolTip);
	              SetModifiedFlag();
	           }
	        }
	
	REFERENCES
	==========
	
	Microsoft Visual C++ version 4.x or 5.0 Books Online.
	
	Cluts, Nancy, "Programming the Windows 95 User Interface," Microsoft Press, 1995,
	Pages 26-28.
	
	Additional query words: kbvc400 kbvc410 kbvc420 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbCtrl kbCtrlCreate kbMFC kbToolTip kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
