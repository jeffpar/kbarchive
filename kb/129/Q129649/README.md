---
layout: page
title: "Q129649: PRB: GetActiveView Returns NULL for an MDI Frame Window"
permalink: /kb/129/Q129649/
---

## Q129649: PRB: GetActiveView Returns NULL for an MDI Frame Window

{% raw %}

	Article: Q129649
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GetActiveView() function returns the active view (if any) attached to a
	frame window (CFrameWnd). This function returns NULL when called for an MDI main
	frame window (CMDIFrameWnd).
	
	CAUSE
	=====
	
	In an MDI application, the MDI main frame window (CMDIFrameWnd) does not have a
	view associated with it. Instead, each individual child window (CMDIChildWnd)
	has one or more views associated with it. Therefore, a call to the
	GetActiveView() function for an MDI main frame window returns NULL. The "More
	Information" section of this article gives the layout of the different windows
	in an MDI application.
	
	RESOLUTION
	==========
	
	To resolve the problem, find the active MDI child window (if any), and then call
	the GetActiveView() function for that child window. The active MDI child window
	can be found by calling the MDIGetActive() or GetActiveFrame() function, as
	demonstrated in this code:
	
	     CMDIFrameWnd *pFrame = (CMDIFrameWnd *)AfxGetApp()->m_pMainWnd;
	     // Get the active MDI child window.
	     CMDIChildWnd *pChild =
	                    (CMDIChildWnd *) pFrame->GetActiveFrame();
	     /* or CMDIChildWnd *pChild =
	                    pFrame->MDIGetActive();
	     */ 
	     // Get the active view attached to the active MDI child window.
	     CMyView *pView = (CMyView *) pChild->GetActiveView();
	
	MORE INFORMATION
	================
	
	The client area of the MDI frame window is covered by the client window referred
	to as the MDICLIENT, also known as the Workspace. This client window in turn
	contains zero or more child windows, each of which can display a view, as in
	this diagram:
	
	                   ---------------------------
	                  |      Frame Window         |  ---> CMDIFrameWnd
	                  | (main application window) |
	                   ---------------------------
	                            |
	                   --------------------
	                  |   Client Window    |  ---> MDICLIENT window class
	                  | (no view attached) |
	                   --------------------
	                            |
	        -----------------------------------------------------------
	        |                            |
	---------------------      --------------------
	|   Child Window 1    |    |   Child Window 2   |  ---> CMDIChildWnd
	| (one or more views) |    | (one or more views |
	---------------------      --------------------
	
	As illustrated in this diagram, the MDI frame window does not have a view
	directly associated with it. The views are actually associated with the MDI
	child windows.
	
	Therefore, calling the GetActiveView() function for an MDI main frame window
	returns NULL, implying that there is no view directly associated with MDICLIENT.
	The active view in an MDI application can be obtained by first finding the
	active MDI child window and then finding the active view for that child window
	as outlined in the Resolution section of this article.
	
	REFERENCES
	==========
	
	"Programming Windows 3.1," Charles Petzold, Microsoft Press, 1992.
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbcode kbDocView kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
