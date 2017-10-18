---
layout: page
title: "Q226480: Terminal Server Profile Path Changes to Windows NT Profile"
permalink: kb/226/Q226480/
---

## Q226480: Terminal Server Profile Path Changes to Windows NT Profile

	Article: Q226480
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbui
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a Windows NT Server, Terminal Server Edition-based computer on
	a domain where the primary domain controller is running File and Printer Sharing
	for NetWare, the Terminal Server profile path in User Manager may appear to
	change to Windows NT Profile.
	
	CAUSE
	=====
	
	This problem can occur because of a problem in User Manager.
	
	RESOLUTION
	==========
	
	To work around this problem, you can safely ignore this behavior because the
	Windows NT Profile path remains the Terminal Server profile path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version Terminal
	Server Edition for 4.00.
	
	NOTE: It should be noted that if FPNW is removed, the behavior may still exist.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbnetwork kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
