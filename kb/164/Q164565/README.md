---
layout: page
title: "Q164565: Unsuccessful Appletalk Winsock Connection Using WSARECV()"
permalink: kb/164/Q164565/
---

## Q164565: Unsuccessful Appletalk Winsock Connection Using WSARECV()

	Article: Q164565
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.00
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a program that calls the WSARECV() function to communicate with a
	Windows NT version 4.0 server over a Winsock connection with the AppleTalk
	protocol, the program does not establish a successful connection to the server.
	However, when you use the same program to connect to a Windows NT version 3.51
	server, the program works correctly.
	
	CAUSE
	=====
	
	Programs using a Winsock connection to a Windows NT 4.0 server may require
	Winsock 2.0 support. Prior to Windows NT 4.0 Service Pack 3, there are no
	provisions for Winsock 2.0 functionality in Windows NT Server 4.0.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q152734
	  TITLE : How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: SP2 SP4 sockets
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.00
	Issue type        : kbbug
	
	=============================================================================
	
