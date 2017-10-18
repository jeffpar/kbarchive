---
layout: page
title: "Q166823: Cannot Connect to AT&amp;T Advanced Server VMS or OSF Print Share"
permalink: kb/166/Q166823/
---

## Q166823: Cannot Connect to AT&amp;T Advanced Server VMS or OSF Print Share

	Article: Q166823
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprintkbbuglist kbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An attempt from a Windows NT computer to connect to an AT&T Advanced Server
	for a VMS or OSF printer share fails.
	
	CAUSE
	=====
	
	The AT&T Advanced Server for UNIX is a Windows NT server on a UNIX network
	environment. Windows NT computers view the print provider of the AT&T
	Advanced Server for UNIX as a downlevel print server (for example, a LAN Manager
	2.x print server.) The AT&T Advanced Server for UNIX provides full server
	functionality except for the print server functionality (SpoolSS) to Windows NT
	computers.
	
	
	RESOLUTION
	==========
	
	Obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: 4.00 3.51 prodnt printman
	
	======================================================================
	Keywords          : kbnetwork kbprint kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
