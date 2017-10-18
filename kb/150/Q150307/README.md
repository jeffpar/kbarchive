---
layout: page
title: "Q150307: NDIS Drivers Available with NetWare Real-Mode Client"
permalink: kb/150/Q150307/
---

## Q150307: NDIS Drivers Available with NetWare Real-Mode Client

	Article: Q150307
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing network support, if you select the Novell NetWare
	(Workstation Shell 3.x [Netx]) or the Novell NetWare (Workstation Shell 4.0 and
	later [VLM]) network client and then open the properties for the network
	adapter, the Real-Mode (16-Bit) ODI Drivers option is selected properly, but the
	Enhanced-Mode (32-Bit And 16-Bit) NDIS Driver and the Real-Mode (16-Bit) NDIS
	Driver options are not disabled.
	
	Because the Real-Mode (16-Bit) ODI Driver option is the only valid option, it
	should be the only option available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you select the Enhanced-Mode (32-Bit And 16-Bit) NDIS Driver or the Real-Mode
	(16-Bit) NDIS Driver option with the Novell NetWare (Workstation Shell 3.x
	[Netx]) or the Novell NetWare (Workstation Shell 4.0 and later [VLM]) network
	client, Windows 95 may stop responding (hang) or may become unstable.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
