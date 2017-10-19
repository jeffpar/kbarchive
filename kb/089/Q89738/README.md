---
layout: page
title: "Q89738: INFO: Handling WM_QUIT While Not in Primary GetMessage() Loop"
permalink: /kb/089/Q89738/
---

## Q89738: INFO: Handling WM_QUIT While Not in Primary GetMessage() Loop

	Article: Q89738
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbWndwMsg
	Last Modified: 12-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application can terminate while in a message loop that is different from the
	primary GetMessage() loop. If this secondary message loop retrieves the WM_QUIT
	message from the message queue, the message must be reposted so that the primary
	GetMessage() loop can exit.
	
	MORE INFORMATION
	================
	
	An application can get into a secondary message loop that is different from the
	primary GetMessage() loop in order to track drag messages, yield periodically
	during lengthy processing, and so on. The user may be able to terminate the
	application while the secondary message loop is being used to retrieve messages
	from the message queue.
	
	If the GetMessage()/PeekMessage() call used in the secondary loop specifies a
	message filter that does not include WM_QUIT, WM_QUIT will not be retrieved from
	the message queue. When the loop terminates, control will be returned to the
	primary GetMessage() loop, which retrieves the WM_QUIT message.
	
	If the GetMessage()/PeekMessage() call in the secondary loop retrieves all
	messages or specifies a message filter that includes the WM_QUIT message, the
	WM_QUIT message that is retrieved must be reposted and control must be returned
	to the primary message loop. The primary message loop will then retrieve the
	reposted WM_QUIT message and exit.
	
	     while (bNotDone)
	     {
	
	     // Secondary message loop
	     while (PeekMessage(&msg, NULL, 0, 0, PM_REMOVE))
	     {
	        if (msg.message == WM_QUIT)
	        {
	           // Repost the QUIT message so that it will be retrieved by the
	           // primary GetMessage() loop.
	           PostQuitMessage(msg.wParam);
	           return FALSE;
	        }
	        // Pre-process message if required (TranslateAccelerator etc.)
	        TranslateMessage(&msg);
	        DispatchMessage(&msg);
	        :
	        :
	     }
	     :
	
	  }
	
	The primary message loop will not exit if the secondary message loop does not
	repost the WM_QUIT message. Consequently, the application will remain in memory
	even though all its windows are destroyed.
	
	An alternative solution is to prevent the user from terminating the application
	while the application is in the secondary message loop.
	
	Additional query words: 3.00 3.10 close
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
