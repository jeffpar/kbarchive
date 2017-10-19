---
layout: page
title: "Q129224: HOWTO: Remove the System Menu from an Iconized Application"
permalink: /kb/129/Q129224/
---

## Q129224: HOWTO: Remove the System Menu from an Iconized Application

	Article: Q129224
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbMenu kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSM
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two ways to remove the system menu of an application when a user
	clicks an iconized application:
	
	1. Override the main frame window's PreCreateWindow function to remove the
	  WS_SYSMENU from the window's style field. However, this method removes the
	  system menu altogether from the application.
	
	2. Override the main frame window's OnSize method, and change the window style
	  of the mainframe to either include or exclude the WS_SYSMENU style bit
	  depending on user action. Use this technique if the user wants to remove the
	  system menu when the application is iconized and add the system menu back to
	  the application when the application is restored.
	
	MORE INFORMATION
	================
	
	Method One
	----------
	
	To remove the system menu completely from the application, override the main
	frame window's PreCreateWindow method as follows:
	
	     BOOL CMainFrame::PreCreateWindow(CREATESTRUCT & cs)
	     {
	             // Call the base class version of PreCreateWindow, replace
	            //  CMDIFrameWnd with CFrameWnd in the following line
	            //  for an SDI application
	
	             if (!CMDIFrameWnd::PreCreateWindow(cs))
	                  return FALSE;
	
	            // Remove the system menu style bit from the window
	
	             cs.style &= ~WS_SYSMENU;
	             return TRUE;
	     }
	
	Method Two
	----------
	
	The following steps and code fragments show how to remove the system menu when a
	user clicks an iconized application. The system menu is restored when the
	application is not iconized.
	
	1. Declare a BOOLEAN public data member in the class declaration of CMainFrame.
	  This data member determines if the system menu is enabled or not:
	
	        // In an SDI application CMainFrame will be derived from CFrameWnd
	
	        class CMainFrame : public CMDIFrameWnd
	        {
	        public:
	           BOOL sys_menu_enabled;
	               .
	               .  // Existing class declarations
	               .
	        }
	
	2. Modify the CMainFrame constructor to initialize the sys_menu_enabled data
	  member function to TRUE:
	
	        CMainFrame::CMainFrame()
	        {
	          //default the system menu to be enabled
	          sys_menu_enabled = TRUE;
	               .
	               .  // Continue with normal constructor code, if any
	               .
	        }
	
	3. Create a message handler for the WM_SIZE message for the CMainFrame class,
	  and add the following code to the CMainFrame::OnSize message handler:
	
	        void CMainFrame::OnSize(UINT nType, int cx, int cy)
	        {
	          // declare a local variable to hold the window style
	
	             long window_style;
	
	          //call base class's OnSize function,
	          //If SDI application call CFrameWnd::OnSize()
	
	          CMDIFrameWnd::OnSize(nType, cx, cy);
	
	          //if user is minimizing or iconizing the application
	
	          if (nType == SIZE_MINIMIZED)
	          {
	               // Get the main frame window's style
	                window_style = GetWindowLong(m_hWnd, GWL_STYLE);
	
	               //Remove the system menu from the window's style
	                window_style &= ~WS_SYSMENU;
	
	               //toggle the boolean data member to show sys menu disabled
	                sys_menu_enabled = FALSE;
	
	               //set the style attribute of the main frame window
	               SetWindowLong(m_hWnd, GWL_STYLE, window_style);
	          }
	          else
	          {
	               //if user is restoring the application and his system menu
	               //is disabled,
	               if ((nType == SIZE_RESTORED) || nType == SIZE_MAXIMIZED) &&
	                  (!sys_menu_enabled))
	               {
	                   window_style = GetWindowLong(m_hWnd, GWL_STYLE);
	
	                 //Add the system menu to the window's style
	                   window_style |= WS_SYSMENU;
	
	                //toggle the boolean data member to show sys menu enabled
	                  sys_menu_enabled = TRUE;
	
	                  SetWindowLong(m_hWnd, GWL_STYLE, window_style);
	                  SendMessage(WM_NCACTIVATE,TRUE);
	               }
	           }
	        }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbMenu kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
