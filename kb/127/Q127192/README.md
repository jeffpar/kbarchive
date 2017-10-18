---
layout: page
title: "Q127192: HOWTO: Draw Controls in an OLE Metafile"
permalink: kb/127/Q127192/
---

## Q127192: HOWTO: Draw Controls in an OLE Metafile

	Article: Q127192
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,4.1,5.0
	Operating System(s): 
	Keyword(s): kbole kbnokeyword kbActiveX kbCOMt kbCtrl kbInplaceAct kbMetafile kbMFC kbVC150 kbVC200
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use controls, either directly on a CView or from a dialog template on a
	CFormView, in an OLE enabled MFC application. However, when the item is embedded
	but not active, the controls on these views will not be drawn to the Windows
	metafile supplied to the COleServerItem::OnDraw() function. In this case, you
	must "draw" the controls manually into the metafile. This article shows you how.
	
	MORE INFORMATION
	================
	
	The simplest way to get controls to "draw" in a metafile is to use the same
	method the VIEWEX sample uses to draw its CInputView to a printer device
	context. VIEWEX's OnPrint routine draws each control as a rectangle, circle,
	text, and so on. Override the COleServerItem::OnDraw() function and insert your
	code into it. As an example, use the COleServerItem::OnDraw() function listed in
	this article; it shows both the VIEWEX code to insert in the OnDraw member
	function and the helper function PaintChildWindows() that actually does the
	painting of each control.
	
	Sample Code
	-----------
	
	  /* Compile options needed: Standard
	  */ 
	
	  void CMyServerItem::OnDraw(CDC* pDC) // pDC is actually a metafile
	  {
	      //BLOCK: Set up scale mode
	      {
	          CClientDC dcScreen(NULL);
	          pDC->SetMapMode(MM_ANISOTROPIC);
	          // map 1 screen logical inch to 1 printer (/output) logical inch
	          pDC->SetWindowExt(dcScreen.GetDeviceCaps(LOGPIXELSX),
	                  dcScreen.GetDeviceCaps(LOGPIXELSX));
	          pDC->SetViewportExt(pDC->GetDeviceCaps(LOGPIXELSX),
	                  pDC->GetDeviceCaps(LOGPIXELSX));
	      }
	      // we must also offset the window positions relative to the scroll
	      // offset
	
	      // We cheat here since some controls do not paint if they are
	      // invisible, so we temporary make set the appropriate visible bits
	      // during preview mode so the controls think they are visible even
	      // though they aren't.
	
	      HWND hWndCheatVisible = NULL;
	      if (!IsWindowVisible())
	      {
	          // walk up to the top until we find the invisible window
	          for (HWND hWnd = m_hWnd;
	              hWnd != NULL; hWnd = ::GetParent(hWnd))
	          {
	              ASSERT(hWnd != NULL);
	              DWORD dwStyle = ::GetWindowLong(hWnd, GWL_STYLE);
	              if ((dwStyle & WS_VISIBLE) == 0)
	              {
	                  ::SetWindowLong(hWnd, GWL_STYLE, dwStyle | WS_VISIBLE);
	                  hWndCheatVisible = hWnd;
	                  break;
	              }
	          }
	          ASSERT(hWndCheatVisible != NULL);
	      }
	
	      CPen pen(PS_SOLID, 1, RGB(0,0,0));  // solid black pen
	      CPen* pOldPen = pDC->SelectObject(&pen);
	
	      ASSERT(pDC->GetWindowOrg() == CPoint(0,0));
	      CRect pRect = new CRect(-50,-50,600,600);
	
	      PaintChildWindows(m_hWnd, pDC, GetDeviceScrollPosition());
	      ASSERT(pDC->GetWindowOrg() == CPoint(0,0));
	      pDC->SelectObject(pOldPen);
	
	      if (hWndCheatVisible != NULL)
	          ::SetWindowLong(hWndCheatVisible, GWL_STYLE,
	              ::GetWindowLong(hWndCheatVisible, GWL_STYLE) &~ WS_VISIBLE);
	  }
	
	  void CMyServerItem::PaintChildWindows(HWND hWndParent,
	                                        CDC* pDC, CPoint ptOffset)
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
	              // the only case we special case - manually drawn border
	              ::Rectangle(hdcOut, rect.left, rect.top, rect.right,
	                          rect.bottom);
	              rect.InflateRect(-1,-1);        // 1 logical pixel
	          }
	
	          pDC->SaveDC();
	          {
	              CPoint pt(ptOffset.x + rect.left, ptOffset.y + rect.top);
	              pDC->LPtoDP(&pt);
	              pDC->OffsetViewportOrg(pt.x, pt.y);
	                  // set the viewport origin so that the window origin
	                  //  can be changed by the control
	
	              // draw it using a non-virtual HDC
	              ::SendMessage(hWndChild, WM_PAINT, (WPARAM)hdcOut, 0L);
	          }
	          pDC->RestoreDC(-1);
	
	          if (::GetTopWindow(hWndChild) != NULL)
	              PaintChildWindows(hWndChild, pDC, ptOffset);
	      }
	  }
	
	Additional query words: mfc ole inplace embed
	
	======================================================================
	Keywords          : kbole kbnokeyword kbActiveX kbCOMt kbCtrl kbInplaceAct kbMetafile kbMFC kbVC150 kbVC200 kbVC400 kbVC500 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,4.0,4.1,5.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
