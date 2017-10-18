---
layout: page
title: "Q135389: FIX: What's New: Bug Fixes Made in Visual C++ Version 2.2"
permalink: kb/135/Q135389/
---

## Q135389: FIX: What's New: Bug Fixes Made in Visual C++ Version 2.2

	Article: Q135389
	Product(s): Microsoft C Compiler
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbArtTypeINFkbbuglist kbfixlist
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists fixes made in version 2.2 to bugs that appeared in Microsoft
	Visual C++, 32-bit Edition, versions 2.0 and 2.1. This information can also be
	found in the What's New help file available from Books Online or from the
	initial Setup dialog box.
	
	
	MORE INFORMATION
	================
	
	All of the following bugs were fixed in Microsoft Visual C++, 32-bit Edition,
	version 2.2.
	
	Integrated Development Environment
	----------------------------------
	
	- Pressing the F9 key or clicking the Toolbar button to set a breakpoint would
	  cause a beep, and breakpoint would not be set. This bug would manifest itself
	  when you chose a Windows number format that uses a comma instead of a decimal
	  in a floating point number.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q127779 FIX: Can't Set BreakPoint w/ Country Set to Non-English Locale
	
	
	- Editing a menu resource that contains a menu separator in the top-level menu
	  could cause a general protection (GP) fault. This problem would most likely
	  occur if you had generated an AppWizard OLE application. The cause was a bug
	  in the resource editor.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q129094 FIX: GP Fault in Visual C++ When Separators in Top-Level Menu
	
	
	MFC 3.2
	-------
	
	- Calling CDatabase::Open in a USRDLL with the parameter list (NULL, FALSE,
	  FALSE, "ODBC;") could generate a CDBException with its m_strError member set
	  to the value "Dialog failed." This problem occurs because the SQL Data Source
	  dialog is displayed with a NULL main window. The desktop window now is passed
	  as the main window.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q125794 PRB: Calling CDatabase::Open in a USRDLL Causes CDBException
	
	
	- ODBC32.DLL fails to load on Win32s. A new ODBC32.DLL, which will load on
	  Win32s, has been integrated in the \WIN32S directory of the Visual C++
	  version 2.2 CD.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q129772 FIX: "Attempt to load required component ODBC32.DLL failed"
	
	
	- Pulling down the File menu using an MRU list that contains a file stored on a
	  floppy disk drive resulted in an attempt to access the floppy.
	
	
	- MFC Tooltips did not get their styles from the Windows 95 settings. MFC 3.0
	  and 3.1 did not use the system implementation for Tooltips; Windows 95 uses
	  it, and therefore follows the system settings.
	
	
	- Centering was not turned off for some dialog boxes that had the DS_ABSALIGN
	  style. Conditional logic was corrected to eliminate this problem.
	
	
	- When an item chosen from the MRU list failed to open, MFC did not remove that
	  item from the MRU list. If the document fails to open, the item is now
	  removed from the MRU list.
	
	
	- CDC::GetWindow was documented, but did not exist in the CDC class. The
	  function was added to the CDC class.
	
	
	- CString::TrimLeft did not trim properly in Unicode builds. The function did
	  not correctly account for the trailing NULL character.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q129770 FIX: CString::TrimLeft Fails in a UNICODE Application
	
	- Incorrect painting for a CEditView in a splitter window. The default window
	  style was not being set correctly in a Windows 95 splitter window. This
	  problem has been corrected.
	
	
	- CPropertySheet::ProcessChars had an incorrect conditional in the case of the
	  WM_SYSCHAR message. The conditional logic for checking whether any control
	  had the focus was incorrectly checking for ::GetFocus==NULL instead of the
	  return value of GetFocus. This has been corrected to ::GetFocus()==NULL.
	
	
	- The frame window was not reactivated when EndModalState was called. OnModal
	  called BeginModalState, setting the m_cModalStack to a value higher than it
	  should have been. This has been corrected.
	
	
	- CString::operator= did not correctly null-terminate a unicode string. This
	  has been corrected.
	
	
	- The wrong toolbar is sometimes displayed if multiple MFC OLE servers are
	  activated in Microsoft Excel. This has been corrected.
	
	
	- Opening a recordset to do a bulk add sometimes caused text fields to be
	  truncated. This has been corrected.
	
	
	- CEnumConnPoints::OnNext generated an Application Error when called.
	
	  This line:
	
	        ((LPCONNECTIONPOINT)pv)->AddRef();
	
	  has been corrected to read:
	
	       (*(LPCONNECTIONPOINT*)pv)->AddRef();
	
	- Calling DdeClientTransaction in the debug version of Windows generated a
	  debug warning. This has been corrected.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q111013 FIX: DDE Warning Message: Invalid Value: -32767
	
	
	- COleDispatchDriver::InvokeHelperV sometimes faulted when passed E_FAIL. This
	  has been corrected.
	
	
	- A memory leak resulted if an automation method threw an exception and there
	  were arguments of types BSTR, DISPATCH, or UNKNOWN that required coercion
	  into a temporary. This has been corrected.
	
	
	- A debug build of an application would assert, and a retail build would hang
	  on a task switch while in SHIFT+F1 help mode. This has been corrected.
	
	
	- Decoding a UNICODE CString in a non-UNICODE application corrupted data. When
	  CString deserialized a UNICODE CString object in a non-UNICODE application,
	  the number of bytes in the string was determined correctly, but only one byte
	  was allocated for the terminating null ('\0') character. This has been
	  corrected.
	
	
	- In Windows 95, CScrollView miscalculates scroll position. When the
	  proportional thumb is set it will be off slightly when you scroll by dragging
	  the thumb. This has been corrected.
	
	
	- CSplitterWnd sometimes displayed incorrect painting because when calculating
	  the region to paint, it assumed that the splitter bar shared the border with
	  the window. In Windows 95, this is not the case. This has been corrected.
	
	
	- CRecordset::Open was not maintaining SQL parsing errors. The mechanism for
	  throwing exceptions in the case of non-concurrency related errors was
	  modified so that the ODBC error strings will be filled prior to throwing a
	  CDBException.
	
	
	- IsFieldNull sometimes returned FALSE for single-precision floating-point
	  fields that are NULL. This has been corrected.
	
	
	- Calling IsFieldDirty twice could cause a database exception. This has been
	  corrected.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q128831 FIX: CFile Exception: badSeek, OS error information = -1
	
	
	- CRecordSet::m_bUseUpdateSQL was used before being initialized. This has been
	  corrected.
	
	
	Setup
	-----
	
	- Running Setup.exe in the root directory of the CD that Visual C++ 2.0 or 2.1
	  come on from a UNC path would result in a Setup failure. Setup.exe was not
	  intended to handle UNC connections correctly. this problem has been
	  corrected. (An example of a UNC path is: \\Server\Share\Setup.exe.)
	
	
	- The MFC Windows Socket DLLs were not installed on Win32s. Setup now installs
	  these DLLs.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q129782 FIX: MFCN30.DLL and MFCN30D.DLL Not Copied with Win32S Setup
	
	
	Additional query words: 2.00 2.10 2.20
	
	======================================================================
	Keywords          : kbGenInfo kbVC kbArtTypeINF kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC220
	Version           : :2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
