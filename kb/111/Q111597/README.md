---
layout: page
title: "Q111597: BUG: Debug Kernel Ignores Fatal Exits When OutputTo="
permalink: kb/111/Q111597/
---

## Q111597: BUG: Debug Kernel Ignores Fatal Exits When OutputTo=

	Article: Q111597
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
	
	By default, the Windows debugging kernel sends its debug messages to the AUX
	device (which maps to the COM1 port). When the debug output from the Windows
	kernel is redirected by using OutputTo=NUL or OutputTo=<filename> in the
	[DEBUG] section of the SYSTEM.INI file, Fatal Exit messages are ignored
	automatically.
	
	RESOLUTION
	==========
	
	This behavior is by design of the Windows debugging kernel and there is no other
	flag to control the output of Fatal Exit messages even if you have a serial
	terminal connected to the COM1 or COM2 port.
	
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
	
