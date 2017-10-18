---
layout: page
title: "Q250365: BUG: System Menu Gets Corrupted when File Dropped onto a MDI App"
permalink: kb/250/Q250365/
---

## Q250365: BUG: System Menu Gets Corrupted when File Dropped onto a MDI App

	Article: Q250365
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbprint kbGDI kbMenu kbMFC kbPrinting KbUIDesign kbDSupport kbGrpDSMFCATL
	Last Modified: 22-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a file from Windows Explorer or use a drag-and-drop
	operation to move the file while the file's associated MFC MDI application is in
	Print Preview mode, one of the following symptoms are observed:
	
	- If the child window for which Print Preview is being shown is not maximized
	  then the menu for the new child window is created on the top of the Print
	  Preview window.
	
	- If the MDI child window is maximized and in Print Preview mode then the two
	  sets of the system menu and the Minimize/Maximize/Close buttons are seen.
	
	CAUSE
	=====
	
	The application is supposed to close the print preview window and switch to the
	MDI child window that was created for opening this file. But the application is
	not able to switch to the associated view.
	
	RESOLUTION
	==========
	
	One way to work around this problem is to close the Print Preview window before
	creating a new window for the file being opened or dropped. The following code
	shows how this can be done:
	
	- Add the following line of code to the Stdafx.h file:
	
	  #include <afxpriv.h>
	
	- Create a handler for the WM_DROPFILES message in your CMainFrame class and
	  copy the following code in there.
	
	  void CMainFrame::OnDropFiles(HDROP hDropInfo) 
	  {
	  	CView* pView = GetActiveView();
	  	if (pView  && pView->IsKindOf(RUNTIME_CLASS(CPreviewView))) 
	  	{
	  		CPreviewView* pView = (CPreviewView *)GetActiveView();
	  		SendMessage(WM_COMMAND, AFX_ID_PREVIEW_CLOSE);
	  	}
	
	  	CMDIFrameWnd::OnDropFiles(hDropInfo);
	  }
	
	- Override the OnDDECommand virtual function in your application class and copy
	  the following code there:
	
	  BOOL CQ250365App::OnDDECommand(LPTSTR lpszCommand) 
	  {
	  	CMainFrame* pFrame = (CMainFrame *)AfxGetMainWnd();
	  	CView* pView = pFrame->GetActiveView();
	  	if (pView  && pView->IsKindOf(RUNTIME_CLASS(CPreviewView))) 
	  	{
	  		CPreviewView* pView = (CPreviewView *)pFrame->GetActiveView();
	  		pFrame->SendMessage(WM_COMMAND, AFX_ID_PREVIEW_CLOSE);
	  	}
	  	return CWinApp::OnDDECommand(lpszCommand);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The WM_DROPFILES message is sent when the user drops a file on the window of an
	application that has registered itself as a recipient of dropped files.
	
	The CWinApp::OnDDECommand method is called by the framework when the main frame
	window receives a DDE execute message. The default implementation checks whether
	the command is a request to open a document and, if so, then opens the specified
	document. The Windows File Manager usually sends such DDE command strings when
	the user double-clicks a data file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run AppWizard to create an MFC AppWizard (exe).
	
	2. Generate an MFC AppWizard (exe) as MDI type.
	
	3. At step 4 of 6, click Advanced set a file extension in the Advanced Options
	  dialog box to .xxx. The rest of the selections can be default.
	
	4. Build and run the application.
	
	5. Save the document as Test.xxx (where .xxx is a file extension).
	
	6. Close the application and run it again.
	
	7. Maximize the MDI child window and select Print Preview from the menu.
	
	8. Drag the test file from explorer into the application or double-click the
	  file to open it.
	
	9. You should see two sets of system menus and Minimize/Maximize/Close buttons.
	
	10. If you do the above tests with the child window in a normal state (not
	  maximized), you should see a menu on top of print preview window.
	
	REFERENCES
	==========
	
	For more information go to MSDN Help and search on OnDropFiles and
	OnDDECommand.
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Sreedhar Pelluru, Microsoft Corporation
	
	
	Additional query words: system menu print preview drop file
	
	======================================================================
	Keywords          : kbprint kbGDI kbMenu kbMFC kbPrinting KbUIDesign kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbWinXPHome kbWinXPPro kbAudDeveloper kbMFC kbVC600 kbVC32bitSearch kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
