---
layout: page
title: "Q36324: HOWTO: Perform Background Processing Without Using Timers"
permalink: /kb/036/Q36324/
---

## Q36324: HOWTO: Perform Background Processing Without Using Timers

	Article: Q36324
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbSDKPlatform kbGrpDSUser kbWndw kbWndwMsg kbFAQ kbwin16sdkfaq kb16bitonly
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Windows-based application that performs a long, background task, such as
	repaginating a word processing document, can be designed in a number of
	different ways.
	
	A polling task can be accomplished by setting a timer to fire at the desired
	interval. Many non-polling tasks can be performed in pieces. Although Windows
	does not have a method to schedule processing based on overall system load, an
	application can wait until there are no other messages to be processed by that
	application before proceeding. This article discusses the code required to
	implement this method.
	
	NOTE: This polling method is unnecessary for native Win32 applications.
	
	MORE INFORMATION
	================
	
	It is important that each piece of the task be relatively small. This allows
	Windows to devote processing time to other applications running in the system.
	Similarly, once the task is complete, it is important that the application
	signal that it is idle. This allows Windows to optimize its performance and to
	prolong battery life on portable computers.
	
	The following code skeleton demonstrates how this might be implemented:
	
	     WinMain
	     {
	     do application initialization
	
	     fBackgroundToDo = TRUE;
	     fRunning = TRUE;
	
	     while (fBackgroundToDo && fRunning)
	          {
	          if (fBackgroundToDo)
	               {
	               if ((PeekMessage(&msg, NULL, 0, 0, PM_REMOVE))
	                    {
	                    if (msg.message == WM_QUIT)
	                         {
	                         fRunning = FALSE;
	                         break;
	                         }
	
	                    TranslateMessage(&msg);
	                    DispatchMessage(&msg);
	                    }
	               else
	                    fBackgroundToDo = DoABitOfBackground();
	               }
	          else if ((fRunning = GetMessage(&msg, NULL, NULL, NULL)) != 0)
	               {
	               TranslateMessage(&msg);
	               DispatchMessage(&msg);
	
	               fBackgroundToDo = IsThereBackgroundToDo();
	               }
	          }
	     }
	
	For additional information on this topic, query on the following words in this
	Knowledge Base:
	
	  SpawnAndWait
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSDKPlatform kbGrpDSUser kbWndw kbWndwMsg kbFAQ kbwin16sdkfaq kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
