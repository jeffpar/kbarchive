---
layout: page
title: "Q36584: PRB: PostMessage() Returns 0, Indicating Failure"
permalink: /kb/036/Q36584/
---

## Q36584: PRB: PostMessage() Returns 0, Indicating Failure

	Article: Q36584
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbWndwMsg
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	PostMessage(hWnd,wMsg,wParam,lParam) returns 0, indicating failure.
	
	CAUSE
	=====
	
	PostMessage(hWnd,wMsg,wParam,lParam) returns 0, indicating failure, for one of
	the following two reasons:
	
	- The window handle (hWnd parameter to PostMessage()) receiving the message is
	  -1. If this is the case, the message (wMsg) is broadcast to all windows.
	
	- The window to receive the message has a full application queue.
	
	Note that PostMessage() does not return NULL if the hWnd parameter in the
	PostMessage() call is an invalid window handle. Also note that IsWindow() can be
	called to verify whether a given handle is indeed a valid window handle.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbprb
	
	=============================================================================
	
