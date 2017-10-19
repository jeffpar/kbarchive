---
layout: page
title: "Q122184: FIX: CFormView Does Not Change Child Positions on WM_MDINEXT"
permalink: /kb/122/Q122184/
---

## Q122184: FIX: CFormView Does Not Change Child Positions on WM_MDINEXT

	Article: Q122184
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbMFC KbUIDesign kbVC kbVC100 kbVC150 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The child controls of a CFormView do not get their positions restored (they do
	not get scrolled) if the CFormView is activated using WM_MDINEXT (CTRL+F6 or
	CTRL+TAB). This behavior is true for any CScrollView window that contains child
	controls.
	
	CAUSE
	=====
	
	CTRL+F6 sends a WM_MDINEXT message to the MDIClient window. This message is
	handled by Windows. During the processing of the WM_MDINEXT message, Windows
	hides the MDIClient window temporarily. This in turn causes all child windows to
	be hidden. The problem with this is that child windows which are hidden are not
	moved when the ScrollWindow API function is called. (The ScrollWindow function
	is used by CScrollView to scroll its client area.) As a result, child windows
	are not moved during WM_MDINEXT processing.
	
	RESOLUTION
	==========
	
	Modify the MFC source code and re-build the libraries. To re-build the
	libraries, please follow the steps outlined in the section titled "How to Build
	Other Library Versions" in the Class Library User's Guide.
	
	NOTE: If you are rebuilding the MFC DLL (for example, MFC250D.DLL), you should
	also rename the DLL. This is also mentioned in MFC TechNote #33.
	
	The changes necessary are in the file VIEWSCRL.CPP. In this file you will find
	two calls to ScrollWindow -- one in the ScrollToDevicePosition function and
	other in the OnScrollBy function. Replace the call to ScrollWindow in each of
	these functions with the following code; note that the first two lines are
	different in each function:
	
	    // In ScrollToDevicePosition use the following two lines :
	          int xAmount = xOrig - ptDev.x;
	          int yAmount = yOrig - ptDev.y;
	    // In OnScrollBy use the following two lines:
	          int xAmount = -(x-xOrig);
	          int yAmount = -(y-yOrig);
	    // The rest of the following replacement code is the same in
	    // both functions:
	          if (IsWindowVisible())
	          {
	             // When visible, let Windows do the scrolling
	             ScrollWindow(xAmount, yAmount);
	          }
	          else
	          {
	             // Windows does not perform any scrolling if the window
	             // is not visible.  This leaves child windows unscrolled.
	             // To account for this oversight, the child windows are
	             // moved directly instead.
	             HWND hWndChild = ::GetWindow(m_hWnd, GW_CHILD);
	             if (hWndChild != NULL)
	             {
	               for (; hWndChild != NULL;
	                  hWndChild = ::GetNextWindow(hWndChild, GW_HWNDNEXT))
	               {
	                 CRect rect;
	                 ::GetWindowRect(hWndChild, &rect);
	                 ScreenToClient(&rect);
	                 ::SetWindowPos(hWndChild, NULL,
	                 rect.left+xAmount, rect.top+yAmount, 0, 0,
	                 SWP_NOSIZE|SWP_NOACTIVATE|SWP_NOZORDER);
	               }
	              }
	            }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of the article. This bug was corrected in The Microsoft Foundation
	Classes, version 3.0, included with Visual C++, 32-bit Edition, version 2.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	The problem can be verified with the VIEWEX sample.
	
	1. Execute VIEWEX and choose File.New and select "Input Form View."
	
	2. Shrink this child window until scroll bars appear.
	
	3. Move the vertical scrollbar thumb to the bottom such that some of the
	  controls are clipped at the top of the view.
	
	4. Choose File.New and select "Simple Text."
	
	5. Maximize this new child window.
	
	6. Press CTRL+F6 to switch activation to the first child window -- the Input
	  Form View.
	
	At this point, the scrollbars will be gone but the controls will be in the same
	vertical position -- partially clipped at the top of the form view.
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 scroll
	
	======================================================================
	Keywords          : kbcode kbDocView kbMFC KbUIDesign kbVC kbVC100 kbVC150 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
