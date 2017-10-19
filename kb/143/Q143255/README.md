---
layout: page
title: "Q143255: HOWTO: Make a Resizable Dialog Bar"
permalink: /kb/143/Q143255/
---

## Q143255: HOWTO: Make a Resizable Dialog Bar

	Article: Q143255
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC KbUIDesign kbVC200 kbVC400 kbVC500 kbVC600 kbFAQ kbGrpDSMFCATL kbMFCCtrlBa
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The default MFC implementation of CDialogBar does not allow for the dialog bar
	to be resizable when it is floating. If the dialog bar contains controls that
	are sensibly resized, the programmer may want to make the dialog bar resizable
	by using the techique described in this article.
	
	To make the dialog bar resizable when using versions of MFC earlier than version
	4.0:
	
	1. Change the style of the mini frame window enclosing the floating dialog bar
	  so that it is resizable.
	
	2. Override CDialogBar to provide a CalcFixedLayout, which allows the dialog bar
	  and its controls to be resized.
	
	To make the dialog bar resizable when using MFC version 4.0 or later, you can use
	the built-in support for resizable control bars. However, dialog bars do not get
	this behavior by default. To make a dialog bar resizable:
	
	1. Use the new CBRS_SIZE_DYNAMIC style when creating the dialog bar.
	
	2. Add code to an override of the new CalcDynamicLayout() function.
	
	MORE INFORMATION
	================
	
	For versions of MFC Earlier Than Version 4.0
	--------------------------------------------
	
	CDialogBar contains an embedded member variable m_sizeDefault of type CSize. On
	creation, m_sizeDefault is set to the size of the dialog template embedded in
	the dialog bar. Whenever the dialog bar is resized or repositioned, MFC calls
	CDialogBar::CalcFixedLayout(). This member function is intended to return the
	appropriate size of the control bar; for CDialogBar, CalcFixedLayout() usually
	returns m_sizeDefault. This causes the dialog bar to always snap back to its
	default size.
	
	To create a resizable dialog bar, you must ensure that the following things are
	handled in some manner by an application:
	
	1. The CMiniDockFrameWnd surrounding the floating dialog bar must have its
	  window styles changed so that it is resizable.
	
	2. A member variable must be added to a class derived from CDialogBar to
	  represent the appropriate floating size.
	
	3. CalcFixedLayout() must be overridden in this class to set and return the
	  floating size of the dialog bar when the dialog bar is being resized.
	
	With the appropriate tests, both 1 and 3 can be implemented in CalcFixedLayout().
	See the "Sample Code" section of this article for an example of this.
	
	For MFC Version 4.0 and Later
	-----------------------------
	
	In MFC 4.0 and higher, control bars support the new CBRS_SIZE_DYNAMIC style.
	CBRS_SIZE_DYNAMIC allows a floating control bar to be dynamically resized when
	the user drags the control bar's border. The virtual function
	CControlBar::CalcDynamicLayout() has been added to determine the size that a
	control bar should be resized to.
	
	CalcDynamicLayout() is called for CBRS_SIZE_DYNAMIC control bars when the border
	of a floating control bar is dragged and when the control bar is docked or
	floated. The default CControlBar implementation simply calls CalcFixedLayout(),
	which prevents control bar objects from resizing unless CalcDynamicLayout() is
	overridden. CDialogBar does not override CalcDynamicLayout(), so by default,
	dialog bars are not resizable.
	
	Therefore, to make a resizable dialog bar using MFC 4.0:
	
	1. Create a new class derived from CDialogBar and override the
	  CalcDynamicLayout() function. Depending on the behavior you want, it may be
	  necessary to add a member variable to the class.
	
	2. Create an instance of this class using the CBRS_SIZE_DYNAMIC style bit.
	  Dialog bars are typically created in CMainFrame::OnCreate():
	
	        if (!m_wndDialogBar.Create(this, IDD_DIALOGBAR,
	                                   CBRS_TOP | CBRS_SIZE_DYNAMIC, 777))
	        {
	           TRACE0("Failed to create dialogbar\n");
	           return -1;
	        }
	
	        m_wndDialogBar.EnableDocking(CBRS_ALIGN_ANY);
	        DockControlBar(&m_wndDialogBar); 
	
	See the "Sample Code" section in this article for a examples of this.
	
	SAMPLE CODE
	-----------
	
	Sample Code for MFC versions Prior to Visual C++ 4.0:
	
	     /* Compile options needed: Default
	     */ 
	
	     // RSZDLGBR.H : header file
	     // 
	
	     class CResizableDlgBar : public CDialogBar
	     {
	     // Construction
	     public:
	          BOOL Create( CWnd* pParentWnd, UINT nIDTemplate, UINT nStyle,
	                      UINT nID, BOOL = TRUE);
	          BOOL Create( CWnd* pParentWnd, LPCTSTR lpszTemplateName,
	                   UINT nStyle, UINT nID, BOOL = TRUE);
	
	     // Attributes
	     public:
	          CSize m_sizeDocked;
	          CSize m_sizeFloating;
	          BOOL m_bChangeDockedSize;   // Indicates whether to keep
	                                   // a default size for docking
	
	     // Operations
	     public:
	
	     // Overrides
	         virtual CSize CalcFixedLayout(BOOL bStretch, BOOL bHorz);
	
	     // Implementation
	     public:
	     };
	
	     ///////////////////////////////////////////////////////////////////// 
	
	     // RSZDLGBR.CPP : implementation file
	     // 
	
	     #include "stdafx.h"
	     #include <afxpriv.h>
	     #include "ResizableDlgBar.h"
	     #include "resource.h"
	
	     //////////////////////////////////////////////////////////////////// 
	     // CResizableDlgBar Construction/Destruction
	
	     BOOL CResizableDlgBar::Create( CWnd* pParentWnd, UINT nIDTemplate,
	                                    UINT nStyle, UINT nID, BOOL bChange)
	     {
	          if(!CDialogBar::Create(pParentWnd,nIDTemplate,nStyle,nID))
	               return FALSE;
	
	          m_bChangeDockedSize = bChange;
	          m_sizeFloating = m_sizeDocked = m_sizeDefault;
	          return TRUE;
	     }
	
	     BOOL CResizableDlgBar::Create( CWnd* pParentWnd,
	                                    LPCTSTR lpszTemplateName,
	                                    UINT nStyle, UINT nID, BOOL bChange)
	     {
	          if (!CDialogBar::Create( pParentWnd, lpszTemplateName,
	                                  nStyle, nID))
	               return FALSE;
	
	          m_bChangeDockedSize = bChange;
	          m_sizeFloating = m_sizeDocked = m_sizeDefault;
	          return TRUE;
	     }
	
	     //////////////////////////////////////////////////////////////////// 
	     // Overloaded functions
	
	     CSize CResizableDlgBar::CalcFixedLayout(BOOL bStretch, BOOL bHorz)
	     {
	          if (IsFloating())
	         {
	             // Get the parent mini frame wnd
	             CMiniDockFrameWnd* pFrame =
	               ((CMiniDockFrameWnd*)m_pDockBar->GetParent());
	             CRect rcFrame;
	             pFrame->GetClientRect(&rcFrame);
	             // Is its size (0,0)? If so, it was just floated
	             CSize sizerc(rcFrame.right - rcFrame.left,
	                          rcFrame.bottom - rcFrame.top);
	             if (!((sizerc.cx <= 0) && (sizerc.cy <= 0)))
	                 return ((m_bChangeDockedSize) ?
	                             m_sizeDocked = m_sizeFloating = sizerc :
	                             m_sizeFloating = sizerc);
	             else
	             {
	                 // Modify Style when dialog bar is first floated
	                 pFrame->ModifyStyle(MFS_MOVEFRAME, WS_THICKFRAME, 0);
	                 m_dwStyle |= MFS_THICKFRAME;
	                 m_dwStyle |= WS_THICKFRAME;
	                 m_dwStyle &= ~MFS_MOVEFRAME;
	                 // Return last floated size
	                 return m_sizeFloating;
	             }
	         }
	
	          if (bStretch) // if not docked stretch to fit
	               return CSize(bHorz ? 32767 : m_sizeDocked.cx,
	                    bHorz ? m_sizeDocked.cy : 32767);
	          else
	               return m_sizeDocked;
	     }
	
	Sample Code for MFC Included with Visual C++ 4.0 and above:
	
	     /* Compile options needed: Default
	     */ 
	
	     // ResizableDlgBar.h : header file
	     // 
	
	     class CResizableDlgBar : public CDialogBar
	     {
	     // Construction
	     public:
	          BOOL Create( CWnd* pParentWnd, UINT nIDTemplate, UINT nStyle,
	                       UINT nID, BOOL = TRUE);
	          BOOL Create( CWnd* pParentWnd, LPCTSTR lpszTemplateName,
	                       UINT nStyle, UINT nID, BOOL = TRUE);
	
	     // Attributes
	     public:
	          CSize m_sizeDocked;
	          CSize m_sizeFloating;
	          BOOL m_bChangeDockedSize;   // Indicates whether to keep
	                                      // a default size for docking
	
	     // Operations
	     public:
	
	     // Overrides
	         // ClassWizard generated virtual function overrides
	         //{ {AFX_VIRTUAL(CResizableDlgBar)
	         //} }AFX_VIRTUAL
	         virtual CSize CalcDynamicLayout( int nLength, DWORD dwMode );
	
	     // Implementation
	     public:
	
	     // Generated message map functions
	     protected:
	         //{ {AFX_MSG(CResizableDlgBar)
	         // NOTE - the ClassWizard will add and remove member functions here.
	         //} }AFX_MSG
	         DECLARE_MESSAGE_MAP()
	     };
	
	     ///////////////////////////////////////////////////////////////////// 
	
	     // ResizableDlgBar.cpp : implementation file
	     // 
	
	     #include "stdafx.h"
	     #include "ResizableDlgBar.h"
	
	     //////////////////////////////////////////////////////////////////// 
	     // CResizableDlgBar Construction/Destruction
	
	     BOOL CResizableDlgBar::Create( CWnd* pParentWnd, UINT nIDTemplate,
	                                    UINT nStyle, UINT nID, BOOL bChange)
	     {
	          if(!CDialogBar::Create(pParentWnd,nIDTemplate,nStyle,nID))
	               return FALSE;
	
	          m_bChangeDockedSize = bChange;
	          m_sizeFloating = m_sizeDocked = m_sizeDefault;
	          return TRUE;
	     }
	
	     BOOL CResizableDlgBar::Create( CWnd* pParentWnd,
	                                    LPCTSTR lpszTemplateName, UINT nStyle,
	                                    UINT nID, BOOL bChange)
	     {
	         if (!CDialogBar::Create( pParentWnd, lpszTemplateName,
	                                                   nStyle, nID))
	             return FALSE;
	
	         m_bChangeDockedSize = bChange;
	         m_sizeFloating = m_sizeDocked = m_sizeDefault;
	         return TRUE;
	     }
	
	     //////////////////////////////////////////////////////////////////// 
	     // Overloaded functions
	
	     CSize CResizableDlgBar::CalcDynamicLayout(int nLength, DWORD dwMode)
	     {
	         // Return default if it is being docked or floated
	         if ((dwMode & LM_VERTDOCK) || (dwMode & LM_HORZDOCK))
	         {
	             if (dwMode & LM_STRETCH) // if not docked stretch to fit
	                 return CSize((dwMode & LM_HORZ) ? 32767 : m_sizeDocked.cx,
	                              (dwMode & LM_HORZ) ? m_sizeDocked.cy : 32767);
	               else
	                 return m_sizeDocked;
	         }
	         if (dwMode & LM_MRUWIDTH)
	             return m_sizeFloating;
	         // In all other cases, accept the dynamic length
	         if (dwMode & LM_LENGTHY)
	             return CSize(m_sizeFloating.cx, (m_bChangeDockedSize) ?
	                          m_sizeFloating.cy = m_sizeDocked.cy = nLength :
	                          m_sizeFloating.cy = nLength);
	          else
	             return CSize((m_bChangeDockedSize) ?
	                          m_sizeFloating.cx = m_sizeDocked.cx = nLength :
	                          m_sizeFloating.cx = nLength, m_sizeFloating.cy);
	     }
	
	     BEGIN_MESSAGE_MAP(CResizableDlgBar, CDialogBar)
	         //{ {AFX_MSG_MAP(CResizableDlgBar)
	             // NOTE - the ClassWizard will add and remove mapping macros
	  here.
	         //} }AFX_MSG_MAP
	     END_MESSAGE_MAP()
	
	     ///////////////////////////////////////////////////////////////////// 
	     // CResizableDlgBar message handlers
	     ///////////////////////////////////////////////////////////////////// 
	
	REFERENCES
	==========
	
	MFC Technical Note 31.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbMFC KbUIDesign kbVC200 kbVC400 kbVC500 kbVC600 kbFAQ kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :2.0,2.1,2.2,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
