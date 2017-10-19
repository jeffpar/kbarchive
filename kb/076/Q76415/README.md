---
layout: page
title: "Q76415: HOWTO: Creating a Progress Dialog with a Cancel Option"
permalink: /kb/076/Q76415/
---

## Q76415: HOWTO: Creating a Progress Dialog with a Cancel Option

	Article: Q76415
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbDlg kbSDKPlatform
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article describes the mechanisms necessary to implement a progress
	or activity indicator with a Cancel Operation option, to be used for lengthy and
	CPU-intensive subtasks of an application. Examples of operations using this
	include: copying multiple files, directory searches, or printing large files.
	
	MORE INFORMATION
	================
	
	The progress dialog box is implemented in two steps:
	
	1. Initialize the dialog box before starting lengthy or CPU intensive subtask.
	
	2. After each unit of the subtask is complete, call ProgressYield() to determine
	  if the user has canceled the operation and to update the progress or activity
	  indicator.
	
	This is the description of the progress dialog procedure. The procedure uses a
	global variable (Cancel) to inform the CPU-intensive subtask that the user has
	indicated a desire to terminate the subtask.
	
	     WORD Cancel = FALSE;    /* This must be global to all modules */ 
	
	                             /* which call ProgressYield()         */ 
	
	     BOOL FAR PASCAL ProgressDlgProc(hDlg, message, wParam, lParam)
	     HWND hDlg;
	     unsigned message;
	     WORD wParam;
	     DWORD lParam;
	     {
	
	     switch (message)
	
	        {
	        .
	        /* Use other messages to update the progress or activity */ 
	        /* indicator.                                             */ 
	        .
	        case WM_COMMAND:
	           switch (wParam)
	              {
	              case ID_CANCEL:    /* ID_CANCEL = 2 */ 
	                 Cancel = TRUE;
	
	              default:
	                 return FALSE;
	              }
	        .
	        .
	        default:
	           return FALSE;
	        }
	
	  }
	
	The following describes the ProgressYield procedure, which should be called after
	each unit of the CPU-intensive subtask is completed. The ProgressYield procedure
	uses the IsDialogMessage function (described in the "Microsoft Windows Software
	Development Kit Reference Volume 1"). IsDialogMessage will convert keyboard
	messages into selection commands for the corresponding dialog box as outlined in
	Table 1.7 beginning on page 1-51.
	
	     void ProgressYield(HWND hwnd)
	
	     {
	
	     MSG   msg;
	
	     /* Remove all available messages for any window that belong */ 
	     /* to the current application.                               */ 
	     while (PeekMessage(&msg, NULL, 0, 0, PM_REMOVE))
	        {
	        /* Translate and Dispatch the given message if the window */ 
	        /* handle is null or the given message is not for the    */ 
	        /* modeless dialog box hwnd.                             */ 
	        if (!hwnd || !IsDialogMessage(hwnd, &msg))
	           {
	           TranslateMessage(&msg);
	           DispatchMessage(&msg);
	           }
	        }
	
	     }
	
	The following describes how to incorporate the progress dialog as part of an
	application's subtask that is CPU-intensive. The PROGRESS_DLG resource should
	contain a button with an ID of 2, because this is the wParam of the WM_COMMAND
	that will be sent when the user presses the ESC key. The button should also have
	the BS_DEFPUSHBUTTON style so that the ENTER key will also result in the
	termination of the CPU-intensive subtask.
	
	     FARPROC lpProgressProc;
	     HWND    hwndProgress;            /* This needs to be global if */ 
	
	                                      /* accessed by other modules.  */ 
	     .
	     .
	     /* Initialize before starting CPU-intensive work.               */ 
	
	     lpProgressProc = MakeProcInstance(ProgressDlgProc,
	
	                                       hInst);  /* Current instance. */ 
	
	     hwndProgress = CreateDialog(hInst,         /* Current instance. */ 
	
	                                "PROGRESS_DLG", /* Resource.         */ 
	                                hwndParent,     /* Parent handle.    */ 
	                                lpProgressProc);/* Instance address. */ 
	
	     ShowWindow(hwndProgress);
	     .
	     .
	     /* Start CPU intensive work here. */ 
	
	        .
	        .
	        /* Before or after each unit of work, the application */ 
	        /* should do the following:                           */ 
	        ProgressYield(hwndProgress);
	        if (Cancel == TRUE)
	           break;   /* Terminate CPU-intensive work immediately. */ 
	        .
	        .
	
	     /* End CPU-intensive work here. */ 
	     .
	     .
	     DestroyWindow(hwndProgress);
	     FreeProcInstance(lpProgressProc);
	     .
	     .
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbDlg kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
