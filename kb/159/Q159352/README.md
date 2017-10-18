---
layout: page
title: "Q159352: RPC over NetBIOS Programs Can't Call from Server to RAS Client"
permalink: kb/159/Q159352/
---

## Q159352: RPC over NetBIOS Programs Can't Call from Server to RAS Client

	Article: Q159352
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Remote Access Service (RAS) client dials in to a RAS server using NetBEUI as
	the protocol. If the RAS server is configured to allow access to the remote
	network, RPC applications initiated at the RAS server cannot connect back to the
	RAS client. The RAS server may hang up the line, and log Event 20014.
	
	One such application is the Microsoft Exchange Dynamic RAS Connector.
	
	CAUSE
	=====
	
	When a network application is run on a RAS server, and it tries to connect to a
	RAS client, if access to the entire network is enabled, then the network traffic
	is processed by the RAS NetBIOS gateway. RPC applications have a problem
	interacting with the RAS NetBIOS gateway over NetBIOS/NetBEUI.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00 This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	NOTE: In order to have the RAS server NetBIOS gateway proxy for client NetBIOS
	application names, such as those registered by the Microsoft Exchange Server MTA
	(Mail Transfer Agent), you must set the following registry parameter to 2.
	
	HKEY_LOCAL_MACHINE
	\SYSTEM
	\CurrentControlSet
	\Services
	\RemoteAccess
	\Parameters
	\NetBiosGateway
	\RemoteListen
	
	  Value Type: REG_DWORD
	  Default: 1 (change to 2)
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q99145
	  TITLE : RAS RemoteListen Parameter
	
	Additional query words: DRAS event 20014 prodnt
	
	======================================================================
	Keywords          : kbnetwork kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
