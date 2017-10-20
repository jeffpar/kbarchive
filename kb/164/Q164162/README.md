---
layout: page
title: "Q164162: Adding a Full Screen Feature to an MFC Application"
permalink: /kb/164/Q164162/
---

## Q164162: Adding a Full Screen Feature to an MFC Application

{% raw %}

	Article: Q164162
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
	
	The FSCRN sample includes code that you can use to add a Full Screen feature to
	a Visual C++ 4.x MFC Application. This is similar to what you see when you
	select the Full Screen menu item in Microsoft Developer Studio. The code shows
	which functions must be created and demonstrates how you can create a floating
	toolbar, which you can click to undo the Full Screen mode.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Fscrn.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	The sample code below has been added to the CMainFrame class of the
	AppWizard-generated application. Here is a list of the four functions and what
	they accomplish:
	
	1. OnViewFullScreen - Handler for the Full Screen menu item.
	
	2. OnGetMinMaxInfo - Traps the WM_GETMINMAXINFO message to allow you to increase
	  the size of the window.
	
	3. IsFullScreen- Tests whether the application is in full screen mode.
	
	4. OnUpdateViewFullScreen - Checks or unchecks the Full Screen menu item
	  depending on the mode the application is in.
	
	Sample Code
	-----------
	
	        void CMainFrame::OnViewFullScreen()
	        {
	            RECT rectDesktop;
	            WINDOWPLACEMENT wpNew;
	
	            if (!IsFullScreen())
	            {
	                // need to hide all status bars
	                m_wndStatusBar.ShowWindow(SW_HIDE);
	                m_wndToolBar.ShowWindow(SW_HIDE);
	
	                // We'll need these to restore the original state.
	                GetWindowPlacement (&m_wpPrev);
	
	                m_wpPrev.length = sizeof m_wpPrev;
	
	                //Adjust RECT to new size of window
	                ::GetWindowRect ( ::GetDesktopWindow(), &rectDesktop );
	            ::AdjustWindowRectEx(&rectDesktop, GetStyle(), TRUE,
	                GetExStyle());
	
	                // Remember this for OnGetMinMaxInfo()
	                m_FullScreenWindowRect = rectDesktop;
	
	                wpNew = m_wpPrev;
	                wpNew.showCmd =  SW_SHOWNORMAL;
	                wpNew.rcNormalPosition = rectDesktop;
	
	                m_pwndFullScrnBar=new CToolBar;
	
	            if(!m_pwndFullScrnBar->Create(this,
	               CBRS_SIZE_DYNAMIC|CBRS_FLOATING)
	                   || !m_pwndFullScrnBar->LoadToolBar(IDR_FULLSCREEN))
	              {
	              TRACE0("Failed to create toolbar\n");
	                   return;      // fail to create
	           }
	
	                 //don't allow the toolbar to dock
	                 m_pwndFullScrnBar->EnableDocking(0);
	            m_pwndFullScrnBar->SetWindowPos(0,100,100,
	        0,0,SWP_NOSIZE|SWP_NOZORDER|SWP_NOACTIVATE|SWP_SHOWWINDOW);
	            m_pwndFullScrnBar->SetWindowText(_T("Full Screen"));
	              FloatControlBar(m_pwndFullScrnBar, CPoint(100,100));
	            m_bFullScreen=TRUE;
	            }
	            else
	            {
	                 m_pwndFullScrnBar->DestroyWindow();
	            delete m_pwndFullScrnBar;
	
	                 m_bFullScreen=FALSE;
	
	                 m_wndStatusBar.ShowWindow(SW_SHOWNORMAL);
	                 m_wndToolBar.ShowWindow(SW_SHOWNORMAL);
	                 wpNew = m_wpPrev;
	             }
	
	             SetWindowPlacement ( &wpNew );
	        }
	
	        void CMainFrame::OnGetMinMaxInfo(MINMAXINFO FAR* lpMMI)
	        {
	            if (IsFullScreen())
	            {
	                lpMMI->ptMaxSize.y = m_FullScreenWindowRect.Height();
	                lpMMI->ptMaxTrackSize.y = lpMMI->ptMaxSize.y;
	                lpMMI->ptMaxSize.x = m_FullScreenWindowRect.Width();
	                lpMMI->ptMaxTrackSize.x = lpMMI->ptMaxSize.x;
	            }
	
	        }
	
	        BOOL CMainFrame::IsFullScreen()
	        {
	             return m_bFullScreen;
	        }
	
	        void CMainFrame::OnUpdateViewFullScreen(CCmdUI* pCmdUI)
	        {
	            pCmdUI->Enable();
	
	            if (IsFullScreen())
	              pCmdUI->SetCheck();
	            else
	              pCmdUI->SetCheck(0);
	        }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbDocView kbMFC kbVC kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	
	=============================================================================
	

{% endraw %}
