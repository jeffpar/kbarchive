---
layout: page
title: "Q163374: Arp May Not Use Specified Source IP Address"
permalink: kb/163/Q163374/
---

## Q163374: Arp May Not Use Specified Source IP Address

	Article: Q163374
	Product(s): Microsoft Windows NT
	Version(s): WFW:3.11;Win95;WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Arp.exe will not use a specified source IP address when there are multiple IP
	addresses from the same subnet assigned to the same network adapter.
	
	CAUSE
	=====
	
	Microsoft's TCP/IP implementation uses the first IP address that is assigned to
	the network adapter when there is more than one IP address for the same subnet.
	This is by design.
	
	RFC 826 does not cover specifying a source IP address when there is more than one
	IP addresses assigned to the same network adapter.
	
	RESOLUTION
	==========
	
	Arp does use the specified IP address when there are multiple network adapters,
	each with an IP address on the same subnet.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWin95search kbWinNT310Search kbWinNTW310Search kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : WFW:3.11;Win95;WinNT:3.1,3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
