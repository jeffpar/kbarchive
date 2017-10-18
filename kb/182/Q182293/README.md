---
layout: page
title: "Q182293: Err Msg: Rundll32 Has Performed an Illegal Operation..."
permalink: kb/182/Q182293/
---

## Q182293: Err Msg: Rundll32 Has Performed an Illegal Operation...

	Article: Q182293
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Dial-Up Networking using the Add/Remove Programs tool in
	Control Panel, you may experience the following symptoms:
	
	- When you double-click Make New Connection in Dial-Up Networking, you may
	  receive the following error message:
	
	  Rundll32 has performed an illegal operation and will be shut down.
	
	- When you attempt to connect to the Internet and you have Dial-Up Networking
	  configured to dial automatically, you may receive one of the following error
	  messages:
	
	  Rnaapp.exe caused an invalid page fault in module kernel32.dll
	
	  Rnaapp caused an invalid page fault in module rnaapp.exe.
	
	CAUSE
	=====
	
	These error messages can occur if you are running the retail version of Windows
	95, and you install Dial-Up Networking using a Microsoft Windows 95 OEM Service
	Release 2 (OSR2) CD-ROM.
	
	
	RESOLUTION
	==========
	
	To resolve this behavior, use one of the following methods:
	
	Method 1
	--------
	
	Obtain the Dial-Up Networking 1.3 Performance and Security Update from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/windows95/downloads
	
	Method 2
	--------
	
	Uninstall Dial-Up Networking using the Add/Remove Programs tool in Control Panel,
	and then install Dial-Up Networking using a retail version of Windows 95.
	
	NOTE: If you receive any file version conflict messages, click No to replace the
	existing files on the hard disk.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
