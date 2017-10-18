---
layout: page
title: "Q150571: FIX: CWnd::DragAcceptFiles() in Books Online"
permalink: kb/150/Q150571/
---

## Q150571: FIX: CWnd::DragAcceptFiles() in Books Online

	Article: Q150571
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbDocs kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220b
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The documentation for CWnd::DragAcceptFiles() in Books Online states:
	
	  Call this member function from within the main window in your application's
	  CWinApp::InitInstance function to indicate that your main window and all
	  child windows accept dropped files from the Windows File Manager.
	
	This information is not correct. The message is not propagated to the child
	windows.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	Since DragAcceptFiles() is a member function of CWnd class, a CWnd pointer is
	needed to call this function in CWinApp::InitInstance(). The window that calls
	DragAcceptFiles() with the bAccept parameter set to TRUE has identified itself
	as able to process the WM_DROPFILES message from Windows File Manager.
	
	For example, in an MFC MDI application, if the CMDIFrameWnd window pointer is
	used in the DragAcceptFiles() function call, only the CMDIFrameWnd window gets
	the WM_DROPFILES message. This message is not sent to all open CMDIChildWnd
	windows. For a CMDIChildWnd window to receive this message, you need to call
	DragAcceptFiles() with the CMDIChildWnd window pointer.
	
	The correct documentation is also found in Windows API DragAcceptFiles() function
	in Books Online.
	
	Additional query words: kbdocerr
	
	======================================================================
	Keywords          : kbMFC kbDocs kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC500bug kbVC600fix kbGrpDSTools kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
