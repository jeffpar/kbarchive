---
layout: page
title: "Q191126: PRB: Font Changes as ActiveX Control Resizes"
permalink: kb/191/Q191126/
---

## Q191126: PRB: Font Changes as ActiveX Control Resizes

	Article: Q191126
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbMFC kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call SelectStockFont() to select a Stock font property to display text
	in an ActiveX control, the font of the text changes as the size of the control
	changes with SetWindowPos() or MoveWindow().
	
	CAUSE
	=====
	
	SelectStockFont() selects a scaled font into a device context. This causes the
	font size to change as the control resizes. However, the natural extent is not
	changed (m_rcBounds is bigger but m_cyExtent is not). As a result, the stock
	font doesn't scale perfectly with respect to the size of the control.
	
	RESOLUTION
	==========
	
	Here are two possible workarounds for this problem:
	
	1. Use SetControlSize() instead of SetWindowPos() or MoveWindow() to change the
	  size of the control.
	
	2. Replace SelectStockFont() with the following code:
	
	        CFontHolder& fntHolder =InternalGetFont();
	        HFONT internalhFont = fntHolder.GetFontHandle();
	
	        HFONT hOldFont = (HFONT)::SelectObject(pdc->m_hDC,internalhFont);
	        pdc->TextOut(20, 20, "Hello", 5);
	        ::SelectObject(pdc->m_hDC,hOldFont);
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Generate an MFC ActiveX control with the Control Wizard.
	
	2. Add a Stock font property to the control.
	
	3. Add a method called SizeControl() to the control. Call SetWindowPos() in this
	  method to change the size of the control. For example:
	
	        void CFontCtrl::SizeControl()
	        {
	           CRect r;
	           GetWindowRect(&r);
	           SetWindowPos(NULL, 0, 0,
	              r.Width() + 100, r.Height() + 100, SWP_NOMOVE);
	        }
	
	4. Display a text string in the control's OnDraw() function with the Stock font
	  property as shown here:
	
	        void CFontCtrl::OnDraw(CDC* pdc, const CRect& rcBounds,
	           const CRect& rcInvalid)
	        {
	           pdc->FillRect(rcBounds,
	              CBrush::FromHandle((HBRUSH)GetStockObject(WHITE_BRUSH)));
	           pdc->Ellipse(rcBounds);
	           CFont* def_font = SelectStockFont(pdc);
	           pdc->TextOut(20, 20, "Hello", 5);
	           pdc->SelectObject(def_font);
	        }
	
	5. Build the control project, and then insert the control to the ActiveX Control
	  Test Container.
	
	6. Invoke the SizeControl() method in the ActiveX Control Test Container. The
	  font of the text changes.
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbole kbActiveX kbMFC kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
