---
layout: page
title: "Q87347: BUG: OpenFile() API Fails on Novell Temp Drive"
permalink: kb/087/Q87347/
---

## Q87347: BUG: OpenFile() API Fails on Novell Temp Drive

	Article: Q87347
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Windows graphical environment, when an application uses the
	OpenFile() API to open a file on a Novell network temporary drive, the function
	returns the value HFILE_ERROR to indicate failure.
	
	CAUSE
	=====
	
	The OpenFile() function does not properly parse the nonalphabetic characters
	that the Novell network redirector uses to represent temporary drive mappings.
	
	RESOLUTION
	==========
	
	To work around this problem, use the _lopen() function to obtain a file handle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
