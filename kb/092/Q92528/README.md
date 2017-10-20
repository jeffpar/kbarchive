---
layout: page
title: "Q92528: Terminating Windows-Based Application from Another App"
permalink: /kb/092/Q92528/
---

## Q92528: Terminating Windows-Based Application from Another App

{% raw %}

	Article: Q92528
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application can be cleanly terminated by another application by posting
	WM_CLOSE to its top-level, non-owned, non-disabled windows. Disabled windows
	should not be posted WM_CLOSE because they may be disabled as a consequence of a
	modal dialog box being displayed or because they may be in a state that does not
	allow termination. The Tool Helper library has a function TerminateApp() to
	close an application. However, TerminateApp() does not terminate an application
	cleanly and is designed to be used in a debugging environment.
	
	MORE INFORMATION
	================
	
	Clean termination means that an application terminates as designed by the
	application designer after freeing its resources. Clean termination of a
	Windows-based application by another Windows-based application is possible in
	many cases by posting WM_CLOSE to top-level, non-owned, non-disabled windows of
	the application. However clean termination is not possible in some cases because
	of the following reasons.
	
	If a Windows-based application has a modal dialog box displayed, it is in a modal
	state. The transition out of the modal state takes place when the modal dialog
	box is closed in a manner specified by the application programmer -- typically
	when the user selects a dialog box button. If the owner of a modal dialog box is
	posted WM_CLOSE, it will destroy the modal dialog box by calling
	DestroyWindow(). This particular transition out of the modal state may not have
	been designed by the application programmer because modal dialog boxes are
	designed to be closed by EndDialog(), not DestroyWindow(). Consequently, the
	dialog box could terminate without cleaning up. For example, a dialog box that
	frees GDI objects when it receives a WM_COMMAND with wParam == IDOK or IDCANCEL
	will not free these objects if it is closed as a consequence of WM_CLOSE being
	posted to its owner.
	
	Clean termination is possible in the above case if the terminating application
	expects to be closed as a consequence of the owner being posted a WM_CLOSE while
	a modal dialog box is up. Note that most applications do not expect to be closed
	in this way.
	
	Algorithm to Terminate an Application
	-------------------------------------
	
	Obtain the handles of all top-level, non-owned windows of the application that is
	to be terminated as described in a following section.
	
	For each of the top-level, non-owned windows of an application:
	
	  {
	    if (IsWindowEnabled(hwnd))
	       PostMessage(hwnd, WM_CLOSE, 0, 0);
	  }
	
	WM_CLOSE is posted only if the window is not disabled. A disabled window could
	mean that it is the owner of a modal dialog box and so should not be closed. A
	window is also disabled when an application does not want the user to manipulate
	it (including closing it), and consequently should not be closed.
	
	A modal dialog box disables only its immediate owner. This means that a top-level
	window that is not disabled, but that owns a window that in turn owns a modal
	dialog box, can be closed and the dialog box can consequently be destroyed.
	However, this can also be done by the user and so should have been prevented by
	the application if it was not to be allowed.
	
	Obtaining Handles of Top-Level, Non-Owned Windows of an Application
	-------------------------------------------------------------------
	
	1. EnumTaskWindows() can be used to enumerate all the top-level windows owned by
	  the task. The task handle of the task required for this function can be
	  obtained using the Tool Helper library functions and one of the following
	  three methods:
	
	  a. If the task to be terminated is started after the terminator task, the
	     terminator can set up a call-back function using NotifyRegister(). This
	     call-back function is called by every task in the system on start up and
	     termination. GetCurrentTask() can be used to obtain the task handle of the
	     task that called the call-back function. TaskFindHandle() can be used to
	     obtain information about this task from a TASKENTRY structure.
	
	     If the terminator task wants to terminate all the child tasks that it
	     spawned using WinExec(), the following method can be used. A child task
	     can be identified by checking whether the hTaskParent field in the
	     TASKENTRY structure contains the terminator's task handle:
	
	  BOOL FAR PASCAL NotifyRegisterCallback (WORD wID, DWORD dwData)
	  {
	      HTASK hTask;
	      TASKENTRY te;
	
	      switch (wID)
	      {
	         case NFY_STARTTASK:
	         case NFY_EXITTASK:
	            // Obtain info about the task that is starting/terminating.
	            hTask = GetCurrentTask();
	            te.dwSize = sizeof(TASKENTRY);
	            TaskFindHandle(&te, hTask);
	
	            // ghTaskParent is the task that called NotifyRegister().
	            // Check if hTask is a child task of ghtaskParent.
	            // ghwnd is a window of the parent task.
	            if (te.hTaskParent == ghtaskParent)
	               if (wID == NFY_STARTTASK)
	                  PostMessage(ghwnd, PM_TASKSTART, (WORD)hTask, 0);
	               else
	                  PostMessage(ghwnd, PM_TASKEND, (WORD)hTask, 0);
	            break;
	
	         default:
	             break;
	      }
	      // Pass notification to other callback functions.
	      return FALSE;
	  }
	
	        The parent task must maintain a list of child tasks that are
	        currently running by adding a child task handle to the list when
	        PM_TASKSTART is received and by removing a task handle when
	        PM_TASKEND is received. The Task List, which is brought up by
	        choosing the Switch To system menu item, and some screen savers, are
	        run as child tasks of the active application. All child tasks can be
	        terminated by calling EnumTaskWindows() on each of the task handles
	        in the list. Below is the callback to EnumTaskWindows():
	
	  BOOL CALLBACK EnumTaskWindowsCallBack(HWND hwnd, LONG lParam)
	  {
	     // Check whether the window still exists and that it does not have an
	     // owner.
	     if (IsWindow(hwnd) && !GetWindow(hwnd, GW_OWNER))
	     {
	        // Do not close disabled windows.
	        if (!IsWindowEnabled(hwnd)))
	           return TRUE;
	        else
	           PostMessage(hwnd, WM_CLOSE, 0, 0);
	     }
	     return TRUE;
	  }
	
	        The TERMWAIT sample application, which can be found in the
	        Software Library by searching on the keyword TERMWAIT,
	        demonstrates the use of NotifyRegister().
	
	  b. The Tool Helper library functions TaskFirst(), TaskNext(), and
	     TaskFindHandle() and the szModule field in the TASKENTRY structure can be
	     used to obtain the task handle if the Module name is known.
	
	  c. If the window handle of one window belonging to a task is known, the
	     handles to other top-level windows of the task can be obtained using
	     GetWindowTask() and EnumTaskWindows().
	
	2. Window handles can be obtained using FindWindow() if the window title or
	  class name is known.
	
	Additional query words: 3.10 call back
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
