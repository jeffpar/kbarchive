---
layout: page
title: "Q111604: BUG: Explicitly Loaded Modules Not Removed from Memory"
permalink: /kb/111/Q111604/
---

## Q111604: BUG: Explicitly Loaded Modules Not Removed from Memory

	Article: Q111604
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
	
	Modules that are loaded via LoadModule() are not removed from memory when a GP
	(general protection) fault causes the application that loaded it to terminate.
	You must exit Windows to unload the module.
	
	CAUSE
	=====
	
	Windows does not currently maintain information about what loaded a specific
	module.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
