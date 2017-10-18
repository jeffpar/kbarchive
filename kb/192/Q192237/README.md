---
layout: page
title: "Q192237: Message &quot;Click here to begin&quot; Missing from Taskbar"
permalink: kb/192/Q192237/
---

## Q192237: Message &quot;Click here to begin&quot; Missing from Taskbar

	Article: Q192237
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to Terminal Server, you will not see the animated message,
	"Click here to begin," start on the right side of the Taskbar and quickly move
	to the left side of the Taskbar. The message stops when it bumps into the START
	button, and remains until the user starts the program.
	
	When you log on to Windows NT Server 4.0, you will see this feature and other
	Taskbar features that are seen with Windows NT Server. By default on a Terminal
	Server, the Taskbar will only display the START button.
	
	To add the clock to Terminal Server:
	
	1. Click START, choose Settings.
	
	2. Click Taskbar. This will open the Taskbar Properties windows.
	
	3. Check the Show Clock checkbox.
	
	RESOLUTION
	==========
	
	This behavior is by design.
	
	STATUS
	======
	
	We explicitly removed these features from the product because this data must be
	sent over the Network, causing unnecessary overhead to Terminal Server Client
	sessions. This is the same reason the clock is turned off by default.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
