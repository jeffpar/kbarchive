---
layout: page
title: "Q200421: HOWTO: Enhance File Open Dialog with Multiple Extension Filters"
permalink: /kb/200/Q200421/
---

## Q200421: HOWTO: Enhance File Open Dialog with Multiple Extension Filters

	Article: Q200421
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnDlg kbCmnDlgFileO kbDlg kbMFC KbUIDesign kbVC500 kbVC600 kbGrpDSMFCATL kbDialog
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Open File common dialog class, CFileDialog, you can specify
	filters containing multiple extensions. In such a case, when the user enters the
	file name without an extension, the Open File common dialog class looks for a
	file with the specified file name, or a file name obtained by concatenating the
	file name and the .one default extension (specified in the lpstrDefExt field of
	the OPENFILENAME structure).
	
	This article shows you how to enhance this behavior. After the user specifies a
	file name and clicks OK, the enhanced dialog class looks for a file that matches
	the specified file name. If none is found, the new dialog class tries to build
	file names by successively concatenating the user specified file name with the
	extensions from the current filter. If a file exists that matches the new file
	name, this file name is accepted.
	
	MORE INFORMATION
	================
	
	The class behaves as described in the SUMMARY section if the following three
	conditions are satisfied:
	
	1. The open file dialog box is used to open a file, not save one.
	
	2. The flag OFN_ALLOWMULTISELECT is not specified in the m_ofn.Flags member
	  variable.
	
	3. The m_ofn.lpstrDefExt variable specifies a NULL default extension.
	
	To achieve the goals specified in the SUMMARY section of this article, a
	CFileDialog-derived class has to be declared. The core of the solution is in
	providing an override for the OnFileNameOK() function.
	
	Step-by-Step Procedure
	----------------------
	
	1. Using ClassWizard, add a new class derived from CFileDialog, and name it
	  CMultiExtFilterFileDialog.
	
	2. Using ClassWizard, add a new BOOL variable, m_bFileMustExist, to the new
	  class.
	
	3. Add the following line to your implementation file:
	
	  #define WM_SETUP_FLAGS  WM_APP+0x500
	
	  Your dialog uses this as a private internal message.
	
	4. Add overrides for the DoModal() and OnFileNameOK() functions.
	
	5. In the dialog implementation file, define the DoModal() override as follows:
	
	  int CMultiExtFilterFileDialog::DoModal()
	  {
	      // If opening a file, and multi select is not enabled,
	      // and no default extension is specified:
	      if (m_bOpenFileDialog && !(m_ofn.Flags & OFN_ALLOWMULTISELECT) &&
	          !m_ofn.lpstrDefExt)
	      {
	          m_bFileMustExist = m_ofn.Flags & OFN_FILEMUSTEXIST;
	          m_ofn.Flags &= ~OFN_FILEMUSTEXIST;
	      }
	
	      return CFileDialog::DoModal();
	  }
	
	6. In the dialog implementation file, define the OnFileNameOK() override as
	  follows:
	
	  BOOL CMultiExtFilterFileDialog::OnFileNameOK()
	  {
	      // If saving, or if multi select is enabled, or a default extension
	      // is available, preserve original functionality:
	      if (!m_bOpenFileDialog ||
	          (m_ofn.Flags & OFN_ALLOWMULTISELECT) ||
	          (m_ofn.lpstrDefExt))
	          return CFileDialog::OnFileNameOK();
	
	      CString strFName = GetPathName();
	      WIN32_FIND_DATA fd;
	
	      // Use if the file exists as specified in the file name edit box:
	      if (::FindFirstFile(strFName, &fd) != INVALID_HANDLE_VALUE)
	      {
	          // Accept file name:
	          return 0;
	      }
	      // Use if a file extension was specified:
	      if (strFName.ReverseFind('.') > strFName.ReverseFind('\\'))
	      {
	          // Reject file name:
	          return 1;
	      }
	
	      CString strMultiExt, strExt;
	
	      // Get current filter extensions:
	      AfxExtractSubString(strMultiExt, m_ofn.lpstrFilter,
	          2*m_ofn.nFilterIndex - 1, (TCHAR)'\0');
	
	      // For every extension in the filter:
	      for (int i = 0;
	          AfxExtractSubString(strExt, strMultiExt, i, (TCHAR)';');
	          i++)
	      {
	          // No '*' is allowed in filter extensions:
	          if (_tcsrchr((LPCTSTR)strExt + 1, (TCHAR)'*'))
	              continue;
	          if (INVALID_HANDLE_VALUE !=
	              ::FindFirstFile(strFName+((LPCTSTR)strExt+1), &fd))
	          {
	              unsigned int flen = _tcslen(m_ofn.lpstrFile);
	              // If the buffer is not big enough, ignore this extension:
	              if (flen + strExt.GetLength() > m_ofn.nMaxFile)
	                  continue;
	
	              _tcscpy(m_ofn.lpstrFile + flen, (LPCTSTR)strExt+1);
	              // Accept the file name:
	              return 0;
	          }
	      }
	
	      // To get FileMustExist validation, reset the flag:
	      if (m_bFileMustExist)
	      {
	          // Set the file exist check back to the original:
	          m_ofn.Flags |= OFN_FILEMUSTEXIST;
	          // Get default processing (for instance, the file must exist 
	          // message box):
	          PostMessage(WM_KEYDOWN, (WPARAM)(VK_RETURN), (LPARAM)(1));
	          // Reset the file exist check:
	          PostMessage(WM_SETUP_FLAGS);
	          return 1;
	      }
	      else
	          return 0;
	  }
	
	7. Finally, provide a handler for the user message specified in step 3:
	
	  a. In your header file, in the declaration of multiExtFilterFileDialog, add
	     the following lines:
	
	  class CMultiExtFilterFileDialog: public CFileDialog
	  {
	      // ...
	      afx_msg LRESULT OnSetupFlags(WPARAM, LPARAM);  // <-- Add this
	      DECLARE_MESSAGE_MAP()
	  };
	
	  b. In your implementation file, add the following code:
	
	  BEGIN_MESSAGE_MAP(CMultiExtFilterFileDialog, CFileDialog)
	      //{ {AFX_MSG_MAP(CMultiExtFilterFileDialog)
	      //} }AFX_MSG_MAP
	      ON_MESSAGE(WM_SETUP_FLAGS, OnSetupFlags)
	  END_MESSAGE_MAP()
	
	  LRESULT CMultiExtFilterFileDialog::OnSetupFlags(WPARAM, LPARAM)
	  {
	      if (m_bFileMustExist)
	          m_ofn.Flags &= ~OFN_FILEMUSTEXIST;
	      return 0;
	  }
	
	Once these steps are completed, you can use the dialog as follows:
	
	  TCHAR szFilters[] =
	      _T("Text Files (*.txt;*.log;*.bak)\0*.txt;*.log;*.bak\0")
	      _T("C++ Files (*.cc;*.cpp;*.h;*.hpp)\0*.cc;*.cpp;*.h;*.hpp\0");
	  CMultiExtFilterFileDialog ofdlg(TRUE);
	  ofdlg.m_ofn.lpstrFilter = szFilters;
	  if (ofdlg.DoModal() == IDOK)
	  {
	      AfxGetApp()->m_pDocManager->OpenDocumentFile(ofdlg.m_ofn.lpstrFile);
	  }
	
	REFERENCES
	==========
	
	The following article in the Microsoft Knowledge Base provides an excellent
	sample of how to customize common file dialogs:
	
	OfnKing Demonstrates CFileDialog Customization
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnDlg kbCmnDlgFileO kbDlg kbMFC KbUIDesign kbVC500 kbVC600 kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
