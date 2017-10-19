---
layout: page
title: "Q104576: Embedding Non-printable Characters in LMHOSTS Computer Names"
permalink: /kb/104/Q104576/
---

## Q104576: Embedding Non-printable Characters in LMHOSTS Computer Names

	Article: Q104576
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	Under Windows NT, the LMHOSTS file enables you to specify names
	containing non-printable or extended characters. Custom applications
	that make use of special names to function properly in routed
	topologies may benefit from this feature.
	
	To use this feature, you can specify non-printable characters by using
	their hexidecimal notations and surrounding the entire name in quotes, \nn
	or \0xnn, where "nn" is the two-digit hexidecimal number. For example:
	
	  102.54.94.97   rhinodc     #DOM:rhino   #the rhino domain DC
	  11.14.21.96    "appl\0x1f"              #internal db application
	                                           gateway
	
	NOTE: By using the special naming extension of the Windows NT LMHOSTS
	files, you surrender backward compatibility with Microsoft LAN
	Manager. (The LAN Manager TCP/IP implementation does not recognize the
	hexidecimal format.)
	
	For additional information on LMHOSTS files in Windows NT, query on
	the following word in the Microsoft Knowledge Base:
	
	  lmhosts
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
