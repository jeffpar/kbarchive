---
layout: page
title: "Q93916: INFO: Calling MFC MDI Base Class Message Handlers"
permalink: /kb/093/Q93916/
---

## Q93916: INFO: Calling MFC MDI Base Class Message Handlers

	Article: Q93916
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchitecture
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an application developed for the Microsoft Windows environment that uses the
	multiple document interface (MDI), an application that implements an MDI frame
	window or an MDI child window must pass certain messages to the default window
	procedure to provide default MDI functionality. When the application uses the
	Microsoft C++ Foundation Classes (MFC), the application calls the base class
	message handler after processing an MDI message to provide the default MDI
	behavior.
	
	MORE INFORMATION
	================
	
	According to the Windows Software Development Kit (SDK) documentation for
	DefMDIChildProc, an application that uses MDI must pass messages to the
	appropriate function to provide default MDI behavior. In MFC, one of the message
	handling functions listed in the message map processes the MDI messages. If an
	application overrides the message handler for these messages, it may be
	necessary for the application to call the base class message handler after
	processing the message for MDI to function correctly.
	
	The text below lists the messages processed by DefFrameProc() and
	DefMDIChildProc(), and the message handler that corresponds to each message:
	
	Messages Processed by DefFrameProc()
	------------------------------------
	
	  WM_COMMAND     OnCommand()
	  WM_MENUCHAR    OnMenuChar()
	  WM_SETFOCUS    OnSetFocus()
	  WM_SIZE        OnSize()
	
	Messages Processed by DefMDIChildProc()
	---------------------------------------
	
	  WM_CHILDACTIVATE    OnChildActivate()
	  WM_GETMINMAXINFO    OnGetMinMaxInfo()
	  WM_MENUCHAR         OnMenuChar()
	  WM_MOVE             OnSize()
	  WM_SETFOCUS         OnSetFocus()
	  WM_SIZE             OnSize()
	  WM_SYSCOMMAND       OnSysCommand()
	
	If a class derived from CMDIFrameWnd overrides the OnCommand() message handler,
	it must call the CMDIFrameWnd::OnCommand() function for each message that it
	does not handle. Please refer to the Windows SDK documentation for more
	information about the messages processed by the DefFrameProc() and
	DefMDIChildProc() functions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
