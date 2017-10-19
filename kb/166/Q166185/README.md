---
layout: page
title: "Q166185: Macintosh Chooser May Hang When Connecting to Windows NT"
permalink: /kb/166/Q166185/
---

## Q166185: Macintosh Chooser May Hang When Connecting to Windows NT

	Article: Q166185
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you select a server and provide the appropriate user name and password,
	the Chooser dialog box may stop responding immediately after selecting a volume
	from the list. The system may be unresponsive and not allow you to switch to any
	currently open task or start any new tasks. This problem continues until the
	Chooser is forced to quit or the system is shut down and restarted.
	
	CAUSE
	=====
	
	This problem will occur when the Apple Menu Option in the Control Panel is set
	to "Remember recently used items" and you have just selected a volume. After
	finishing the connection request, the Macintosh client may send a request to the
	server asking it to enumerate any recently used directory information that has
	been saved. If the Windows NT Server responds with the message "Access Denied"
	(AFP error 0xFFFFEC78), the Macintosh client repeatedly loops, sending in the
	same request and thus causing the Chooser to stop responding. Canceling the
	Chooser may or may not correct the condition.
	
	RESOLUTION
	==========
	
	For Macintosh systems that exhibit the problem:
	
	1. On the Apple menu, click Control Panel, and then click on Apple Menu Options.
	
	2. Click to clear the Remember Recently Used Items check box.
	
	3. Shutdown and restart your Macintosh system.
	
	After completing these steps, verify that the Macintosh is able to connect to any
	and all volumes that caused the Chooser to stop responding.
	
	MORE INFORMATION
	================
	
	The Macintosh computer is manufactured by Apple Computer, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: prodnt sfm Services for Macintosh Chooser
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	
