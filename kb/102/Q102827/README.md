---
layout: page
title: "Q102827: Replacing a View in a Splitter Window"
permalink: /kb/102/Q102827/
---

## Q102827: Replacing a View in a Splitter Window

	Article: Q102827
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1
	Operating System(s): 
	Keyword(s): kbsample kbDocView kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCA
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SPLIT sample demonstrates the following Foundation Class programming
	concepts:
	
	1. A ReplaceView() function can be created which replaces a view in a
	  CSplitterWnd pane with another. The function replaces a view but uses the
	  same CDocument object. This function can be helpful if a programmer wants to
	  keep the same frame window and document for a splitter pane and only wants to
	  delete a view in a pane and replace it with another.
	
	2. The CDocument variable m_bAutoDelete can be used to prevent the destruction
	  of a CDocument object if all views of the document are destroyed.
	
	3. The CWnd::PreCreateWindow() function can be used to prevent the main
	  application from having a thick frame thus preventing the user from resizing
	  the main application window.
	
	4. By trapping the WM_SETCURSOR, WM_MOUSEMOVE, and WM_LBUTTONDOWN messages of a
	  CSplitterWnd, you can fix the splitter bars in a splitter window so that they
	  can't be moved by the user.
	
	5. CSplitterWnd panes can contain regular CWnd objects and are not limited to
	  the use of CViews. This sample places a dialog in the first pane.
	
	6. The undocumented CWnd::CenterWindow() can be used to position windows at the
	  center of the screen.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Split.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running SPLIT.EXE to decompress the file to
	re-create the proper directory structure.
	
	MORE INFORMATION
	================
	
	To understand what the sample does, first execute the program. You will see a
	main application window with a splitter window (CSplitterWnd) in its client
	area. A selection dialog will be displayed in the first pane and a view will be
	displayed in the second pane.
	
	Click on the "View 1" and "View 2" buttons. Notice that the view in the second
	pane will switch from one to the other. The view is changing but looking at the
	source you'll see that the document stays the same.
	
	The sample project can be converted to a 32-bit Visual C++ 2.x project and will
	successfully compile and execute once the following change has been made:
	
	On line 34 of SPLITTER.CPP, change:
	
	     ::SetWindowWord
	     GWW_ID
	
	to:
	
	     ::SetWindowLong
	     GWL_ID
	
	If you have comments or suggestions about how to improve this sample, please send
	Microsoft a message to the MFC section of the MSLANG forum.
	
	Additional query words: split splitter sample
	
	======================================================================
	Keywords          : kbsample kbDocView kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1
	
	=============================================================================
	
