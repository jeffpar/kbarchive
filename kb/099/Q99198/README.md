---
layout: page
title: "Q99198: HOWTO: Display the Current Time in a CStatusBar Pane"
permalink: kb/099/Q99198/
---

## Q99198: HOWTO: Display the Current Time in a CStatusBar Pane

	Article: Q99198
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDateTime kbMFC kbStatBar KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 k
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below describes a process by which a MFC AppWizard application can be
	designed to display the current time on its status bar.
	
	Perform the following five steps:
	
	1. Use App Studio, or the Resource View in Visual C++ versions later than 4.0,
	  to edit the application's string tables. Add a new string in the segment that
	  defines ID_INDICATOR_NUM and so on; for example, create a new string with the
	  ID ID_INDICATOR_TIME. Specify a caption like 00:00. The Status Bar uses the
	  specified initial value to calculate the size of the pane. An application can
	  dynamically change the size of the pane using the CStatusBar::SetPaneInfo()
	  function. With Visual C++ versions prior to 4.0, close App Studio to save the
	  .RC file. With Visual C++ version 4.0 or later, use the File menu to Save and
	  Close the string table resource.
	
	2. Edit the MAINFRM.CPP file. The CStatusBar object builds the status bar using
	  the data in the indicators[] array in sequential order. Insert the
	  ID_INDICATOR_TIME indicator into the array at the desired position.
	
	  If you compiled the program at this stage, you would see a new pane in the
	  status bar but it would not contain any text.
	
	3. Edit the message map for the CMainFrame object to add the following line (add
	  the line outside the AFX_MSG_MAP comments):
	
	        ON_UPDATE_COMMAND_UI(ID_INDICATOR_TIME, OnUpdateTime)
	
	  Because ID_INDICATOR_TIME is an ID, and not an object, you cannot use Class
	  Wizard to make this addition.
	
	4. Edit the MAINFRM.CPP file and create a function similar to the following:
	
	        void CMainFrame::OnUpdateTime(CCmdUI *pCmdUI)
	        {
	           CTime t = CTime::GetCurrentTime();
	           char szTime[6];
	           int nHour = t.GetHour();
	           int nMinute = t.GetMinute();
	
	           // Base Hours on 12 instead of 24
	           if (nHour > 12)
	              nHour = nHour - 12;
	
	           wsprintf(szTime, "%i:%02i", nHour, nMinute);
	
	           // Now set the text of the pane.
	           m_wndStatusBar.SetPaneText(
	                 m_wndStatusBar.CommandToIndex(ID_INDICATOR_TIME),
	                 LPCSTR(szTime));
	           pCmdUI->Enable();
	        }
	
	  The application calls this function once when it has idle time. Each time the
	  application empties its message queue, it sends a WM_IDLEUPDATECMDUI message
	  (new idle time). For more information on idle time, please refer to Technical
	  Note #24 in the MFC Tech Notes help file or to the documentation of the
	  CWinApp::OnIdle() function in the "Class Library Reference, Volume 1." The
	  application must call the pCmdUI->Enable() function to enable the
	  user-interface item for this command. If the application doesn't enable the
	  user-interface item, the pane appears in the status bar, but it does not
	  display any text.
	
	  If you compiled the program at this point, the status bar would display the
	  current time in one of its panes. However, one implementation problem would
	  remain. Because the application calls the UI Command Handler only once each
	  time the system becomes idle, what happens if the application runs and the
	  user does not interact with it? The application does not reset the time until
	  it receives one or more messages and empties its queue (new idle time). The
	  code in Step 5 addresses this situation.
	
	5. Even though there are several methods to accomplish this, the simplest method
	  takes advantage of the fact that the application calls the UI Command Handler
	  only once when the application's message queue is emptied. Add the following
	  statement to the CMainFrame::OnCreate() member function:
	
	        m_wndStatusBar.SetTimer(1, 1000, NULL);
	
	  The CWnd::SetTimer() event generates a message in the application's queue
	  every second. Even if the user does not interact with the application, the
	  queue empties after processing the timer event, new idle time is available,
	  and the application updates the time pane in its status bar. Be sure to call
	  KillTimer() when the window is destroyed.
	
	MORE INFORMATION
	================
	
	When a modal dialog box is up, the dialog manager manages the application's
	message queue. Since the dialog manager's message loop does not include calls to
	do Idle time processing, the above mentioned OnUpdateTime function never gets
	called. If you would like to use a modal dialog, yet still have the time on the
	status bar updated, you will have to avoid using the message queue.
	
	1. Start with the code above.
	
	2. In mainfrm.h, add the following to the CMainFrame class definition.
	
	       UINT m_nIDTimer;
	       static VOID __export CALLBACK TimerProc(HWND hwnd, UINT uMsg,
	          UINT uIDEvent, DWORD dwTime);
	
	  NOTE: In Win32, the "__export" keyword is obsolete and will cause the compiler
	  to generate a C4236 warnings in Visual C++ version 4.0 or later. To correct,
	  simply remove the keyword.
	
	3. In mainfrm.cpp, change the SetTimer() call in CMainFrame::OnCreate() to:
	
	        m_nIDTimer = ::SetTimer(NULL, 0, 1000, TimerProc);
	
	4. Add a timer procedure:
	
	        VOID __export CALLBACK CMainFrame::TimerProc(HWND hwnd, UINT uMsg,
	           UINT uIDEvent, DWORD dwTime)
	        {
	           CMainFrame *pMainWnd = (CMainFrame *)AfxGetApp()->m_pMainWnd;
	           ASSERT(uIDEvent == pMainWnd->m_nIDTimer);
	
	           CCmdUI cui;
	           cui.m_nID = ID_INDICATOR_TIME;
	           cui.m_nIndex = 4;
	           cui.m_pMenu = NULL;
	           cui.m_pOther = &pMainWnd->m_wndStatusBar;
	
	           pMainWnd->OnUpdateTime(&cui);
	        }
	
	5. In the destructor, use:
	
	        ::KillTimer(NULL, m_nIDTimer);
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDateTime kbMFC kbStatBar KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
