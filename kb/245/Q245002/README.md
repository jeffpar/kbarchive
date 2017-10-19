---
layout: page
title: "Q245002: BUG: CFileDialog Causes Help Window to Appear on WinCE 2.11"
permalink: /kb/245/Q245002/
---

## Q245002: BUG: CFileDialog Causes Help Window to Appear on WinCE 2.11

	Article: Q245002
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCmnDlg kbMFC kbVC600bug kbOSWinCEsearch kbOSWinCE211 kbGrpDSMFCATL
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an H/PC Pro device running the Microsoft Windows CE 2.11 operating system, if
	you have an MFC application that calls CFileDialg::DoModal and uses multiple
	file types, when you change the file type in the Open file name dialog box and
	click OK to open the file, the application's Help window is displayed, instead
	of opening the file. The Help window only appears if the application handles the
	ID_HELP command; otherwise, nothing happens.
	
	CAUSE
	=====
	
	The CFileDialog class specifies a hook function, and sets the OFN_ENABLEHOOK
	flag in the OPENFILENAME structure. The CFileDialog class then passes this
	structure to the ::GetOpenFilenames function. The CFileDialog class expects to
	receive a WM_INITDIALOG message from the dialog box that is created from calling
	::GetOpenFilenames. However, the CFileDialog class does not receive this
	message, and some necessary variables are not initialized correctly.
	
	These variables are custom Windows messages that are sent to the hook procedure
	when certain events occur. The two variables that cause this bug (although they
	are only part of the problem) are _afxMsgFILEOK and _afxMsgHELP. Both of these
	variables are initially set to 0 (zero) and should be initialized in the
	WM_INITDIALOG handler.
	
	The problem occurs only when you change the file type in the Open file name
	dialog box, because the only message sent to the hook procedure is a WM_NOTIFY
	message with the CDN_TYPECHANGE code. When this message is handled by the
	CFileDialog procedure, the dialog box window is subclassed so that MFC's hook
	procedure receives all other messages going to the dialog box. When the OK
	button is clicked, the hook procedure is sent a _afxMsgFILEOK message. However,
	because the _afxMsgFILEOK and _afxMsgHELP variables were not initialized
	correctly, the value of _afxMsgFILEOK is 0 (zero), which is the same as a
	_afxMsgHELP message. Therefore, when the following code in the CFileDialog hook
	procedure is called, the Help window is displayed:
	
	  	if (message == _afxMsgHELP ||
	  	   (message == WM_COMMAND && LOWORD(wParam) == pshHelp))
	  	{
	  	// Translate the message into the AFX standard help command.
	  		SendMessage(hWnd, WM_COMMAND, ID_HELP, 0);
	  		return 1;
	  	}
	
	RESOLUTION
	==========
	
	Windows CE does not support the lpfnHook and OFN_ENABLEHOOK flags of the
	OPENFILENAME structure. Therefore, you must create a new class that derives from
	CFileDialog and overrides DoModal. The following code demonstrates how to
	override DoModal in the derived class.
	
	In the new class, add a declaration for DoModal as follows:
	
	  	virtual int DoModal();
	
	Include Afxpriv.h and implement DoModal as follows in the class .cpp file:
	
	  int	CMyFileDialog::DoModal()
	  {
	  	ASSERT_VALID(this);
	
	  	m_ofn.Flags &= ~OFN_ENABLEHOOK;
	  	m_ofn.lpfnHook = NULL;
	
	  	// Zero out the file buffer for constant parsing later.
	  	ASSERT(AfxIsValidAddress(m_ofn.lpstrFile, m_ofn.nMaxFile));
	  	memset(m_ofn.lpstrFile, 0, m_ofn.nMaxFile);
	
	         // WINBUG: This is a special case for the file Open/Save dialog box,
	         // which sometimes pumps while it is coming up but before it has
	         // disabled the main window.
	  	HWND hWndFocus = ::GetFocus();
	  	BOOL bEnableParent = FALSE;
	  	m_ofn.hwndOwner = PreModal();
	  	AfxUnhookWindowCreate();
	  	if (m_ofn.hwndOwner != NULL && ::IsWindowEnabled(m_ofn.hwndOwner))
	  	{
	  		bEnableParent = TRUE;
	  		::EnableWindow(m_ofn.hwndOwner, FALSE);
	  	}
	
	  	_AFX_THREAD_STATE* pThreadState = AfxGetThreadState();
	  	ASSERT(pThreadState->m_pAlternateWndInit == NULL);
	
	  #if !defined(_WIN32_WCE)
	  	if (m_ofn.Flags & OFN_EXPLORER)
	  		pThreadState->m_pAlternateWndInit = this;
	  	else
	  		AfxHookWindowCreate(this);
	  #endif // _WIN32_WCE
	
	  	int nResult;
	  	if (m_bOpenFileDialog)
	  		nResult = ::GetOpenFileName(&m_ofn);
	  	else
	  		nResult = ::GetSaveFileName(&m_ofn);
	  #if defined(_WIN32_WCE_PSPC)
	  	// WinCE: By default (no choice in "Location" is selected), m_ofn.lpstrFile has
	  	// double slashes in front of it. Get rid of one if necessary.
	  	if (!m_bOpenFileDialog && (*m_ofn.lpstrFile == _T('\\')) && (*(m_ofn.lpstrFile+1) == _T('\\')))
	  		memmove((void*)m_ofn.lpstrFile, (void*)(m_ofn.lpstrFile + 1), _tcslen(m_ofn.lpstrFile)*sizeof(TCHAR)); 
	  #endif // _WIN32_WCE_PSPC
	
	  	if (nResult)
	  		ASSERT(pThreadState->m_pAlternateWndInit == NULL);
	  	pThreadState->m_pAlternateWndInit = NULL;
	
	        // WINBUG: Second part of special case for File Open/Save dialog box.
	  	if (bEnableParent)
	  		::EnableWindow(m_ofn.hwndOwner, TRUE);
	  	if (::IsWindow(hWndFocus))
	  		::SetFocus(hWndFocus);
	
	  	PostModal();
	  	return nResult ? nResult : IDCANCEL;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the Application Wizard to create an MFC Windows CE Single Document
	  application, and make sure to select the Windows Help check box in step 2 of
	  the wizard.
	
	2. Edit the menu resource and add a menu item to the edit menu that is named Do
	  File Dialog, and then use the MFC ClassWizard to add a handler for it.
	
	3. Add the following code to the menu handler created in step 2:
	
	  void CTestApp::OnDoFileDialog()
	  {
	  	CString OpenFilter;
	  		OpenFilter = "Text File (*.txt)|*.txt|";
	  		OpenFilter += "HTML File (*.htm;*.html)|*.htm;*.html|";
	  		OpenFilter += "All Files (*.*)|*.*||";
	
	  	CFileDialog FileOpenDialog(
	  		TRUE,
	  		NULL,
	  		NULL,
	  		OFN_FILEMUSTEXIST |	OFN_HIDEREADONLY | OFN_PATHMUSTEXIST,
	  		OpenFilter,					// filter
	  		AfxGetMainWnd());					// the parent window
	
	          FileOpenDialog.DoModal();
	  }
	
	4. Build the application, download it to the device, and then run it.
	
	5. Save a file with the .htm extension.
	
	6. Choose the menu item created in step 2, which will display the Open file name
	  dialog box, and change the file filter to HTML files.
	
	7. Try to open the file saved above and notice that the Help window is
	  displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnDlg kbMFC kbVC600bug kbOSWinCEsearch kbOSWinCE211 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	
	=============================================================================
	
