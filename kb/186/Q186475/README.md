---
layout: page
title: "Q186475: Icons Mapped to NetWare Drives Appear/Disappear from Start Menu"
permalink: kb/186/Q186475/
---

## Q186475: Icons Mapped to NetWare Drives Appear/Disappear from Start Menu

	Article: Q186475
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
	
	If you use NetWare logon scripts, you may find that icons mapped to NetWare
	drives will appear and disappear from the Start Menu.
	
	CAUSE
	=====
	
	The user desktop may appear before the NetWare logon script is completed.
	
	RESOLUTION
	==========
	
	One workaround is to create a System Policy that tells the system to run the
	complete logon script before continuing to bring up the user desktop. In System
	Policy Editor, modify Default Computer (or create specific computer policies if
	you do not want this to be a global change) under Windows NT System/Logon. Check
	the box "Run Logon Scripts Synchronously." This may resolve the problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
