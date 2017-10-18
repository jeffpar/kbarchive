---
layout: page
title: "Q152000: PRB: Appearance Property Uses Windows 4.0 WS_EX_CLIENTEDGE"
permalink: kb/152/Q152000/
---

## Q152000: PRB: Appearance Property Uses Windows 4.0 WS_EX_CLIENTEDGE

	Article: Q152000
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrlCreate kbMFC KbUIDesign kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MFC Controls support a set of standard properties. One of these properties is
	Appearance (DISPID_APPEARANCE). Appearance is implemented to give a control a
	3-D look. If the control is used on a version of Windows or Windows NT less than
	4.0, the Appearance property will not affect the appearance of the control at
	run time.
	
	CAUSE
	=====
	
	At run time, the Appearance property is implemented in an MFC control by setting
	an extended window style WS_EX_CLIENTEDGE. This window style is not supported on
	versions of Windows or Windows NT less than 4.0.
	
	RESOLUTION
	==========
	
	It is possible to supply your own implementation of the Appearance property
	although this technique will not work for subclassed Windows controls.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Using the Class Wizard, add the stock Appearance property but choose Get/Set
	methods rather that accepting the stock implementation. In the control, declare
	a member variable of type BOOL to represent the Appearance property. The stock
	Get/Set functions can be copied and changed slightly to manipulate this variable
	as well as handle the property binding requirements. In the Draw function, draw
	a 3-D border depending on the value of this variable.
	
	Sample Code
	-----------
	
	     // these get and set functions are the same as the original with a minor
	     // change (noted in the code)
	
	     short CTestAppearanceCtrl::GetAppearance()
	     {
	         return m_MyAppearance;
	     }
	
	     void CTestAppearanceCtrl::SetAppearance(short nNewValue)
	     {
	         if (nNewValue != 0 && nNewValue != 1)
	             ThrowError(CTL_E_INVALIDPROPERTYVALUE,
	                        AFX_IDP_E_INVALIDPROPERTYVALUE);
	
	         // Is the property changing?
	         if (m_MyAppearance == nNewValue)
	             return;
	
	         if (!BoundPropertyRequestEdit(DISPID_APPEARANCE))
	             SetNotPermitted();
	
	     // changed from original
	         // do not use the WS_EX_CLIENTEDGE style
	         //ASSERT((m_hWnd == NULL) ||
	         //  ((GetExStyle() & WS_EX_CLIENTEDGE) == (DWORD)(m_sAppearance ?
	         //      WS_EX_CLIENTEDGE : 0)));
	
	         m_MyAppearance = nNewValue;
	         SetModifiedFlag();
	
	         //ToggleAppearance(this);
	     // end of changes
	
	         OnAppearanceChanged();
	
	         BoundPropertyChanged(DISPID_APPEARANCE);
	     }
	
	     void CTestAppearanceCtrl::OnDraw(
	                 CDC* pdc, const CRect& rcBounds, const CRect& rcInvalid)
	     {
	         // TODO: Replace the following code with your own drawing code.
	         pdc->FillRect(rcBounds,
	              CBrush::FromHandle((HBRUSH)GetStockObject(WHITE_BRUSH)));
	         pdc->Ellipse(rcBounds);
	
	         // draw as 3D if m_appearance is set
	
	         if(m_appearance)
	         {
	             CRect rect(rcBounds);
	             pdc->DrawEdge(rect, EDGE_SUNKEN, BF_RECT | BF_ADJUST);
	         }
	     }
	
	Additional query words: 4.00 4.10 DISPID_APPEARANCE
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrlCreate kbMFC KbUIDesign kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
