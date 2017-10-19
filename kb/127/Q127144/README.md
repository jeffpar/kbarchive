---
layout: page
title: "Q127144: Windows NT WinSock Listen (Backlog) Parameter Limit"
permalink: /kb/127/Q127144/
---

## Q127144: Windows NT WinSock Listen (Backlog) Parameter Limit

	Article: Q127144
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The WinSock listen() call backlog parameter under Windows NT version 3.5
	and 3.51 accepts a maximum value of 100.
	
	The maximum backlog parameter is 5 on Windows NT 4.0 Workstation, and 200 on Windows NT 4.0 Server.
	
	WinSock server applications use the listen() call to establish a socket
	for listening for incoming connections. This calls second parameter,
	backlog, is defined as the maximum length to which the queue of pending
	connections may grow.
	
	The WinSock version 1.1 specification states the maximum value for the
	backlog parameter is 5. However, Windows NT version 3.5 accepts up to 100
	for this value.
	
	Services that handle a large number of socket connections may be written
	to use a larger backlog value to prevent client connection requests from
	being dropped. This can be useful when writing applications such as World
	Wide WEB (WWW) and gopher servers.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
