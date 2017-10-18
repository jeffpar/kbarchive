---
layout: page
title: "Q162160: FIX: CFileDialog::DoModal Does Not Return 0"
permalink: kb/162/Q162160/
---

## Q162160: FIX: CFileDialog::DoModal Does Not Return 0

	Article: Q162160
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbui kbdocerr kbCmnDlg kbMFC kbDocs KbUIDesign kbVC200bug kbVC210bug kbVC220bug kbVC400
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The documentation for the Class Library Reference distributed with Visual C++ is
	incorrect. The documentation states:
	
	  IDOK or IDCANCEL if the function is successful; otherwise 0. IDOK and
	  IDCANCEL are constants that indicate whether the user selected the OK or
	  Cancel button.
	
	  If IDCANCEL is returned, you can call the Windows CommDlgExtendedError
	  function to determine whether an error occurred.
	
	The corrected documentation should read:
	
	  IDOK or IDCANCEL. If IDCANCEL is returned, you can call the Windows
	  CommDlgExtendedError function to determine whether an error occurred.
	
	  IDOK and IDCANCEL are constants that indicate whether the user selected the OK
	  or Cancel button.
	
	STATUS
	======
	
	This problem was corrected in the documentation for Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	This correction applies to the documentation for the following MFC common dialog
	classes: CFileDialog, CColorDialog, CFontDialog, CPageSetupDialog, CPrintDialog,
	and CFindReplaceDialog.
	
	NOTE: 0 is not a legitimate return value for the MFC common dialog DoModal member
	function.
	
	Additional query words: CfileDialog CColorDialog CfontDialog CPageSetupDialog CPrintDialog CFindReplaceDialog
	
	======================================================================
	Keywords          : kbui kbdocerr kbCmnDlg kbMFC kbDocs KbUIDesign kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
