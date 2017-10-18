---
layout: page
title: "Q147384: FIX: Icons, Bitmaps, &amp; Menus Not Displayed in an AFXDLL Dialog"
permalink: kb/147/Q147384/
---

## Q147384: FIX: Icons, Bitmaps, &amp; Menus Not Displayed in an AFXDLL Dialog

	Article: Q147384
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbDLL kbMFC KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Additional resources specified in a dialog template of a dialog implemented in
	an extension DLL will be displayed incorrectly or not displayed at all. That can
	affect icons, bitmaps, and menus that are specified in a dialog template.
	
	CAUSE
	=====
	
	The implementation of the CDialog class was changed in MFC version 4.0. The
	previous implementation of CDialog used a ::DialogBox() call to create a modal
	dialog and passed an instance handle obtained from a call to
	AfxFindResourceHandle() as a handle of the module where resources were stored.
	It was possible to call AfxSetResourceHandle() or use an extension DLL to find a
	dialog template that was stored in another module.
	
	The new implementation first loads dialog template. Then it calls
	::CreateDialogIndirect(), passing a handle obtained from a call to
	AfxGetInstanceHandle(). This handle is the handle of the executable module; it
	is not the handle of the one that contains additional resources. Therefore, no
	additional resources will be found or displayed.
	
	NOTE: It is also possible that you have another resource in the executable module
	with the same ID as the one required for the dialog. This would cause an
	incorrect resource to be displayed.
	
	This is a problem when you have a dialog template located in an extension DLL, or
	a resource only DLL. This is not a problem for regular DLLs.
	
	RESOLUTION
	==========
	
	To correct this problem, you have to set the current handle to be the one that
	corresponds to the module containing a dialog template. You also need to reset
	the handle back to the old value before proceeding with any code that involves
	the dialog. The easiest way to achieve this is to override DoModal in your
	CDialog derived class as in this example:
	
	  int CMyDialog::DoModal()
	  {
	      m_hInstSave = afxCurrentInstanceHandle;
	      afxCurrentInstanceHandle = AfxFindResourceHandle(
	          MAKEINTRESOURCE(IDD), RT_DIALOG);
	
	      return CDialog::DoModal();
	  }
	
	Here m_hInstSave is a data member of CMyDialog of type HINSTANCE. The variable
	afxCurrentInstanceHandle is used by MFC to store the current instance handle.
	Its value is returned from AfxGetInstanceHandle(), and it is defined in
	Afxwin.h.
	
	This implementation sets the current instance handle to the one that is returned
	from AfxFindResourceHandle(), which searches through the list of available
	extension DLLs for a dialog template. If you are using a resource only DLL, you
	will probably use AfxSetResourceHandle() to set the MFC current resource handle
	to the one that corresponds to the DLL. In that case, you can set
	afxCurrentInstanceHandle either directly using the same value or with a value
	returned from AfxGetResourceHandle().
	
	To reset the current instance handle back to the saved value, you need to have a
	handler for the WM_INITDIALOG message, OnInitDialog, with the following code:
	
	  BOOL CMyDialog::OnInitDialog()
	  {
	      afxCurrentInstanceHandle=m_hInstSave;
	
	      CDialog::OnInitDialog();
	
	      // some other code...
	
	      return TRUE;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++, 32-bit
	Edition, version 4.1.
	
	REFERENCES
	==========
	
	For the implementation of the CDialog class, refer to the Dlgcore.cpp file,
	located in MFC source code directory, \Msdev\Mfc\Src.
	
	Additional query words: 4.00 dialog template DLL resource-only vcfixlist410
	
	======================================================================
	Keywords          : kbDLL kbMFC KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
