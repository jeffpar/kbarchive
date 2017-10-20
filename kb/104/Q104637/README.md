---
layout: page
title: "Q104637: HOWTO: Trap Arrow Keys in an Edit Control of a Dialog Box"
permalink: /kb/104/Q104637/
---

## Q104637: HOWTO: Trap Arrow Keys in an Edit Control of a Dialog Box

{% raw %}

	Article: Q104637
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbCtrl kbMFC KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to trap arrow keys in an edit control of a dialog box
	with the Microsoft Foundation Classes (MFC) versions 2.0 and above. Although the
	example in this article uses an edit control, a similar mechanism applies to
	other controls as well.
	
	MORE INFORMATION
	================
	
	To trap the arrow keys in an edit control of a dialog box, the following steps
	may be taken:
	
	1. Create a dialog box class derived from CDialog. For example, you can create a
	  dialog box class called CMyDlg:public CDialog with Class Wizard.
	
	2. Create your own edit class and trap WM_GETDLGCODE and WM_KEYDOWN. The code
	  will resemble the following:
	
	        class CMyEdit : public CEdit
	        {
	        // Construction
	        public:
	             CMyEdit();
	
	        public:
	             virtual ~CMyEdit();
	        protected:
	             afx_msg UINT OnGetDlgCode();
	             afx_msg void OnKeyDown(UINT nChar, UINT nRepCnt, UINT nFlags);
	             DECLARE_MESSAGE_MAP()
	        };
	
	        CMyEdit::CMyEdit()
	        {
	        }
	
	        CMyEdit::~CMyEdit()
	        {
	        }
	
	        BEGIN_MESSAGE_MAP(CMyEdit, CEdit)
	             ON_WM_GETDLGCODE()
	             ON_WM_KEYDOWN()
	        END_MESSAGE_MAP()
	
	        UINT CMyEdit::OnGetDlgCode()
	        {
	
	             return DLGC_WANTARROWS|DLGC_WANTALLKEYS|DLGC_WANTCHARS;
	        }
	
	        void CMyEdit::OnKeyDown(UINT nChar, UINT nRepCnt, UINT nFlags)
	       {
	             //Check if the key pressed was a DOWN ARROW key
	             if (nChar == VK_DOWN)
	                  AfxMessageBox("It is a down arrow key!");
	             if (nChar == VK_RIGHT)
	                  AfxMessageBox("It is a right arrow key!");
	             if (nChar == VK_LEFT)
	                  AfxMessageBox("It is a left arrow key!");
	             if (nChar == VK_UP)
	                  AfxMessageBox("It is a up arrow key!");
	             CEdit::OnKeyDown(nChar, nRepCnt, nFlags);
	        }
	
	  NOTE: if Class Wizard is used to add a CMyEdit class, you must derive the
	  class from CWnd first and then manually change any references of CWnd to
	  CEdit in the code. It is important to trap WM_GEDLGCODE in your own edit
	  class and specify DLGC_WANTARROWS in OnGetDlgCode().
	
	3. Create a member variable that maps to your own edit class in the dialog box
	  class and override CWnd::DoDataExchange(). Your code should resemble the
	  following:
	
	        class CMyDlg : public CDialog
	        {
	        public:
	             CMyEdit m_edit;
	        protected:
	             virtual void DoDataExchange(CDataExchange* pDX); //DDX/DDV
	
	             DECLARE_MESSAGE_MAP()
	        };
	        void CMyDlg::DoDataExchange(CDataExchange* pDX)
	        {
	             CDialog::DoDataExchange(pDX);
	             DDX_Control(pDX, IDC_EDIT1, m_edit);
	        }
	
	  NOTE: This can be done easily by Class Wizard. For example, you can add a
	  member variable m_edit and map it to CEdit and then manually change CEdit
	  references in MyEdit.CPP and MyEdit.H files to CMyEdit.
	
	Additional query words: kbinf 1.00 1.50 1.51 1.52 2.00 2.10 2.50 2.51 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbCtrl kbMFC KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
