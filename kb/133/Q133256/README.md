---
layout: page
title: "Q133256: HOWTO: How to Prevent Mainframe Window from Being ReSized"
permalink: /kb/133/Q133256/
---

## Q133256: HOWTO: How to Prevent Mainframe Window from Being ReSized

{% raw %}

	Article: Q133256
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC kbWndw kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Adding the WS_THICKFRAME windows style allows a window to be re-sized. By
	removing this from the Mainframe window's styles, you can prevent this window
	from being resized. Further, the MINMAXINFO structure stores the maximum and
	minimum tracking size of a window. The WM_GETMINMAXINFO message is sent to a
	window when the size or position of that window is about to change. An
	application can over-ride the handler for this message to set a window's default
	minimum or maximum tracking size.
	
	MORE INFORMATION
	================
	
	You can prevent the Mainframe window of an AppWizard-generated SDI application
	from being resized by following these steps:
	
	1. Modify the IDR_MAINFRAME menu to add a top-level menu item (F&reeze!)
	  with an ID of ID_FREEZE.
	
	2. Add a public Boolean data member (say, BOOL freezeState) to the CMainFrame
	  class to keep track of the current state of the application. Initialize
	  freezeState to FALSE in the constructor of the CMainFrame class.
	
	3. Provide a command handler for the 'Freeze' menu item as follows:
	
	     void CMainFrame::OnFreeze()
	     {
	        char* lpszFreeze = "F&reeze!";
	        char* lpszUnFreeze = "&UnFreeze!";
	        CMenu* pmenu = GetMenu();
	        if (!freezeState)
	        {
	
	            freezeState = TRUE;
	            pmenu->ModifyMenu(ID_FREEZE, MF_STRING, ID_FREEZE,
	                                                         lpszUnFreeze);
	            DWORD style = ::GetWindowLong(this->m_hWnd, GWL_STYLE);
	
	     // Remove the thick frame style and the Minimize, Maximize buttons
	          style &= ~(WS_MAXIMIZEBOX|WS_MINIMIZEBOX|WS_THICKFRAME);
	          ::SetWindowLong(this->m_hWnd, GWL_STYLE, style);
	     }
	     else
	     {
	         freezeState = FALSE;
	         pmenu->ModifyMenu(ID_FREEZE, MF_STRING, ID_FREEZE,
	                                                        lpszFreeze);
	         DWORD style = ::GetWindowLong(this->m_hWnd, GWL_STYLE);
	
	     // Add the thick frame style and the Minimize, Maximize buttons
	        style |= (WS_MAXIMIZEBOX|WS_MINIMIZEBOX|WS_THICKFRAME);
	        ::SetWindowLong(this->m_hWnd, GWL_STYLE, style);
	        }
	        DrawMenuBar();
	     }
	
	4. Provide a handler for the WM_GETMINMAXINFO message as follows:
	
	     void CMainFrame::OnGetMinMaxInfo(MINMAXINFO FAR* lpMMI)
	     {
	        if (freezeState)
	        {
	            RECT rc;
	
	            GetWindowRect(&rc);
	            lpMMI->ptMaxSize.x = rc.right - rc.left;
	            lpMMI->ptMaxSize.y = rc.bottom - rc.top;
	            lpMMI->ptMaxPosition.x = rc.left;
	            lpMMI->ptMaxPosition.y = rc.top;
	            lpMMI->ptMinTrackSize.x = rc.right - rc.left;
	            lpMMI->ptMinTrackSize.y = rc.bottom - rc.top;
	            lpMMI->ptMaxTrackSize.x = rc.right - rc.left;
	            lpMMI->ptMaxTrackSize.y = rc.bottom - rc.top;
	        }
	
	        CFrameWnd::OnGetMinMaxInfo(lpMMI);
	     }
	
	5. If the mainframe is maximized, disable the Freeze menu option because there
	  is no point in making the window non-resizable because a maximized window
	  cannot be resized anyway:
	
	     void CMainFrame::OnSize(UINT nType, int cx, int cy)
	     {
	        CFrameWnd::OnSize(nType, cx, cy);
	        CMenu* pmenu = GetMenu();
	
	        if (nType == SIZE_MAXIMIZED)
	            pmenu->EnableMenuItem(ID_FREEZE, MF_DISABLED|MF_GRAYED);
	        else
	            pmenu->EnableMenuItem(ID_FREEZE, MF_ENABLED);
	
	        DrawMenuBar();
	     }
	
	NOTE: The steps to prevent the Mainframe window of an MDI application from being
	resized should be identical to the steps listed in this article. However,
	because there is more than one menu resource in an MDI application, you may want
	to design your application to add the 'Freeze' menu item to more than one menu
	resource.
	
	Additional query words: kbinf 1.50 2.00 2.10 2.20 2.50 2.51 2.52 3.00 3.0 3.10 3.1 3.20 3.2 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC kbWndw kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
