---
layout: page
title: "Q234687: How To Disable SNA NT Client Smart Multihoming"
permalink: /kb/234/Q234687/
---

## Q234687: How To Disable SNA NT Client Smart Multihoming

	Article: Q234687
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fea kbFEA kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	SNA Clients are configured by default to use smart multihoming. When an SNA
	Server is multihomed, a list of all the TCP/IP addresses for the SNA Servers are
	passed back to the SNA Client. The SNA Client chooses the TCP/IP address which
	is closest to its own TCP/IP subnet or TCP/IP address. Occasionally, the best
	TCP/IP address is not reachable because of network design. This causes a delay
	in the client connecting to the SNA Server. The time delay depends upon the
	TCP/IP retry timers configured on the client, but should be 45 to 55 seconds
	assuming the retry-timer settings have not been modified from their defaults.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q182332 SNA Clients Experience Delay Connecting to Multihomed Server
	
	Smart multihoming is enabled by default on all clients starting with SNA 3.0
	Service Pack 2 clients.
	
	To disable smart multihoming, the client needs to have the registry value
	ReadjustMultihomedAddresses (a REG_SZ) set to NO.
	
	NOTE: This applies to SNA Windows NT Clients ONLY. Other SNA clients have no such
	registry value.
	
	The above registry value is located in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Snabase\Parameters\SnaTcp
	
	If smart multihoming is disabled, then the client tries all addresses in the
	order in which the server has passed them to the client in the Service Table.
	
	This feature is available in the latest service pack for SNA Server version 4.0.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	This feature was first included in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fea kbFEA kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
