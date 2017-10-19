---
layout: page
title: "Q198732: HOWTO: Draw ActiveX Controls with Child Controls in Design Time"
permalink: /kb/198/Q198732/
---

## Q198732: HOWTO: Draw ActiveX Controls with Child Controls in Design Time

	Article: Q198732
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrlCreate kbInprocSvr kbMFC kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article applies to ActiveX controls created with the MFC AppWizard, and
	describes how to draw an ActiveX control, that contains child controls, in
	design time.
	
	MORE INFORMATION
	================
	
	For child windows of an ActiveX control to be drawn, the HWND of the ActiveX
	control must be created. During design time, it is not necessary to fully
	instantiate an ActiveX control in order to draw it. As a result, the HWND of the
	ActiveX control isn't created, and therefore the child windows aren't created.
	Without the child windows actually being instantiated, there isn't a way to get
	a design-time representation for them.
	
	The way a container draws its controls in this case is to QueryInterface() the
	ActiveX control for its IViewObject interface, and call the IViewObject::Draw()
	method, which in turn calls the control's OnDraw() member function passing in a
	metafile HDC. Thus, even if the child controls had been created, they still
	would not be drawn because the framework does not pass a WM_PAINT message to the
	child controls.
	
	To work around this problem, two things must be done:
	
	1. Call RecreateControlWindow() in the OnDraw() member function of the ActiveX
	  control when m_hWnd is NULL. If m_hWnd is not NULL, then the control already
	  has a window object associated with it and RecreateControlWindow will not be
	  called.
	
	  RecreateControlWindow() creates the ActiveX controls window as a child of the
	  m_pWndPark window. Note that m_pWndPark is a member variable of the
	  _AFX_THREAD_STATE structure. If m_pWndPark is NULL then the desktop becomes
	  the parent of the control. This is not what we want, therefore before
	  RecreateControlWindow() is called, it is necessary to set the m_pWndPark
	  variable to the window associated with the device context passed to OnDraw().
	
	2. Call the helper function PaintChildWindows() from OnDraw(). This function
	  draws the individual child controls of the ActiveX control to the device
	  context.
	
	  NOTE: The paint code below uses the BackColor and ForeColor stock properties
	  for erasing the background. Alternatively, you could use the ambient
	  properties. If you use this code and your control does not implement the
	  BackColor or ForeColor stock properties, the control will not paint properly.
	
	The implementation of AmbientUserMode, PaintChildWindows(), and OnDraw() are
	shown below:
	
	AmbientUserMode:
	
	  // Override of AmbientUserMode, which will tell us whether if the UserMode
	  // ambient property is even implemented in the container. 
	  bool CFormControl::AmbientUserMode(bool *bUserMode, bool bInit)
	  {
	     ASSERT (bUserMode);
	     if (!GetAmbientProperty(DISPID_AMBIENT_USERMODE, 
	                             VT_BOOL,
	                             bUserMode) && bInit)
	     {
	        *bUserMode = true;
	        return false;
	     }else{
	        return true;
	     }
	  }
	
	PaintChildWindows():
	
	  void CFormControl::PaintChildWindows(HWND hWndParent, CDC* pDC,
	                                       CPoint ptOffset)
	  {
	      for (HWND hWndChild = ::GetTopWindow(hWndParent);
	           hWndChild != NULL;
	           hWndChild = ::GetNextWindow(hWndChild, GW_HWNDNEXT))
	      {
	          CRect rect;
	          ::GetWindowRect(hWndChild, rect);  // wnd rect in screen coords
	          ScreenToClient(&rect);             // relative to this view
	
	          HDC hdcOut = pDC->m_hDC;
	
	  #ifdef _DEBUG
	          CPoint pt = pDC->GetWindowOrg();
	          ASSERT(pt.x == 0 && pt.y == 0);
	  #endif
	
	          DWORD dwStyle = ::GetWindowLong(hWndChild, GWL_STYLE);
	          if (dwStyle & (WS_HSCROLL|WS_VSCROLL))
	          {
	              TRACE("Warning: printing control with scrollbars not
	                     supported\n");
	          }
	          if (dwStyle & WS_BORDER)
	          {
	              // The only case we special case--manually drawn border.
	              ::Rectangle(hdcOut, ptOffset.x + rect.left,
	                  ptOffset.y + rect.top, ptOffset.x + rect.right,
	                  ptOffset.y + rect.bottom);
	              rect.InflateRect(-1,-1);        // One logical pixel.
	          }
	
	          pDC->SaveDC();
	          {
	              CPoint pt(ptOffset.x + rect.left, ptOffset.y + rect.top);
	              pDC->LPtoDP(&pt);
	              pDC->OffsetViewportOrg(pt.x, pt.y);
	              // Set the viewport origin so that the window origin
	              // can be changed by the control. Draw it using a 
	              // non-virtual HDC.
	              // Error dialog in Excel95 shows up after this call when
	              // used on NT4SP3
	              ::SendMessage(hWndChild, WM_PAINT, (WPARAM)hdcOut, 0L);
	          }
	          pDC->RestoreDC(-1);
	
	          if (::GetTopWindow(hWndChild) != NULL)
	              PaintChildWindows(hWndChild, pDC, ptOffset);
	      }
	  }
	
	OnDraw():
	
	  void CFormControl::OnDraw(CDC* pdc, const CRect& rcBounds,
	                            const CRect& rcInvalid)
	  {
	      // If in design mode.
	      bool bUserMode;
	      if((AmbientUserMode(&bUserMode) && !bUserMode) || !m_hWnd) {
	      {
	          // This drawing code creates the window and has it draw its
	          // child windows into it.
	          _AFX_THREAD_STATE* pThreadState = AfxGetThreadState();
	          ASSERT(pThreadState != NULL);
	          pThreadState->m_pWndPark = new CWnd;
	          pThreadState->m_pWndPark->m_hWnd = pdc->GetWindow()->GetSafeHwnd();
	          RecreateControlWindow();
	      }
	
	      CBrush* pOldBrush;
	      CBrush bkBrush;
	      bkBrush.CreateSolidBrush(TranslateColor(GetBackColor()));
	
	      // Set the ForeColor property color and transparent background mode
	      // into the device context.
	      pdc->SetTextColor(TranslateColor(GetForeColor()));
	      pOldBrush = pdc->SelectObject(&bkBrush);
	      pdc->SetBkMode(TRANSPARENT);
	
	      // Paint the background using the BackColor property.
	      pdc->FillRect(rcBounds, &bkBrush);
	
	      CPen pen(PS_SOLID, 1, RGB(0,0,0));  // Solid black pen.
	      CPen* pOldPen = pdc->SelectObject(&pen);
	
	      PaintChildWindows(m_hWnd, pdc, CPoint(rcBounds.left, rcBounds.top));
	      ASSERT(pdc->GetWindowOrg() == CPoint(0,0));
	      pdc->SelectObject(pOldPen);
	  }
	
	REFERENCES
	==========
	
	For additional information about this implementation, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q127192 HOWTO: Draw Controls in an OLE Metafile
	
	  Q143299 SAMPLE: CFormView-Based Server Shows Metafile When Not Active
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Bret
	Bentzinger, Microsoft Corporation.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrlCreate kbInprocSvr kbMFC kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
