---
layout: page
title: "Q110065: System Stops Responding When Printing from UNIX"
permalink: kb/110/Q110065/
---

## Q110065: System Stops Responding When Printing from UNIX

	Article: Q110065
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Windows NT server from UNIX LAN Manager-compatible
	software over Ethernet, the Windows NT system stops responding (hangs) when you
	attempt to print and the following error message appears:
	
	  Kernel unhandled exception error.
	
	This problem may also occur when a Windows for Workgroups version 3.11 client
	attempts to print a server message block (SMB) to a public disk share.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5. This problem has also been
	corrected in the latest U.S. Service Pack for Windows NT and Windows NT Advanced
	Server version 3.1. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: wfw wfwg prodnt stop blue screen
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
