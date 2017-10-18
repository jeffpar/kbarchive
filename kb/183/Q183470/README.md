---
layout: page
title: "Q183470: PRB: Unattended Setup Does Not Install Windows Messaging"
permalink: kb/183/Q183470/
---

## Q183470: PRB: Unattended Setup Does Not Install Windows Messaging

	Article: Q183470
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an unattended Setup of Windows NT, Microsoft Windows Messaging is
	not installed.
	
	CAUSE
	=====
	
	This behavior occurs because unattended Setup runs a Typical Setup. Windows
	Messaging can be installed only using a Custom Setup.
	
	RESOLUTION
	==========
	
	To install Windows Messaging, use either of the following methods:
	
	- Use the Sysdiff tool after Windows NT is installed.
	
	
	- Double-click Inbox on the desktop.
	
	Additional query words: 4.00 Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
