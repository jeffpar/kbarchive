---
layout: page
title: "Q113251: MULTICON Demonstrates Dynamic Icons"
permalink: kb/113/Q113251/
---

## Q113251: MULTICON Demonstrates Dynamic Icons

	Article: Q113251
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbMDI kbMFC KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MULTICON sample demonstrates how to implement dynamic icons for both
	CMDIChildWnd and CMDIFrameWnd windows. The procedure is to first register a
	window class with a NULL icon for the frame. A frame of this type receives
	WM_PAINT messages when it becomes iconic, and can output to a 36 x 36* pixel
	area. To prevent duplicating output code from the view, the frame can call its
	view's OnDraw member to do the output.
	
	NOTE: Dynamically animated application icons will not work on Windows 95 and
	versions of Windows NT after 3.51.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Multicon.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	This file contains subdirectories, be sure to use the -d command line switch
	while extracting.
	
	Two simple view classes are used to demonstrate dynamic icons: CRectView and
	CEllipseView. These classes draw a random rectangle and a random ellipse,
	respectively. CWinApp::OnIdle is overridden to invalidate each open view and
	each minimized frame window. The MULTICON sample also demonstrates how to scale
	the output from an open view to fit a minimized frame, and how to convert the
	minimized frame's output to an icon during a drag operation.
	
	*For Windows 3.1, subject to change in future versions of Windows.
	
	Feature (How to...)                            Location(s)
	-------------------                            -----------
	Generate random rectangles ................... RECTVIEW.CPP
	                                              CRectView::OnDraw
	
	Generate random ellipses ..................... ELLPSEVW.CPP:
	                                              CEllipseView::OnDraw
	
	Register a window class with a NULL
	icon ......................................... MAINFRM.CPP:
	                                              CMainFrame::PreCreateWindow
	
	Render on a minimized CMDIFrameWnd using the
	application's active view .................... CMainFrame::OnPaint
	
	Convert the display of a minimized
	CMDIFrameWnd to an icon ...................... CMainFrame::QueryDragIcon
	
	Enable OnIdle processing while a menu or
	modal dialog is displayed .................... CMainFrame::OnEnterIdle
	
	Render on a minimized CMDIChildWnd using the   
	associated view .............................. ICONWND.CPP:
	                                              CIconWnd::OnPaint
	
	Convert the display of a minimized
	CMDIChildWnd to an icon ...................... CIconWnd::QueryDragIcon
	
	Drive animated views and icons in the          
	background ................................... MULTICON.CPP:
	                                              CMulticonApp::OnIdle
	
	Additional query words: dynamic mdi frame child kbfile
	
	======================================================================
	Keywords          : kbfile kbsample kbMDI kbMFC KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1
	
	=============================================================================
	
