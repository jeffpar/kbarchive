---
layout: page
title: "Q165020: INFO: Responding to Mouse Events with MFC ActiveX Controls"
permalink: kb/165/Q165020/
---

## Q165020: INFO: Responding to Mouse Events with MFC ActiveX Controls

	Article: Q165020
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbCtrl kbMFC kbMouse kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbVS600 kbGrpDSMFCAT
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MFC-based ActiveX controls capture mouse input by calling SetCapture in response
	to a mouse-button message. This can cause unexpected problems, but the behavior
	is by design.
	
	MORE INFORMATION
	================
	
	If you need to perform an action in response to a mouse button message when
	implementing an ActiveX control, and that action involves the use of the mouse
	(for example, displaying a message box or modal dialog box), you need to perform
	the action after the call to the base class implementation of the handler.
	Performing such actions prior to calling the base class may result in mouse
	capture problems.
	
	REFERENCES
	==========
	
	Sample Code
	-----------
	
	     void CMyButton::OnLButtonDown(UINT nFlags, CPoint point)
	     {
	         // Handle default first so that the mouse capture is resolved.
	         COleControl::OnLButtonDown(nFlags, point);
	
	         // Then, add your own hander code afterwards.
	         MessageBox(_T("No more problem!"));
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbCtrl kbMFC kbMouse kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbVS600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
