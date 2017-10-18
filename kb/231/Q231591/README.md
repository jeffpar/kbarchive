---
layout: page
title: "Q231591: HOWTO: Use Dialog Template to Create MFC Dialog with ActiveX"
permalink: kb/231/Q231591/
---

## Q231591: HOWTO: Use Dialog Template to Create MFC Dialog with ActiveX

	Article: Q231591
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbContainer kbCtrl kbDlg kbMFC kbResource kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	It is possible to display a dialog from either a DIALOG resource or from a
	dialog template in memory. In the latter case, the dialog template is either
	constructed or loaded into memory and the dialog is created indirectly.
	
	Dialogs that contain ActiveX controls are more difficult to create indirectly
	because they require additional information such as license keys and the initial
	states of properties. MFC requires that this additional information be provided
	as a DLGINIT resource. The Visual C++ resource editor creates this DLGINIT
	resource in the resource (.rc) file for each dialog containing an ActiveX
	control.
	
	Both CDialog::CreateIndirect() and CDialog::InitModalIndirect() support using
	DLGINIT resources with dialog templates in memory. However, the DLGINIT
	parameter is not documented and by default is set to NULL. The complete
	prototypes for these functions are:
	
	  BOOL CDialog::CreateIndirect(LPCDLGTEMPLATE lpDialogTemplate, CWnd* pParentWnd, void* lpDialogInit, HINSTANCE hInst);
	
	  BOOL CDialog::InitModalIndirect(LPCDLGTEMPLATE lpDialogTemplate, CWnd* pParentWnd = NULL,void* lpDialogInit = NULL);
	
	NOTE: Only the versions of these functions which take a LPCDLGTEMPLATE as the
	first parameter support passing a DLGINIT resource. The versions which take a
	HGLOBAL parameter do not support DLGINIT resources.
	
	MORE INFORMATION
	================
	
	The following source shows how to load a DIALOG resource from memory and display
	it indirectly using a dialog template in memory. This function also uses the
	DLGINIT resource and will work with DIALOG resources that contain ActiveX
	controls.
	
	  void CMainFrame::OnMyModalDialogIndirect() 
	  {
	  	//Load DLGTEMPLATE
	  	DLGTEMPLATE* pTemplate;
	   
	  	HINSTANCE hInst= AfxFindResourceHandle(
	                              MAKEINTRESOURCE(IDD_INDIRECT),RT_DIALOG);
	  	
	  	if (hInst == NULL)
	  	{ 
	  		TRACE("Cound not find resource in resource chain");
	  		ASSERT(FALSE);
	  		return;
	  	}
	   
	  	HRSRC hRsrc = ::FindResource(hInst, MAKEINTRESOURCE(IDD_INDIRECT),
	  		RT_DIALOG);
	  	ASSERT(hRsrc != NULL);
	
	  	HGLOBAL hTemplate = ::LoadResource(hInst, hRsrc);
	  	ASSERT(hTemplate != NULL);
	   
	  	pTemplate = (DLGTEMPLATE*)::LockResource(hTemplate);
	
	  	//Load coresponding DLGINIT resource
	  	void* lpDlgInit;
	  	HGLOBAL hDlgInit = NULL;
	
	  	HRSRC hsDlgInit = ::FindResource(hInst, MAKEINTRESOURCE(IDD_INDIRECT),
	                               RT_DLGINIT);
	  	if (hsDlgInit != NULL)
	  	{
	  		// load it
	  		hDlgInit = ::LoadResource(hInst, hsDlgInit);
	  		ASSERT(hDlgInit != NULL);
	
	  		// lock it
	  		lpDlgInit = ::LockResource(hDlgInit);
	  		ASSERT(lpDlgInit != NULL);
	  	}
	
	  	//ToDo: Modify DLGTEMPLATE in memory if desired
	
	  	CDialog dlg;
	  	dlg.InitModalIndirect(pTemplate, NULL, lpDlgInit);  
	  	dlg.DoModal();    
	   
	  	::UnlockResource(hTemplate);
	  	::FreeResource(hTemplate);
	  	if (hDlgInit) 
	  	{
	  		::UnlockResource(hDlgInit);   
	  		::FreeResource(hDlgInit);
	  	}	
	  }
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Kelly Marie Ward, Microsoft Corporation
	
	
	Additional query words: CreateDialogIndirect
	
	======================================================================
	Keywords          : kbCOMt kbContainer kbCtrl kbDlg kbMFC kbResource kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
