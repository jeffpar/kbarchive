---
layout: page
title: "Q148412: Use of the &quot;Seconds&quot; Field for BOOTP Relay Agents"
permalink: kb/148/Q148412/
---

## Q148412: Use of the &quot;Seconds&quot; Field for BOOTP Relay Agents

	Article: Q148412
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some BOOTP Relay Agents implement the use of the Seconds field in a Dynamic Host
	Configuration Protocol (DHCP) Discover or BOOTP BOOTREQUEST packet as defined in
	RFC 1542. This option will limit the clients Discover broadcast to the local
	subnet until the seconds threshold is reached. This option can reduce network
	traffic and increase the chance that a local server will service the request.
	
	MORE INFORMATION
	================
	
	The Relay Agent will only forward the packet if the Seconds field is higher than
	the threshold set. RFC recommends the default to be 4 seconds. The seconds field
	is defined as the number of seconds from the first packet sent. For example, the
	first packet sent will have a value of 0. The next packet sent would have a
	value of 10, if it was sent 10 seconds after the first packet.
	
	This feature is supported in the Windows NT BOOTP Relay Agent.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q138793
	  TITLE : Multi-Protocol Router Installation and Configuration
	
	RFC 1542 does not require BOOTP Relay Agents to support the Seconds field.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :2000,3.5,3.51,4.0
	
	=============================================================================
	
