---
layout: page
title: "Q160187: Packet Burst Protocol"
permalink: /kb/160/Q160187/
---

## Q160187: Packet Burst Protocol

	Article: Q160187
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The packet burst protocol is built on top of Internetwork Packet Exchange (IPX)
	and can speed the transfer of multiple packet NetWare Core Protocol (NCP) file
	reads and writes. Packet bursting speeds the transfer of NCP data between a
	workstation and a NetWare server by eliminating the need to sequence and
	acknowledge each packet. In other words, the server or workstation can send a
	whole set (burst) of packets before requiring an acknowledgment.
	
	Although IPX does not require one-request, one-response type communication, the
	normal NCP implementation usually does. Burst mode communicates using a
	multipacket which includes the IPX headers for each packet, the burst headers
	for each packet and the request or reply, with or without data.
	
	The packets that make up the burst are called fragments. One burst can be up to
	64 KB in length. By allowing multiple packets to be acknowledged, the burst
	protocol can reduce network traffic on most IPX networks.
	
	Additionally, the packet burst protocol monitors dropped packets and retransmits
	only the missing packets.
	
	MORE INFORMATION
	================
	
	Packet Bursting in Windows NT
	-----------------------------
	
	Windows NT 3.51 and Windows NT 4.0 have packet bursting enabled automatically and
	will not need any additional configuring to use packet bursting for Gateway
	Services for NetWare (GSNW) or Microsoft Client Service for NetWare (CSNW)
	connectivity to a NetWare server.
	
	To disable Packet bursting in Windows NT 3.51 or Windows NT 4.0 use Registry
	Editor to do the following:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NWCWorkstation\Parameters
	
	2. On the Edit menu, click Add value, and add a parameter value called
	  MaxBurstSize with a type of REG_DWORD and set the value to 0 (zero).
	
	3. Quit Registry Editor and restart your computer for the above settings to take
	  effect.
	
	
	
	Additional query words: GSNW CSNW Packet Burst
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
