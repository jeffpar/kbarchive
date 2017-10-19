---
layout: page
title: "Q115087: HOWTO: Change the Background Color of a Common Dialog"
permalink: /kb/115/Q115087/
---

## Q115087: HOWTO: Change the Background Color of a Common Dialog

	Article: Q115087
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,4.0
	Operating System(s): 
	Keyword(s): kbATL kbMFC KbUIDesign kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbFAQ
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The common dialog-box classes provided by MFC can be used to modify the
	background color for common dialog boxes such as the File Open dialog box and
	the Print dialog box. It is necessary to derive a class from one of the MFC
	common dialog classes then override the OnCtlColor() and OnDestroy() member
	functions.
	
	MORE INFORMATION
	================
	
	The sample code below uses the CFileDialog common dialog-box class to
	demonstrate the process. Class Wizard was used to a generate message- handling
	function for the WM_CTLCOLOR message. The function called is
	"CMyDlg::OnCtlColor()".
	
	Sample Code
	-----------
	
	     // mydlg.h : header file
	     // 
	     #include <dlgs.h>
	     ////////////////////////////////////////////////////////////////////// 
	     // CMyDlg dialog
	
	     class CMyDlg : public CFileDialog
	     {
	     // Construction
	     public:
	         CMyDlg(CWnd* pParent = NULL);   // standard constructor
	
	         // Add a CBrush pointer to store the new background brush
	         CBrush m_pBkBrush;
	
	     // Dialog Data
	         //{ {AFX_DATA(CMyDlg)
	         enum { IDD = FILEOPENORD };
	             // NOTE: the ClassWizard will add data members here
	         //} }AFX_DATA
	
	     // Implementation
	     protected:
	         virtual void DoDataExchange(CDataExchange* pDX);  // DDX/DDV support
	
	         // Generated message map functions
	         //{ {AFX_MSG(CMyDlg)
	         afx_msg HBRUSH OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor);
	         //} }AFX_MSG
	         DECLARE_MESSAGE_MAP()
	     };
	
	     // mydlg.cpp : implementation file
	     // 
	     #include "stdafx.h"
	     #include <afxdlgs.h>
	     #include "mydlg.h"
	
	     #ifdef _DEBUG
	     #undef THIS_FILE
	     static char BASED_CODE THIS_FILE[] = __FILE__;
	     #endif
	
	     ////////////////////////////////////////////////////////////////////// 
	     // CMyDlg dialog
	
	     CMyDlg::CMyDlg(CWnd* pParent /*=NULL*/)
	         : CFileDialog(TRUE, NULL, NULL, OFN_HIDEREADONLY)
	     {
	         //{ {AFX_DATA_INIT(CMyDlg)
	             // NOTE: the ClassWizard will add member initialization here
	         //} }AFX_DATA_INIT
	     }
	
	     void CMyDlg::DoDataExchange(CDataExchange* pDX)
	     {
	         CDialog::DoDataExchange(pDX);
	         //{ {AFX_DATA_MAP(CMyDlg)
	             // NOTE: the ClassWizard will add DDX and DDV calls here
	         //} }AFX_DATA_MAP
	     }
	
	     BEGIN_MESSAGE_MAP(CMyDlg, CFileDialog)
	         //{ {AFX_MSG_MAP(CMyDlg)
	         ON_WM_CTLCOLOR()
	         //} }AFX_MSG_MAP
	     END_MESSAGE_MAP()
	
	     ////////////////////////////////////////////////////////////////////// 
	     // CMyDlg message handlers
	
	     HBRUSH CMyDlg::OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor)
	     {
	         switch (nCtlColor) {
	
	         case CTLCOLOR_STATIC:
	             // Set the static text to white on blue.
	             pDC->SetTextColor(RGB(255, 255, 255));
	             pDC->SetBkColor(RGB(0, 0, 255));
	             // Drop through to return the background brush.
	
	         case CTLCOLOR_DLG:
	             return (HBRUSH)(m_pBkBrush.GetSafeHandle());
	
	         default:
	              return CFileDialog::OnCtlColor(pDC, pWnd, nCtlColor);
	         }
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbMFC KbUIDesign kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbFAQ 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
