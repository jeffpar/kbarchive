---
layout: page
title: "Q183167: PRB: TranslateAccelerator() Not Called for ActiveX Controls"
permalink: kb/183/Q183167/
---

## Q183167: PRB: TranslateAccelerator() Not Called for ActiveX Controls

	Article: Q183167
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ActiveX control can process keyboard messages in the
	IOleInPlaceActiveObject::TranslateAccelerator() function. If the ActiveX control
	is created dynamically in a CView class or a CPropertyPage class,
	TranslateAccelerator() will not be called.
	
	CAUSE
	=====
	
	The CView and CPropertyPage classes are not designed to host ActiveX controls,
	therefore they do not call the TranslateAccelerator() function.
	
	RESOLUTION
	==========
	
	Override the PreTranslateMessage() function and call the PreTranslateInput()
	function. This results in a call to the COccManager::IsDialogMessage() function,
	which calls the control's IOleInPlaceActiveObject::TranslateAccelerator()
	function.
	
	The following sample code shows how to override PreTranslateMessage() in a
	CView-derived class called CTestView:
	
	Sample Code
	-----------
	
	     BOOL CTestView::PreTranslateMessage(MSG* pMsg)
	     {
	        CView::PreTranslateMessage(pMsg);
	        return PreTranslateInput (pMsg);
	     }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ActiveX control project with the MFC ActiveX ControlWizard.
	
	2. In the WM_CREATE message handler, create two edit controls as child windows
	  of the ActiveX control, as in the following example:
	
	        // CEditOCXCtrl is a COleControl-derived class.
	        int CEditOCXCtrl::OnCreate(LPCREATESTRUCT lpCreateStruct)
	        {
	           if (COleControl::OnCreate(lpCreateStruct) == -1)
	              return -1;
	
	           // m_Edit1 and m_Edit2 are of type CEdit.
	           VERIFY(m_Edit1.Create(WS_CHILD | WS_VISIBLE | WS_TABSTOP |
	                                 WS_BORDER,
	              CRect(10, 10, 100, 40), this, 100));
	           VERIFY(m_Edit2.Create(WS_CHILD | WS_VISIBLE | WS_TABSTOP |
	                                 WS_BORDER,
	              CRect(10, 50, 100, 80), this, 101));
	           return 0;
	        }
	
	3. Override PreTranslateMessage() in the COleControl-derived class as follows:
	
	        BOOL CEditOCXCtrl::PreTranslateMessage(MSG* pMsg)
	        {
	           if (pMsg->message >= WM_KEYFIRST && pMsg->message <= WM_KEYLAST)
	           {
	              // Allow tabbing between child controls.
	              if (VK_TAB == pMsg->wParam)
	              {
	                 if (IsDialogMessage(pMsg))
	                    return TRUE;
	              }
	           }
	
	           return COleControl::PreTranslateMessage(pMsg);
	        }
	
	4. Create an SDI application with CView as its view class in AppWizard.
	
	5. Insert the ActiveX control's CWnd-wrapper class to the SDI project in
	  Component Gallery.
	
	  NOTE: To insert the ActiveX control's wrapper class using the .NET IDE,
	  right-click on the project and select Add | Add Class from the Context menu.
	  In the Add Class dialog box, select the "MFC Class from ActiveX Control"
	  template, and then select Open. In the Add Class from ActiveX control Wizard
	  select your control from the drop down list, add the interfaces and select
	  Finish.
	
	6. Create the ActiveX control dynamically in the OnInitialUpdate() function of
	  the CView-derived class:
	
	        // CSdiView is a CView-derived class.
	        void CSdiView::OnInitialUpdate()
	        {
	           CView::OnInitialUpdate();
	
	           m_pSelection = NULL;    // Initialize selection.
	
	           // m_EditOCX is the CWnd-wrapper class of the ActiveX control.
	           VERIFY(m_EditOCX.Create("", WS_CHILD | WS_VISIBLE | WS_TABSTOP,
	              CRect(10, 10, 200, 200), this, 555));
	        }
	
	7. Build the SDI project and run the SDI application. Type something in the edit
	  control of the ActiveX control. Note that the PreTranslateMessage() of the
	  ActiveX control is not called.
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbole kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
