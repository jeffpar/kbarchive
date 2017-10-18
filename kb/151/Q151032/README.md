---
layout: page
title: "Q151032: GENSPLIT Putting a Generic CWnd in a Splitter Pane"
permalink: kb/151/Q151032/
---

## Q151032: GENSPLIT Putting a Generic CWnd in a Splitter Pane

	Article: Q151032
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbProgramming kbSample kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 k
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A splitter window is a special window with the capability of being split into
	multiple panes, each usually containing a view. Although the Online
	documentation says that any CWnd object can replace a view in a pane, it does
	not elaborate on how to do so.
	
	GENSPLIT shows how to put different types of windows in splitter panes. The
	sample creates an SDI application and creates a splitter window with four panes.
	The panes contain a view, a generic CWnd derived window, a listbox, and a
	dialog.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Gensplit.exe
	  (http://download.microsoft.com/download/vc60pro/samp16/1/WIN98/EN-US/Gensplit.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running GENSPLIT.EXE to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	GENSPLIT is an MFC SDI application in which CMainFrame::OnCreateClient has been
	overridden to create a static splitter with two rows and two columns. For more
	information on splitter windows and how to create them, please see Online Help
	or the REFERENCES section in this article.
	
	To create windows in the splitter panes, MFC uses CRuntime class information.
	This information is passed to the CSplitterWnd::CreateView call using the
	RUNTIME_CLASS macro. This API creates the panes in the splitter. It first calls
	CreateObject to create the MFC object and then calls the virtual function
	CWnd::Create to create the window. Any MFC class willing to implement creation
	using runtime class information must be tagged DECLARE_DYNCREATE. The
	corresponding macro, IMPLEMENT_DYNCREATE, must be added to the implementation
	file for the class. Also, CWnd::PostNcDestroy needs to be overridden for the
	class and it should make a call to delete this pointer. This brings about
	cleanup of the dynamically created MFC object.
	
	In the GENSPLIT sample, the first pane is a simple view. This view is the one
	associated with the document template registered in the application's
	InitInstance.
	
	The second pane is a window represented by an MFC class that is derived directly
	from CWnd. The window shows a bouncing ball. To create this pane, CreateView was
	passed the Runtime class information for the class.
	
	The third pane is a listbox. Besides using the call to CreateView, there is an
	extra step necessary here. As mentioned above, the pane window is created by
	making the virtual call CWnd::Create. The CListBox class does not have a Create
	function whose parameter list matches that of the virtual function CWnd::Create.
	As a consequence, CreateView's call to Create gets resolved to CWnd::Create
	rather than to CListBox::Create.
	
	All CListBox::Create does is set the WINDOW class to "LISTBOX" and then call
	CWnd::Create. Since setting the WINDOW class is the only step missing in the
	pane creation, CWnd::PreCreateWindow has been overridden for the Listbox class
	to set the lpszClass member of CREATESTRUCT to "LISTBOX". In this function,
	listbox-specific window styles have also been set.
	
	The process to place new Common controls in splitter panes is similar to the one
	discussed above for Listbox controls. However, there is one important
	difference: Before setting the WINDOW class, you may need to call
	InitCommonControls(). This SDK API is necessary to load the Common control DLL
	into memory. It is this DLL that is responsible for registering the WINDOW
	classes for the Common controls. You need to call this API only if you haven't
	already loaded this DLL. This can be done indirectly by creating a Common
	control elsewhere in your application.
	
	The fourth pane is a dialog. Creating a dialog in a pane is slightly tricky. All
	the windows created in the panes of a splitter are child windows of the
	splitter. Dialog windows are usually pop-up windows. They can be created as
	child windows but there is no way to specify the child ID for them. The splitter
	window architecture dictates which panes get which IDs. Also, as in the case of
	CListBox, CDialog::Create does not have the same argument list as CWnd::Create.
	
	Since dialog creation does not go through CWnd::Create, PreCreateWindow never
	gets called for CDialog-derived classes. As a consequence, CWnd::Create was
	overridden in the CDialog-derived class. Here the base class call
	CDialog::Create was made that creates the modeless dialog. Immediately after
	this ::SetWindowLong was called to set the child ID of the dialog to whatever
	the splitter window architecture demands.
	
	NOTE: The easiest way to provide dialog-like functionality in a pane is to work
	with the CFormView class.
	
	REFERENCES
	==========
	
	MFC Technical Note no. 29 entitled "Splitter Windows" CSplitterWnd::CreateView -
	in file ..\msdev\mfc\src\winsplit.cpp.
	
	MFC technical Note no. 17 entitled "Destroying MFC objects" for a discussion on
	CWnd::PostNcDestroy.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbProgramming kbSample kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,5.0,6.0
	
	=============================================================================
	
