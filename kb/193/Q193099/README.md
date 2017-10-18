---
layout: page
title: "Q193099: FIX: CDialog::Create() Returns Incorrect Value Calling EndDialog"
permalink: kb/193/Q193099/
---

## Q193099: FIX: CDialog::Create() Returns Incorrect Value Calling EndDialog

	Article: Q193099
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDlg kbVC600bug kbVS600SP1fix kbMFC600bug kbVC600SP1Fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a dialog box is created via the CDialog::Create() call, and the dialog box's
	OnInitDialog() (in response to WM_INITDIALOG message) ends the dialog box via
	EndDialog(), the CDialog::Create() function returns a non-zero value. The
	CDialog::Create() in this case should return zero.
	
	Because the dialog box was destroyed due to an EndDialog() call in the dialog's
	OnInitDialog(), CDialog::m_hWnd is NULL in this case.
	
	CAUSE
	=====
	
	An additional test was made in the WM_INITDIALOG code (at line 365 of
	Dlgcore.cpp), which leads to Create() succeeding even if the window handle is
	NULL.
	
	MFC code for Visual C++ 5.0:
	
	  BOOL CWnd::CreateDlgIndirect(LPCDLGTEMPLATE lpDialogTemplate,
	
	        CWnd* pParentWnd, HINSTANCE hInst)
	
	     {
	
	        // ...
	
	        if (hWnd == NULL)
	        {
	           // ...
	           // .. dump some debug information
	           return FALSE;
	        }
	
	        ASSERT(hWnd == m_hWnd);
	        return TRUE;
	     }
	
	MFC code for Visual C++ 6.0:
	
	  BOOL CWnd::CreateDlgIndirect(LPCDLGTEMPLATE lpDialogTemplate,
	
	        CWnd* pParentWnd, HINSTANCE hInst)
	
	     {
	
	        // ...
	        // Help with error diagnosis (only if WM_INITDIALOG didn't
	        // EndDialog())
	        if (hWnd == NULL && (m_nFlags & WF_CONTINUEMODAL)) // <--- PROBLEM!!!
	
	  {
	           // ... dump some debug information.
	           return FALSE;
	        }
	
	        ASSERT(hWnd == m_hWnd);
	        return TRUE;
	
	     }
	
	RESOLUTION
	==========
	
	When calling CDialog::Create check both the return value of CDialog::Create(),
	and the value of CDialog::m_hWnd. If CDialog::m_hWnd is NULL, then the
	dialog-box creation is unsuccessful.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in the Visual Studio 6.0
	Service Pack 1.
	
	To obtain this service pack, please see:
	
	  http://msdn.microsoft.com/vstudio/sp/default.asp
	
	For more information on the Visual Studio 6.0 Service Pack 1, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q193009 INFO: Visual Studio 6.0 Service Pack 1 Readme
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Modify the code for displaying the dialog box so it also checks against the
	CDialog::m_hWnd variable. For instance:
	
	   
	     // Create a modeless dialog box. In this example, m_pModeless is a
	     // member variable of type CModeless where CModeless is a CDialog-
	     // derived class. IDD_MODELESS is the ID number of a dialog-box template
	     // resource.
	     m_pModeless = new CModeless;
	     if (m_pModeless->Create(IDD_MODELESS, this) &&
	        ::IsWindow(m_pModeless->m_hWnd))
	     {
	        // ... succeeded in dialog-box creation.
	     }
	     else
	     {
	        // ... failed in dialog-box creation.
	     }
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the MFC sample MODELESS from the MSDN CDs.
	
	2. Use ClassWizard to add an OnInitDialog() message handler (in response to
	  WM_INITDIALOG message) to the CAdderDialog class. CAdderDialog is a
	  CDialog-derived class.
	
	3. Call EndDialog() in the CAdderDialog::OnInitDialog() as follows:
	
	     BOOL CAdderDialog::OnInitDialog()
	     {
	        CDialog::OnInitDialog();
	
	        // TODO: Add extra initialization here
	        EndDialog(-1);
	        return TRUE;  // return TRUE unless you set the focus to a control
	                 // EXCEPTION: OCX Property Pages should return FALSE
	     }
	
	4. Select Win32 Release build from VC++'s Build\Set Active Configuration menu
	  command.
	
	5. Build and then run the MODELESS sample.
	
	6. Click Add in the dialog box. The m_pModeless->Create() call in
	  Modeldlg.cpp file (at line 178) returns TRUE, in this case causing the Add
	  button (for displaying the CAdderDialog modeless dialog box) to be disabled.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Yeong-Kah
	Tam, Microsoft Corporation.
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Yeong-Kah Tam, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDlg kbVC600bug kbVS600SP1fix kbMFC600bug kbVC600SP1Fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
