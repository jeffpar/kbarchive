---
layout: page
title: "Q187178: Mouse Pointer Location Undetected by RDP Client"
permalink: kb/187/Q187178/
---

## Q187178: Mouse Pointer Location Undetected by RDP Client

	Article: Q187178
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	This is not an accessibility feature. It is a feature added by Intellipoint
	Mouse support. To see the behavior, you must have Intellipoint Mouse support
	enabled on the Server, but not on the Client. The Terminal Server client sends
	keystrokes to the Server because the Client is the active application.
	Intellipoint intercepts the CTRL sequence and draws the rings where it thinks
	the cursor is located. The cursor is at the edge of the window, because that is
	where it is clipped to by the Server.
	
	SYMPTOMS
	========
	
	When a Terminal Server client window is in focus and the user moves the mouse
	pointer out of the window, the client does not register that the mouse location
	is out of range. Instead, it behaves as though the mouse is still in the client
	window.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	To work around the problem, the user may either:
	
	- Install Intellipoint Mouse support on the Client, and deconfigure it from the
	  Server.
	
	-or-
	
	- Remove Intellipoint Mouse support from the Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
