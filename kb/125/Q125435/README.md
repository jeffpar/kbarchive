---
layout: page
title: "Q125435: PRB: Hidden MDI Child Window Causes Corrupted MDI Window Menu"
permalink: /kb/125/Q125435/
---

## Q125435: PRB: Hidden MDI Child Window Causes Corrupted MDI Window Menu

	Article: Q125435
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMDI kbMenu kbMFC kbVC kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an MDI child window is hidden or disabled, the Window menu is not properly
	updated for the visible MDI child windows. Specifically, the Window menu
	continues to show deleted MDI child windows or fails to add new MDI child
	windows to the list.
	
	CAUSE
	=====
	
	These problems occur only after at least one MDI child window has been
	destroyed. When Windows destroys an MDI child window, it moves activation to a
	different window. This activation change causes MFC to change and refresh the
	MDI frame window's menu. Windows does not handle this menu refresh message
	correctly while in the process of destroying an MDI child window when other
	windows are hidden or disabled. This problem does not occur if the window being
	destroyed is hidden or disabled.
	
	RESOLUTION
	==========
	
	To work around this problem, program your application to ensure that that an MDI
	child window is always hidden or disabled before it is destroyed. The
	destruction of MDI child windows is managed by the MDICLIENT window in the
	processing of the WM_MDIDESTROY message. You can customize the behavior of this
	message as follows:
	
	1. Subclass the MDICLIENT window and provide a handler for the message. For an
	  example that shows how to subclass the MDICLIENT window, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q129471 How to SubClass the MDIClient by Using MFC
	
	2. Add a message handler for the WM_MDIDESTROY message to the class used to
	  subclass the MDICLIENT window; this example calls it the CMDIClientWnd class.
	  This message is not listed by ClassWizard, so you will need to add the
	  handler manually. For additional information about how to do this, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q99848 Use ON_MESSAGE() Macro to Map Less-Common Messages
	
	3. Implement the OnMDIDestroy function as follows:
	
	  LRESULT CMDIClientWnd::OnMDIDestroy(WPARAM wParam,LPARAM lParam)
	     {
	
	        // wParam contains the hwnd of the child being destroyed
	        HWND hwndChild = (HWND) wParam;
	        ::ShowWindow(hwndChild,SW_HIDE);
	        return Default();
	     };
	
	NOTE: It has been reported that in some cases, a call to
	::EnableWindow(hwndChild,FALSE); is required before the call to ::ShowWindow.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMDI kbMenu kbMFC kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
