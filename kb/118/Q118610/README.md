---
layout: page
title: "Q118610: Using CWnd::GetParent in a Dialog Box"
permalink: /kb/118/Q118610/
---

## Q118610: Using CWnd::GetParent in a Dialog Box

	Article: Q118610
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDlg kbMFC KbUIDesign kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbGrpDSM
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The window object returned by CWnd::GetParent in a modal dialog box is the
	top-level window that owns the dialog box, usually the main window. It is not
	necessarily the window object that has been passed to the constructor or
	Create() of the CDialog object. If you need to access the parent window that was
	passed in the constructor of the dialog-box object, then you need to save a copy
	of this pointer in the dialog-box object.
	
	MORE INFORMATION
	================
	
	When Windows creates a new popup window or a top-level window, such as a
	dialog-box window, it is passed the handle of the parent window for the dialog
	box. If the specified parent window is not a top-level window, then Windows
	repeatedly calls GetParent until it finds the handle of a top-level window that
	contains the specified parent window. Windows then sets this top-level window to
	be the parent of the new popup or top-level window. So, after the new window is
	created, if you call GetParent in that window, you will get the pointer to the
	top-level window object that contains the original parent window that you passed
	in the constructor or Create() call.
	
	This behavior can cause problems in an MFC application if you try to create a
	dialog box with a view window as the parent and then try to access the view
	inside the dialog box by calling GetParent. Because the view window is not a
	top-level window, Windows automatically converts the handle of the view window
	to the handle of the top-level window that contains the view, which is usually
	the main window of the application. Then when you call GetParent, it gets the
	handle of the main window of the application and then finds the MFC object
	associated with the main window. If you need to access the view window from the
	dialog-box object, then you should store the pointer to the view in a member
	variable of the dialog box. To do this, save a pointer to the view window in the
	constructor of the dialog box or override the Create() function and have it save
	the pointer.
	
	Additional query words: 7.00 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 kbinf 4.00 kbNoUpdate
	
	======================================================================
	Keywords          : kbDlg kbMFC KbUIDesign kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
