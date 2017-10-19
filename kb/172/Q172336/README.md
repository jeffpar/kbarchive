---
layout: page
title: "Q172336: PRB: Assertion Launching Program with Tip of Day &amp; Splash Screen"
permalink: /kb/172/Q172336/
---

## Q172336: PRB: Assertion Launching Program with Tip of Day &amp; Splash Screen

	Article: Q172336
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC KbUIDesign kbVC400 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Component Gallery, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When launching an MFC MDI application through a document from Explorer, an
	assertion is hit in the Afxwin2.inl file. This assertion only occurs if the
	application contains the Tip of the Day and Splash Screen components from the
	Component Gallery.
	
	CAUSE
	=====
	
	When an application is launched by opening its document, MFC delays showing the
	main frame window. This delay is enough to cause the Tip of the Day modal dialog
	box to be parented off the modeless Splash Screen dialog box instead of the main
	frame. When the timer expires for the Splash Screen, it destroys itself and its
	children including the Tip of the Day dialog box. MFC still tries to process
	messages for that dialog box, thereby causing the assertion.
	
	RESOLUTION
	==========
	
	Delay showing the Tip of the Day dialog until after the Splash Screen destroys
	itself.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When an MFC application is normally launched (from the .exe file), the default
	behavior is to create the MDI Main frame window and to show it at the end of
	InitInstance(). When a splash screen is inserted from the component gallery, the
	Splash Screen modeless dialog box is displayed during CMDIFrameWnd::LoadFrame()
	which is called before the main window is shown. When the Tip of the Day
	component is inserted, its modal dialog box is shown after the main window is
	shown. A modal dialog box by default uses the last activated popup window as
	returned from ::GetLastActivePopup() as its parent. The code in
	CWnd::GetSafeOwner() which is called by CDialog::PreModal() uses the main window
	as the parameter to GetLastActivePopup() thereby returning the main window
	because it was the most recently active. As a result, the Tip of the Day dialog
	box is parented off the main window. For example:
	
	     BOOL CTipApp::InitInstance()
	     {
	        ...
	        if (!pMainFrame->LoadFrame(IDR_MAINFRAME)) // Display splash screen.
	           return FALSE;
	        m_pMainWnd = pMainFrame;
	        ...
	        if (!ProcessShellCommand(cmdInfo))  // Handle FileDDE or FileOpen
	           return FALSE;
	        ...
	        pMainFrame->ShowWindow(m_nCmdShow);
	        ...
	        ShowTipAtStartup();  // Display Tip of the Day dialog box.
	        ...
	     }
	
	When an MFC application is launched from opening a document from the Explorer,
	the shell sends a DDE message to the MFC application and the shell command line
	information contains a DDE flag. This flag sets m_nCmdShow to FALSE so that the
	window can be shown later when the DDE message is processed by
	CDocManager::OnDDECommand(). This allows the Splash Screen to be the last
	activated window, so the Tip of the Day dialog box is parented off of it.
	
	Because the Splash Screen kills itself by using a timer, it takes the tip of the
	day dialog box with it. This causes an assertion in line 35 (or line 39 in
	Visual C versions 5.0 and 6.0) in the CWnd::SendMessage() inline function in the
	Afxwin2.inl file. This is because MFC is still running its RunModalLoop() and is
	trying to send a message to an invalid hWnd.
	
	One workaround is to remove the call to ShowTipAtStartup() from InitInstance()
	and to simply display the Tip of the Day dialog box after the Splash Screen is
	destroyed. For example:
	
	     void CSplashWnd::HideSplashScreen()
	     {
	        // Destroy the window, and update the mainframe.
	        DestroyWindow();
	        AfxGetMainWnd()->UpdateWindow();
	        AfxGetMainWnd()->PostMessage(WM_COMMAND, CG_IDS_TIPOFTHEDAY);
	     }
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbMFC KbUIDesign kbVC400 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbCompGallery
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
