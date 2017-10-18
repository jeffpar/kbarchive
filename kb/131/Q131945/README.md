---
layout: page
title: "Q131945: FIX: OnFileNameOK Returns 0 if Valid or 1 if Not Valid"
permalink: kb/131/Q131945/
---

## Q131945: FIX: OnFileNameOK Returns 0 if Valid or 1 if Not Valid

	Article: Q131945
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbFileIO kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following incorrect text appears in the online documentation for the
	function CFileDialog::OnFileNameOK() and in Books Online:
	
	  Return Value
	  Nonzero if the filename is a valid filename, otherwise 0.
	
	It should be:
	
	  Return Value
	  1 if the filename is NOT a valid filename, otherwise 0.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	CFileDialog::OnFilenameOK() is a virtual function that can be overridden to
	handle the private message FILEOKSTRING. When handling this message, the MFC
	common dialog hook function calls OnFileNameOK() and returns to the common
	dialog procedure whatever the virtual function returns. The dialog procedure in
	COMDLG32.DLL (or COMMDLG.DLL in 16-bit programs) dismisses the dialog if the
	return from the hook function is 0 (zero) and keeps the dialog displayed if the
	return value is 1 (one). Other nonzero return values are currently reserved and
	should not be used.
	
	This documentation error was corrected in Visual C++ 32-bit Edition version 4.2.
	
	Additional query words: kbVC400bug 2.50 2.51 3.00 3.10 4.20
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbFileIO kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
