---
layout: page
title: "Q165744: FIX: RichEditCtrl IDs Not Shown in Member Variables Tab"
permalink: /kb/165/Q165744/
---

## Q165744: FIX: RichEditCtrl IDs Not Shown in Member Variables Tab

{% raw %}

	Article: Q165744
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Member Variables tab in the ClassWizard does not show the IDs for Rich Edit
	controls.
	
	This is not a problem in the Message Maps tab of ClassWizard.
	
	RESOLUTION
	==========
	
	To work around this problem, you need to add the member variables for the Rich
	Edit control manually to the class definition in the dialog class and associate
	it with the control.
	
	1. Add the correct type of member variable to the dialog class.
	
	2. Add DDX_ and/or DDV_ function calls to the dialog's DoDataExchange().
	
	The following code snippet associates:
	
	- A CString data member (m_richedit) with the rich edit control and validation
	  code so that max length of text in the control is not greater than 10
	  characters.
	
	- A control variable (m_richEditCtrl) of type CRichEditCtrl with the rich edit
	  control.
	
	-- sampledlg.h --
	-----------------
	
	     class CSampleDlg : public CDialog
	     {
	     public:
	        CSampleDlg(CWnd* pParent = NULL);
	
	     // Dialog Data
	        //{{AFX_DATA(CSampleDlg)
	        enum { IDD = IDD_SAMPLE_DIALOG };
	        CString  m_edit;      // Added by ClassWizard for an edit control
	        //}}AFX_DATA
	
	     // Manually add member variables for the rich edit control
	        CRichEditCtrl m_richEditCtrl;
	
	        CString m_richedit;
	
	        // ClassWizard generated virtual function overrides
	        //{{AFX_VIRTUAL(CSampleDlg)
	        protected:
	        virtual void DoDataExchange(CDataExchange* pDX);
	             // DDX/DDV support
	        //}}AFX_VIRTUAL
	
	             ......
	
	        DECLARE_MESSAGE_MAP()
	     };
	
	-- sampledlg.cpp --
	-------------------
	
	     ......
	
	     void CSampleDlg::DoDataExchange(CDataExchange* pDX)
	     {
	        CDialog::DoDataExchange(pDX);
	        //{{AFX_DATA_MAP(CSampleDlg)
	        DDX_Text(pDX, IDC_EDIT, m_edit);
	        DDV_MaxChars(pDX, m_edit, 10);
	        //}}AFX_DATA_MAP
	
	     // Manually add DDX_Control, DDX_Text and DDV_MaxChars for the
	     // rich edit control
	        DDX_Control(pDX, IDC_RICHEDIT1, m_richEditCtrl);
	
	        DDX_Text(pDX, IDC_RICHEDIT1, m_richedit);
	        DDV_MaxChars(pDX, m_richedit, 10);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps can be used to reproduce the problem.
	
	1. Create an AppWizard0generated MFC application that uses dialog resources.
	
	2. Open the Resource Editor to add a Rich Edit control to that dialog template.
	
	3. Open the ClassWizard and go to the "Member Variables" tab. Try to add a data
	  member for the control.
	
	4. The Rich Edit control ID is not shown in the ClassWizard.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Jing Lou,
	Microsoft Corporation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbtool kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
