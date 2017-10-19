---
layout: page
title: "Q111587: BUG: _lread() Functions Incorrectly When No Floppy in Drive"
permalink: /kb/111/Q111587/
---

## Q111587: BUG: _lread() Functions Incorrectly When No Floppy in Drive

	Article: Q111587
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the function _lread() to read a floppy disk when there is no disk in the
	floppy drive results in the System error-message box "Cannot Read from Drive..."
	with Retry and Cancel buttons. If the Cancel button is clicked, _lread()
	returns, indicating incorrectly that it read the number of bytes requested.
	Instead, it should return -1, indicating failure.
	
	RESOLUTION
	==========
	
	Before calling _lread(), call SetErrorMode() in your application to disable the
	default Windows Critical Error Handler so that the system error-message box will
	not be displayed. The _lread() function will correctly return -1, indicating
	failure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10 int24
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
