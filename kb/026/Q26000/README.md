---
layout: page
title: "Q26000: INFO: Print Manager Print Job File Limit and WM_SPOOLERSTATUS"
permalink: /kb/026/Q26000/
---

## Q26000: INFO: Print Manager Print Job File Limit and WM_SPOOLERSTATUS

	Article: Q26000
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows versions 3.0 and earlier Print Manager, the print queue
	is limited to a total of 20 jobs. After 20 files have been sent to the queue,
	another file cannot be printed from an application until one of the spooled
	files has finished being sent to the printer.
	
	The print queue limit for Print Manager under the Windows Operating System
	version 3.1 is 100 print jobs.
	
	An application can process the WM_SPOOLERSTATUS message to determine when a job
	is added to or removed from the Print Manager queue. This message also provides
	the number of jobs remaining in the queue. Please see the documentation for
	WM_SPOOLERSTATUS for more information.
	
	The following code fragment demonstrates use of the WM_SPOOLERSTATUS message:
	
	     case WM_SPOOLERSTATUS:
	
	     if (wParam == SP_JOBSTATUS)
	        {
	        itoa ( LOWORD(lParam), buff, 5);
	        MessageBox( hWnd, (LPSTR)buff,
	            (LPSTR)"Number of Jobs Remaining", MB_OK);
	        }
	     else
	        {
	        itoa ( wParam, buff, 5);
	        MessageBox( hWnd, (LPSTR)buff,
	            (LPSTR)"Unknown Spooler Message", MB_OK);
	        }
	     break;
	
	Additional query words: 3.00 3.10 spooler
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
