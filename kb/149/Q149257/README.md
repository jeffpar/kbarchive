---
layout: page
title: "Q149257: How to Replace a View in a Splitter Window"
permalink: kb/149/Q149257/
---

## Q149257: How to Replace a View in a Splitter Window

	Article: Q149257
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbDocView kbMFC KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SPLIT32 sample demonstrates the following Microsoft Foundation Class (MFC)
	programming concepts:
	
	1. A ReplaceView() function can be created which replaces a view in a
	  CSplitterWnd pane with another. The function replaces a view but uses the
	  same CDocument object. This function can be helpful if a programmer wants to
	  keep the same frame window and document for a splitter pane, and only wants
	  to delete a view in a pane and replace it with another.
	
	2. The CDocument variable m_bAutoDelete can be used to prevent the destruction
	  of a CDocument object if all views of the document are destroyed.
	
	3. The CWnd::PreCreateWindow() function can be used to prevent the main
	  application from having a thick frame, thus preventing the user from resizing
	  the main application window.
	
	4. By trapping the WM_SETCURSOR, WM_MOUSEMOVE, and WM_LBUTTONDOWN messages of a
	  CSplitterWnd, you can fix the splitter bars in a splitter window so that they
	  can't be moved by the user.
	
	5. CSplitterWnd panes can contain regular CWnd objects and are not limited to
	  the use of CViews. This sample places a dialog in the first pane.
	
	6. CWnd::CenterWindow() can be used to position windows at the center of the
	  screen.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Split32.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running SPLIT32.EXE to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	NOTE: The following Microsoft Software Library samples, which also replace
	various views, are also available:
	
	- VWRPLC32 (MDI)
	
	- COLLECT (MDI)
	
	- ENROLL (SDI)
	
	- VSWAP32 (SDI)
	
	To understand what the sample does, first execute the program. You will see a
	main application window with a splitter window (CSplitterWnd) in its client
	area. A selection dialog will be displayed in the first pane and a view will be
	displayed in the second pane.
	
	Click on the View 1 and View 2 buttons. Notice that the view in the second pane
	will switch from one to the other. The view is changing, but after looking at
	the source you'll see that the document stays the same.
	
	Additional query words: 4.00 split Q102827 softlib
	
	======================================================================
	Keywords          : kbfile kbsample kbDocView kbMFC KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	
	=============================================================================
	
