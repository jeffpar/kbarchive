---
layout: page
title: "Q193272: FIX: MFC Doesn't Call CPrintDialog::OnInitDialog"
permalink: kb/193/Q193272/
---

## Q193272: FIX: MFC Doesn't Call CPrintDialog::OnInitDialog

	Article: Q193272
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCmnDlg kbVC600bug kbVS600SP1fix kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The OnInitDialog() function (which is called in response to a WM_INITDIALOG
	message) for a CPrintDialog-derived class, was called in MFC prior to Visual C++
	6.0. However, this is no longer true for MFC DLLs of Visual C++ 6.0. Therefore,
	programs that rely on OnInitDialog() to be called will not work as expected.
	
	CAUSE
	=====
	
	Previously, MFC set up a message hook for CPrintDialog. This hook was the only
	way to catch a WM_INITDIALOG message. MFC for Visual C++ 6.0 purposely removed
	this hook so MFC applications would automatically get the new Print dialog by
	default on Windows 2000; however, this causes applications that rely on
	CPringDialog::OnInitDialog() to fail to work.
	
	RESOLUTION
	==========
	
	Set up the message hook function, _AfxCommDlgProc(), in the constructor of your
	CPrintDialog-derived class as shown below:
	
	     // CMyPrintDialog is a CPrintDialog-derived class.
	     CMyPrintDialog::CMyPrintDialog(DWORD dwFlags)
	     : CPrintDialog(FALSE,dwFlags)
	     {
	        //{ {AFX_DATA_INIT(CMyPrintDialog)
	        //} }AFX_DATA_INIT
	        // MFCBUG: MFC 6.0 doesn't set the message hook!
	        m_pd.Flags |= PD_ENABLEPRINTHOOK | PD_ENABLESETUPHOOK;
	        // _AfxCommDlgProc is exported from static MFC libraries
	        m_pd.lpfnPrintHook = _AfxCommDlgProc;
	        m_pd.lpfnSetupHook = _AfxCommDlgProc;
	     }
	
	Then, make your project statically linked to MFC.
	
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
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Pack Is Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Derive a class from CPrintDialog.
	
	2. Add a message handler for WM_INITDIALOG in the CPrintDialog-derived class.
	  The message handler OnInitDialog() is not called in Visual C++ 6.0.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Yeong-Kah
	Tam, Microsoft Corporation.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Yeong-Kah Tam, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnDlg kbVC600bug kbVS600SP1fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
