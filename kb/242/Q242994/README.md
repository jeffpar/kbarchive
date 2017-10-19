---
layout: page
title: "Q242994: PRB:ATL IOleInPlaceSite::OnPosRectChange Doesn't Resize Control"
permalink: /kb/242/Q242994/
---

## Q242994: PRB:ATL IOleInPlaceSite::OnPosRectChange Doesn't Resize Control

	Article: Q242994
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATLWC kbCOMt kbCtrlCreate KbUIDesign kbVC600 kbATL300 kbGrpDSMFCATL
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ActiveX controls hosted in an ATL container are unable to resize themselves
	dynamically. The container could be a composite control or any window using ATL
	containment as described in the following Knowledge Base article:
	
	  Q192560 HOWTO: Adding ATL Control Containment Support to Any Window
	
	CAUSE
	=====
	
	When an ActiveX control calls IOleInPlaceSite::OnPosRectChange, the container
	must call the control's IOleInPlaceObject::SetObjectRects to specify the new
	position of the in-place window and the clip rectangle. Only then does the
	object resize its window.
	
	The CAxHostWindow implementation of IOleInPlaceSite::OnPosRectChange currently
	returns E_NOTIMPL, which doesn't give the control the opportunity to resize.
	
	RESOLUTION
	==========
	
	This can be worked around by modifying ATLHOST.h and making changes to the
	OnPosRectChange() function. The function should be changed such that it calls
	SetObjectRects() on it's containing control. A sample implementation is as
	below:
	
	  STDMETHOD(OnPosRectChange)(LPCRECT lprcPosRect)
	  {
	  	ATLTRACE2(atlTraceHosting, 0, 	_T("IOleInPlaceSite::OnPosRectChange"));
	
	  	// Use MoveWindow() to resize the CAxHostWindow.
	  	// The CAxHostWindow handler for OnSize() will
	  	// take care of calling IOleInPlaceObject::SetObjectRects().
	
	  	// Convert to parent window coordinates for MoveWindow().
	  	RECT rect = *lprcPosRect;
	  	ClientToScreen( &rect );
	  	HWND hWnd = GetParent();
	
	  	// Check to make sure it's a non-top-level window.
	  	if(hWnd != NULL)
	  	{
	  		CWindow wndParent(hWnd);
	  		wndParent.ScreenToClient(&rect);
	  		wndParent.Detach ();
	  	}
	
	  	// Do the actual move.
	  	MoveWindow( &rect);
	  	
	  	return S_OK;	
	  }
	
	Make these modifications to a copy of AtlHost.h, for instance, FixAtlHost.h.
	Then, in Stdafx.h, comment out AtlHost.h and use FixAtlHost.h instead:
	
	      // #include <atlhost.h>
	      #include "FixAtlHost.h" 
	
	This technique will only work in Debug or ReleaseMinDependency builds. It will
	not work in ReleaseMinSize builds as ATL.dll would be used, not the code in
	FixAtlHost.h.
	
	MORE INFORMATION
	================
	
	For illustration, the following discussions make use of a modified version of
	POLYGON: The ATL Tutorial. The only modification made to the project is in file
	PolyCtl.h, in the function CPolyCtl::OnLButtonDown():
	
	  LRESULT CPolyCtl::OnLButtonDown(UINT uMsg, WPARAM wParam, LPARAM lParam, BOOL& bHandled)
	  {
	
	  	// a toggle value used to toggle control size.
	  	static int iToggleVal = 10;
	
	  	HRGN hRgn;
	  	WORD xPos = LOWORD(lParam);  // horizontal position of cursor
	  	WORD yPos = HIWORD(lParam);  // vertical position of cursor
	  	CalcPoints(m_rcPos);   // Create a region from our list of points
	  	hRgn = CreatePolygonRgn(&m_arrPoint[0], m_nSides, WINDING);
	
	  	// If the clicked point is in our polygon then fire the ClickIn
	  	//  event otherwise we fire the ClickOut event
	  	if (PtInRegion(hRgn, xPos, yPos))
	  		Fire_ClickIn(xPos, yPos);
	  	else
	  		Fire_ClickOut(xPos, yPos);   // Delete the region that we created
	  	DeleteObject(hRgn);
	
	  	// Toggle control size here.
	  	RECT newPos;
	  	newPos = m_rcPos;
	  	newPos.right -= iToggleVal;
	  	newPos.bottom -= iToggleVal;
	  	iToggleVal = -iToggleVal;
	  		
	  	HRESULT hRet;
	  	CComPtr<IOleInPlaceSite> spCtlSite;
	  	hRet = InternalGetSite(IID_IOleInPlaceSite, (void**)&spCtlSite);
	  	if (SUCCEEDED(hRet))
	  	{
	  		if (spCtlSite != NULL)
	  		{
	  			// (Try) to change control size, 
	  			// provided the container cooperates.
	  			hRet = spCtlSite->OnPosRectChange (&newPos);
	  		}
	  	}
	
	  	return 0;
	  }
	
	As can be seen earlier, the Polygon control attempts to resize its window every
	time you click the left mouse button. Accordingly, on a left button click, the
	control does the following:
	
	- Calculates a new rectangle.
	
	- Calls IOleInPlaceSite::OnPosRectChange() with that new rectangle.
	
	- Resizes itself (by calling SetWindowPos() in
	  CComControlBase::IOleInPlaceObject_SetObjectRects()) only when the container
	  in turn calls the control's implementation of
	  IOleInPlaceObject::SetObjectRects.
	
	The last bullet is crucial: Well behaved controls resize themselves only at the
	behest of the container. So, if the container doesn't cooperate, the control
	won't resize.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the AppWizard, create a new ATL EXE project.
	2. Using the Insert menu, select New ATL Object, Miscellaneous category, add a
	  Dialog class.
	3. Insert the modified Polygon control on the dialog box.
	4. Create the dialog box in place of the boilerplate message loop in
	  _tWinMain():
	
	  CResizeDlg dlg;
	  dlg.DoModal ();
	  /* Message loop commented out.
	  MSG msg;
	  while (GetMessage(&msg, 0, 0, 0))
	  	DispatchMessage(&msg);
	  */ 
	
	5. (Try to) toggle the size of the control by clicking inside it.
	6. Notice that the size doesn't change.
	7. Now make the changes required to FixAtlHost.h, and notice that this time
	  around, the control resizes as expected.
	
	REFERENCES
	==========
	
	For more information look at the following Web sites:
	
	- http://msdn.microsoft.com/library/psdk/com/oin_oe2k_1t9v.htm
	
	- http://msdn.microsoft.com/library/psdk/com/oin_oe2k_5g6d.htm
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by S. Ganesh, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbATLWC kbCOMt kbCtrlCreate KbUIDesign kbVC600 kbATL300 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
