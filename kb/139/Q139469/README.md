---
layout: page
title: "Q139469: HOWTO: How to Use TrackPopupMenu() and Update UI Handlers"
permalink: /kb/139/Q139469/
---

## Q139469: HOWTO: How to Use TrackPopupMenu() and Update UI Handlers

{% raw %}

	Article: Q139469
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbMenu kbMFC KbUIDesign kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Floating popup menus are generally displayed in response to right-mouse click
	messages. The CMenu::TrackPopupMenu() function is used to display these menus.
	For the MFC Update UI mechanism to work correctly with these menus, the owner of
	these menus should be a class derived from CFrameWnd.
	
	MORE INFORMATION
	================
	
	Menu items in an MFC application are updated in response to the WM_INITMENUPOPUP
	message. The MFC CFrameWnd::OnInitMenuPopup() function has special code for
	handling the Update UI mechanism.
	
	The code in CFrameWnd::OnInitMenuPopup iterates through the menu items and checks
	for the Update UI and Command handlers in the command route, for each item.
	Depending on the result of this search, it updates the state of the menu item.
	
	The WM_INITMENUPOPUP message is sent only to the owner of the menu. Hence for the
	menus to be updated correctly, you need to make a CFrameWnd-derived class the
	owner of the floating popup menu.
	
	The Update UI mechanism doesn't work for a dialog-based application because the
	code that calls the UI handlers is not found in a CDialog-derived class.
	
	The following sample code displays the File popup menu in the CView-derived class
	(CMyView) in response to the WM_RBUTTONUP message. Note that the main frame
	window pointer is used in the call to the CMenu::TrackPopupMenu() function, so
	the Update UI mechanism will work correctly.
	
	Sample Code
	-----------
	
	  void CMyView::OnRButtonUp(UINT nFlags, CPoint point)
	      {
	      // Calling the base class function.
	      CView::OnRButtonUp(nFlags, point);
	
	      // Get the top level menu from the main application window.
	      CWnd*  pMainWindow = AfxGetMainWnd();
	      CMenu* pTopLevelMenu = pMainWindow->GetMenu();
	
	      // Get the File popup menu from the top level menu.
	      CMenu *pFileMenu = pTopLevelMenu->GetSubMenu(0);
	
	      // Convert the mouse location to screen coordinates before passing
	      // it to the TrackPopupMenu() function.
	      ClientToScreen(&point);
	
	      // Display the File popup menu as a floating popup menu in the
	      // client area of the main application window.
	      pFileMenu->TrackPopupMenu(TPM_LEFTALIGN | TPM_LEFTBUTTON,
	          point.x,
	          point.y,
	          pMainWindow);    // owner is the main application window
	      }
	
	REFERENCES
	==========
	
	For information about command and message routing, please refer to MFC Technical
	Note 21 in Books Online
	
	Additional query words: kbinf 2.00 2.10 2.20 2.51 2.52 3.00 3.10 3.20 4.00 4.10
	
	======================================================================
	Keywords          : kbcode kbMenu kbMFC KbUIDesign kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
