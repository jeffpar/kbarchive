---
layout: page
title: "Q161886: Property Sheet as the View Window of a CFrameWnd"
permalink: /kb/161/Q161886/
---

## Q161886: Property Sheet as the View Window of a CFrameWnd

	Article: Q161886
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbfile kbsample kbDocView kbMFC kbVC kbVC420 kbGrpDSMFCATL
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Psview.exe sample illustrates a technique of having a PropertySheet- like
	view inside a CFrameWnd-derived class.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Psview.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running Psview.exe to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	The PropertySheet-like view is a window that has the look of PropertySheet. It
	contains a row of tabs; clicking each tab will load the appropriate page (or
	dialog template).
	
	NOTE: This article does not make use of either the Property Sheet or the Property
	Pages like the SNAPVW sample. Because of this, the frame window that contains
	the PropertySheet-like view can be resized as it normally would. However,
	controls inside a page (or dialog template) need to be moved manually to fit the
	page as they appear in a regular dialog box.
	
	The picture below shows the general layout of the frame window when it is first
	running:
	
	CFrameWnd-derived class
	
	   +---------------------------------------------------+
	   | +-----------------------------------------------+ |
	   | |         CToolBar class                        | |
	   | +-----------------------------------------------+ |
	   | +-----------------------------------------------+<----+
	   | |         CTabCtrl class                        | |   |
	   | |-----------------------------------------------| |   |
	   | |                                               | |   |
	   | |                                               | |   |
	   | |         CDialog-derived class                 | |   |-- CView-derived
	   | |         (a child of CTabCtrl class)           | |   |   class
	   | |                                               | |   |
	   | |                                               | |   |
	   | |                                               | |   |
	   | +-----------------------------------------------+<----+
	   | +-----------------------------------------------+ |
	   | |         CStatusBar class                      | |
	   | +-----------------------------------------------+ |
	   +---------------------------------------------------+
	
	As the picture shows, a frame window (CFrameWnd-derived class) contains the
	following child windows:
	
	- toolbar (CToolBar)
	- view (CView-derived class)
	- status bar (CStatuBar)
	
	The view window has tab control (CTabCtrl) as its child window, and tab control
	has one or more modeless dialog boxes (CDialog-derived class) as its child
	windows. In other words, the tab control will occupy the whole client area of
	the view window and the modeless dialog boxes (or pages) will occupy the display
	rectangle inside the tab control. However, there can be only one page visible at
	any given time.
	
	For simplicity, all pages in the sample code are created after the tab control is
	successfully created in the view window. (The code for page creation can be
	found in the CreatePages() function in tabview.cpp file.) These pages will not
	be destroyed until the application shuts down. When the view window receives the
	input focus (when the application is first running), the page for the first tab
	will be the visible page in the display area of the tab control.
	
	Whenever a tab is selected from the tab control, both TCN_SELCHANGING and
	TCN_SELCHANGE notification codes will be sent to the parent window (the
	CView-derived class). The first notification code is to notify the parent window
	that the currently selected tab is about to change. It is a good place to put
	code to hide the currently visible page. On the other hand, displaying the
	newly-selected page may be handled in the second notification code.
	
	The following list shows the general steps to have a PropertySheet-like view in
	an AppWizard-generated application:
	
	1. Create all pages (or dialog boxes) for the tab control in dialog resource
	  editor. Each page has a caption (for the tab text), a child style, and a thin
	  border.
	
	2. Create the header and implementation files for all pages (or dialog boxes)
	  using ClassWizard.
	
	3. Make the following changes to the header file (.h) of your CView-derived
	  class:
	
	   - Include "afxtempl.h" at the beginning of your .h file. It contains all the
	     declarations for a template class variable, m_DlgArray in the
	     CView-derived class.
	
	   - Add the following two member variables to your CView-derived class:
	
	       // Tab control is a child of tab view window.
	       CTabCtrl*   m_TabCtrl;
	
	       // Array of all the property-page dialogs
	       CTypedPtrArray<CObArray, CDialog*> m_DlgArray;
	    
	
	   - Add a CreatePages() function prototype to your CView-derived class:
	
	       // Call this function to create all pages for the tab view window.
	       void CreatePages();
	     
	
	   - Add a HandleKeyDownMsg() function prototype to your CView-derived class.
	     This function will be called in the PreTranslateMessage() function of your
	     CWinApp-derived class:
	
	       // Call this function to handle all WM_KEYDOWN messages. It
	       // returns TRUE if message is being handled; FALSE otherwise.
	       BOOL HandleKeyDownMsg(MSG* pMsg);
	     
	
	   - Use ClassWizard to add handlers for the following messages that are sent
	     to your CView-derived class:
	
	     WM_CREATE - to create tab control and all pages for the tab control.
	     WM_SIZE - size the tab control to cover up your entire view.
	     WM_SETFOCUS - show page for the first tab in the tab control.
	
	   - Add the following function prototypes to your CView-derived class for
	     handling all notification codes sent by the tab control:
	
	       afx_msg void OnTabSelChanging(NMHDR* pnmhdr, LRESULT* pResult);
	       afx_msg void OnTabSelChange(NMHDR* pnmhdr, LRESULT* pResult);
	     
	
	4. Make the following changes to the implementation file (.cpp) of your
	  CView-derived class:
	
	   - Define the identifier (id) for the tab control, such as:
	
	       #define ID_TABCTRL  1111            // id for the CTabCtrl
	     
	
	   - Add the following ON_NOTIFY macro to the message map table:
	
	       BEGIN_MESSAGE_MAP(CTabView, CView)
	         //{ {AFX_MSG_MAP(CTabView)
	         ON_WM_CREATE()
	         ON_WM_SIZE()
	         ON_WM_SETFOCUS()
	         ...                              // other message macros
	         //} }AFX_MSG_MAP
	         ON_NOTIFY(TCN_SELCHANGE, ID_TABCTRL, OnTabSelChange)
	         ON_NOTIFY(TCN_SELCHANGING, ID_TABCTRL, OnTabSelChanging)
	         ...                              // other message macros
	       END_MESSAGE_MAP()
	     
	
	   - Initialize member variable m_TabCtrl to NULL in the constructor function.
	
	   - Perform clean-up in the destructor function of your CView-derived class.
	     Refer to the destructor function sample in tabview.cpp file.
	
	   - Create tab control and then call the CreatePages() function in the
	     OnCreate() function. The tab control is a child window of your view
	     window. Refer to the sample OnCreate() function in tabview.cpp file.
	
	   - Call MoveWindow() to size the tab control in OnSize() function so the tab
	     control will cover up the entire client area of your view window. Refer to
	     the sample OnSize() function in tabview.cpp file.
	
	   - Call OnTabSelChange() in OnSetFocus() function to show page for the first
	     tab in tab control. Refer to the sample OnSetFocus() function in
	     tabview.cpp file.
	
	   - Implement OnTabSelChange(), and OnTabSelChanging() functions: (Sample code
	     can be found in the tabview.cpp file.)
	
	     OnTabSelChange - hide the current visible page.
	     OnTabSelChanging - show the newly selected page.
	
	   - Implement HandleKeyDownMsg() function to process CTL+TAB and
	     SHIFT+CTRL+TAB, ENTER and ESCAPE keydown messages. These keystroke
	     combinations are used to activate a tab that is either before or after the
	     currently selected tab. Refer to the sample HandleKeyDownMsg() function in
	     tabview.cpp file.
	
	   - Include header files for all pages (CDialog-derived class) for the tab
	     control.
	
	   - Implement the CreatePages() function to create all pages for the tab
	     control(CTabCtrl). Refer to the sample CreatePages() function in
	     tabview.cpp file.
	
	5. Use ClassWizard to add the PreTranslateMessage() function to your
	  CWinApp-derived class. In the body of this function, call the view's
	  HandleKeyDownMsg() function so it gets a chance to handle any keystroke
	  messages that are relevant to its tab control. For messages that are not
	  handled by the view, pass them to the default handler. Please refer to the
	  sample PreTranslateMessage() in psview.cpp file.
	
	The Readme.txt file included with the sample explains in more detail how the
	sample is created in AppWizard and what files are included.
	
	REFERENCES
	==========
	
	Please refer to Visual C++ Books for information about the classes mentioned in
	the article and ClassWizard usage for creating .h and .cpp files for all pages.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbDocView kbMFC kbVC kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	
	=============================================================================
	
