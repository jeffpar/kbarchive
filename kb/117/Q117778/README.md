---
layout: page
title: "Q117778: HOWTO: Change the Background Color of an MFC Edit Control"
permalink: kb/117/Q117778/
---

## Q117778: HOWTO: Change the Background Color of an MFC Edit Control

	Article: Q117778
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC KbUIDesign kbVC100 kbVC150 kbVC151 kbVC200 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To change the background color of an edit control in an MFC application, you
	must override the OnCtlColor() message-handling function of the window
	containing the edit control.
	
	In the new OnCtlColor() function, set the background color and return a handle to
	a brush that will be used for painting the background. This must be done in
	response to receiving both the CTLCOLOR_EDIT and CTLCOLOR_MSGBOX messages in the
	OnCtlColor() function.
	
	This is also documented in the "Class Library Reference" under
	CWnd::OnCtlColor().
	
	MORE INFORMATION
	================
	
	The sample code below uses a CDialog-derived class to demonstrate the process.
	Class Wizard was used to generate message-handling functions for the WM_CTLCOLOR
	and WM_DESTROY messages. These functions are called CEditDialog::OnCtlColor()
	and CEditDialog::OnDestroy(), respectively.
	
	NOTE: In Visual C++ .NET you can add the WM_CTLCOLOR and WM_DESTROY handlers for
	the dialog object from the Properties Window. All the available messages for the
	dialog are listed in the Messages tab.
	
	Sample Code
	-----------
	
	        // editdlg.h : header file
	        // 
	
	  //////////////////////////////////////////////////////////////////////// 
	        /// 
	        // CEditDialog dialog
	
	        class CEditDialog : public CDialog
	        {
	        // Construction
	        public:
	            CEditDialog(CWnd* pParent = NULL);    // standard constructor
	
	        // Add a CBrush* to store the new background brush for edit controls.
	            CBrush* m_pEditBkBrush;
	
	        // Dialog Data
	            //{ {AFX_DATA(CEditDialog)
	            enum { IDD = IDD_EDITDIALOG };
	                // NOTE: The ClassWizard will add data members here.
	            //} }AFX_DATA
	
	        // Overrides
	        // ClassWizard generated virtual function overrides
	        //{ {AFX_VIRTUAL(CEditDialog)
	        protected:
	        virtual void DoDataExchange(CDataExchange* pDX); // DDX/DDV support
	        //} }AFX_VIRTUAL
	
	        // Implementation
	           protected:
	
	            // Generated message map functions
	            //{ {AFX_MSG(CEditDialog)
	            afx_msg HBRUSH OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor);
	            afx_msg void OnDestroy();
	            //} }AFX_MSG
	            DECLARE_MESSAGE_MAP()
	        };
	
	        // editdlg.cpp : implementation file
	        // 
	
	        #include "stdafx.h"
	        #include "mdi.h"
	        #include "editdlg.h"
	
	        #ifdef _DEBUG
	        #undef THIS_FILE
	        static char BASED_CODE THIS_FILE[] = __FILE__;
	        #endif
	
	     ////////////////////////////////////////////////////////////////////// 
	        // CEditDialog dialog
	
	        CEditDialog::CEditDialog(CWnd* pParent /*=NULL*/)
	            : CDialog(CEditDialog::IDD, pParent)
	        {
	            //{ {AFX_DATA_INIT(CEditDialog)
	                // NOTE: The ClassWizard will add member initialization here.
	            //} }AFX_DATA_INIT
	
	            // Instantiate and initialize the background brush to black.
	            m_pEditBkBrush = new CBrush(RGB(0, 0, 0));
	        }
	
	        void CEditDialog::DoDataExchange(CDataExchange* pDX)
	        {
	            CDialog::DoDataExchange(pDX);
	            //{ {AFX_DATA_MAP(CEditDialog)
	                // NOTE: The ClassWizard will add DDX and DDV calls here.
	            //} }AFX_DATA_MAP
	        }
	
	        BEGIN_MESSAGE_MAP(CEditDialog, CDialog)
	            //{ {AFX_MSG_MAP(CEditDialog)
	            ON_WM_CTLCOLOR()
	            ON_WM_DESTROY()
	            //} }AFX_MSG_MAP
	        END_MESSAGE_MAP()
	
	  ////////////////////////////////////////////////////////////////////// 
	        // CEditDialog message handlers
	
	        HBRUSH CEditDialog::OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor)
	        {
	            switch (nCtlColor) {
	
	            case CTLCOLOR_EDIT:
	            case CTLCOLOR_MSGBOX:
	                // Set color to green on black and return the background
	                   brush.
	                pDC->SetTextColor(RGB(0, 255, 0));
	                pDC->SetBkColor(RGB(0, 0, 0));
	                return (HBRUSH)(m_pEditBkBrush->GetSafeHandle());
	
	            default:
	                return CDialog::OnCtlColor(pDC, pWnd, nCtlColor);
	            }
	        }
	
	        void CEditDialog::OnDestroy()
	        {
	            CDialog::OnDestroy();
	
	            // Free the space allocated for the background brush
	            delete m_pEditBkBrush;
	        }
	
	Additional query words: CEdit
	
	======================================================================
	Keywords          : kbcode kbMFC KbUIDesign kbVC100 kbVC150 kbVC151 kbVC200 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
