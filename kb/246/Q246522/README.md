---
layout: page
title: "Q246522: Windows Clients Cannot Log On to Server Across Router Using IPX"
permalink: /kb/246/Q246522/
---

## Q246522: Windows Clients Cannot Log On to Server Across Router Using IPX

	Article: Q246522
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a Microsoft Windows NT Server 4.0-based domain
	from Microsoft Windows 95-based clients configured with the Novell intraNetWare
	Client and Client for Microsoft Networks and using NWLink as the default
	protocol, you may receive the following error message:
	
	  No domain controller could be found to validate your logon.
	
	However, you can successfully use these same Windows clients to log on to a
	NetWare server on the far side of the router.
	
	CAUSE
	=====
	
	This behavior can occur when the network routers are not configured to propagate
	type 20 packets. By default, most routers do not propagate broadcasts. For the
	network basic input/output system (NetBIOS) to operate within an NWLink
	environment, the routers must be able to propagate NetBIOS packets, which are
	packet type 20 (0x14), across the network.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure the network routers to propagate type 20
	packets (0x14) across the network. For instructions on how to do this, refer to
	the documentation from the router manufacturer.
	
	MORE INFORMATION
	================
	
	For additional information on Internetwork Packet Exchange (IPX) type 20 NetBIOS
	packets, please see the following article in the Microsoft Knowledge Base:
	
	  Q149270 How Routers Handle IPX Type 20 NetBIOS Packets
	
	Additional query words: nwlink fail
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
