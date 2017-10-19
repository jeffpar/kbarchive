---
layout: page
title: "Q105150: HOWTO: Prevent Static Splitter Bars from Tracking"
permalink: /kb/105/Q105150/
---

## Q105150: HOWTO: Prevent Static Splitter Bars from Tracking

	Article: Q105150
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC kbWndw kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Editions, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In addition to providing the ability to dynamically split a single view, the
	CSplitterWnd class provides a convenient method of displaying two or more view
	classes in a single frame. This type of splitter window is called a "static
	splitter." The CSplitterWnd class contains member functions that allow the
	splitter bar to be dragged by the mouse or moved using the keyboard to change
	the proportionate sizes of the views (or panes, in splitter terminology) within
	the frame.
	
	Sometimes it is desirable to fix the initial position of the splitter bars and
	not allow the user to move them. This can be accomplished simply by deriving a
	class from CSplitterWnd and overriding several members. This method is outlined
	below.
	
	MORE INFORMATION
	================
	
	1. Use ClassWizard to create a new class named CMySplitterWnd of class type
	  "generic CWnd" and change the references to CWnd in the class declaration and
	  BEGIN_MESSAGE_MAP macro to CSplitterWnd.
	
	2. Using ClassWizard, create message handlers for WM_LBUTTONDOWN, WM_LBUTTONUP,
	  WM_LBUTTONDBLCLK, and WM_MOUSEMOVE. Bypass the CSplitterWnd functionality in
	  each of these overrides by calling the corresponding CWnd handlers. The
	  following example illustrates the WM_LBUTTONDOWN handler:
	
	        void CMySplitterWnd::OnLButtonDown(UINT nFlags, Cpoint point)
	        {
	           CWnd::OnLButtonDown(nFlags, point);
	        }
	
	3. Change any embedded CSplitterWnd members of your frame class to type
	  CMySplitterWnd.
	
	4. Remove any menu items that generate a ID_WINDOW_SPLIT command (such as the
	  "Split" item on the VIEWEX sample's "Window" menu). This prevents
	  CView::OnSplitCmd() from being called.
	
	
	Additional query words: resize
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC kbWndw kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,4.0,4.1,4.2,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
