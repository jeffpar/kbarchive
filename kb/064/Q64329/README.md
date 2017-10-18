---
layout: page
title: "Q64329: INFO: Windows Message-Processing Caveats"
permalink: kb/064/Q64329/
---

## Q64329: INFO: Windows Message-Processing Caveats

	Article: Q64329
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbWndw kbWndwMsg
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Do not call any function that may cause control to yield to another application
	during the processing of any of the following messages:
	
	  WM_ACTIVATE
	  WM_ACTIVATEAPP
	  WM_CREATE
	  WM_INITDIALOG
	  WM_NCCREATE
	
	Certain messages are used to notify applications of some change in Windows's
	internal status. While processing one of these messages, an application cannot
	call any function that may result in control being yielded to another
	application. Forbidden functions include message-processing functions such as
	MessageBox(), DialogBox(), GetMessage(), and PeekMessage().
	
	Violating this caveat may cause Windows to exhibit strange visual behavior.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
