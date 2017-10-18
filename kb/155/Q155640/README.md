---
layout: page
title: "Q155640: Cannot Find NetWare Server Using Partial Matching"
permalink: kb/155/Q155640/
---

## Q155640: Cannot Find NetWare Server Using Partial Matching

	Article: Q155640
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to find a NetWare server by using the right mouse button to click My
	Computer, clicking Find Computer on the menu that appears, and then using a
	wildcard or incomplete name (partial matching), Windows NT does not find any
	NetWare servers.
	
	CAUSE
	=====
	
	Windows NT Explorer cannot locate NetWare servers with the Find Computer command
	without the full server name.
	
	RESOLUTION
	==========
	
	Use the command-line equivalent to list all available NetWare neighborhood
	servers. To do so, type the following line at a command prompt:
	
	  net view /n:nw
	
	Once you have determined the correct server name, use the Find Computer command
	with the full server name.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
