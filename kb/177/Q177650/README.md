---
layout: page
title: "Q177650: Remote Shutdown Fails If User Is Logged On Without Rights"
permalink: kb/177/Q177650/
---

## Q177650: Remote Shutdown Fails If User Is Logged On Without Rights

	Article: Q177650
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The remote shutdown of a Windows NT 4.0 server (or workstation) with
	shutdown.exe from the Windows NT resource kit does not work if the "Shut down
	the system" right is removed for the currently logged on user of this server (or
	workstation).
	
	The remote shutdown also fails if a user without this right has locked the
	Windows NT server (or workstation) by clicking Lock Workstation after performing
	a CTRL+ALT+DELETE key combination.
	
	CAUSE
	=====
	
	To shut down the computer a separate thread is created in the context of the
	logged on user to shutdown the machine. Since the user does not have shutdown
	privilege this fails.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
