---
layout: page
title: "Q105999: Err Msg: Nbf Could Not Find Adapter &#92;Device&#92;IbmTok01"
permalink: /kb/105/Q105999/
---

## Q105999: Err Msg: Nbf Could Not Find Adapter &#92;Device&#92;IbmTok01

	Article: Q105999
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an IBM Token Ring card is incorrectly configured for the data rate of the
	network (16 Mbps or 4 Mbps), the following error messages may appear when you
	view the System Log in Event Viewer
	
	  Nbf could not find adapter \Device\IbmTok0x
	
	  Nbf failed to bind to adapter \Device\IbmTok0x
	
	where "x" is the adapter number of your card.
	
	Also, checking under Control Panel, Network, and clicking the Bindings button
	will show that one or more protocols are not bound to the network adapter.
	
	CAUSE
	=====
	
	These messages do not reflect an error in Windows NT. The event log reports that
	it is unable to find the IBM Token Ring card. After the token ring adapter is
	initialized, it will attach to the ring. If the adapter is incorrectly
	configured, the attach will fail and the token ring driver device object
	"\deviceIbmTokOx" is not created. Thus any transports bound to this token ring
	adapter will also fail to start.
	
	RESOLUTION
	==========
	
	Correctly set the jumpers on the card for the data rate of the ring. Switch 12
	of the switch block on the IBM Token Ring card sets the rate. For a Data Rate of
	16 Mbps, set switch 12 to OFF. For a Data Rate of 4 Mbps, set switch 12 to ON.
	
	For additional information on configuring the IBM Token Ring network adapter,
	call IBM technical support at (800) IBM-9397.
	
	MORE INFORMATION
	================
	
	The NBF transport protocol is defined as NetBEUI Frame protocol, a descendent of
	the NetBEUI protocol. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q128233
	  TITLE : Comparison of Windows NT Network Protocols
	
	
	Additional query words: prodnt token-ring IBM NBF
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.51
	
	=============================================================================
	
