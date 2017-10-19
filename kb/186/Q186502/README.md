---
layout: page
title: "Q186502: Using Blinking Cursors with Terminal Server"
permalink: /kb/186/Q186502/
---

## Q186502: Using Blinking Cursors with Terminal Server

	Article: Q186502
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
	
	Blinking cursors cause unnecessary bandwidth use because every blink requires
	data packets to be transmitted. Applications that do not use a blinking cursor
	or that allow the blinking cursor to be disabled are preferred.
	
	A blinking cursor on the remote client session will cause continuous
	client/server traffic. This may not be a problem in many environments, but if
	connections are made over, for instance, a dial-on-demand router, excessive line
	charges can be incurred.
	
	MORE INFORMATION
	================
	
	Microsoft recommends slowing or eliminating blinking cursors on Terminal Server
	Clients to reduce network bandwidth usage.
	
	To adjust the cursor blink rate, perform the following steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Keyboard.
	
	2. Move the slider to the left to decrease the Cursor Blink Rate. Moving the
	  slider to Slow will stop cursor blinking.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
