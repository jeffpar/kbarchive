---
layout: page
title: "Q159980: Remote Link Doesn't Reconnect After Event 23 Outage 0x000A"
permalink: /kb/159/Q159980/
---

## Q159980: Remote Link Doesn't Reconnect After Event 23 Outage 0x000A

	Article: Q159980
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server 2.11 Service Pack 1 includes support for distributed link services,
	where a distributed link service is configured to communicate over a native LAN
	session to a link service running on a remote SNA Server, over TCP/IP sockets,
	Netware IPX/SPX, or Banyan Vines.
	
	If the distributed link service (SNAREM1, SNAREM2, etc) loses its LAN session to
	the remote link service (for example, due to a network outage), the following
	Windows NT application event log entry is logged by the distributed link
	service:
	
	  
	
	  Event:  23
	  Source: SNA Server
	  Description: Connection TOKEN1   using Link Service SNAREM1  failed
	               Qualifier = 000A
	
	Once this occurs, the connection will remain "Inactive" and SNA Server will not
	reconnect to a remote link service on another server (assuming multiple remote
	link services were configured in the distributed link service setup dialog). The
	administrator will be unable to manually restart the connection unless the SNA
	Server service is stopped and restarted.
	
	NOTE: When connecting over TCP/IP sockets between the distributed link service
	and the remote link, it will take over 2 minutes for a network outage to be
	detected. The TCP/IP socket "keep alive" interval used to detect network outages
	on SNA Server is controlled by the SNA Server WatchDogTimeout parameter (which
	defaults to 60 seconds), documented in the following Microsoft Knowledge Base
	article:
	
	  Q150511 Preventing SNA Server Keepalives on Idle LAN Connections
	
	
	CAUSE
	=====
	
	The cause of the initial network outage (leading to the Event 23 qualifier 0x0A)
	will require debugging using a network trace tool such as Network General
	Sniffer(TM) or Microsoft Network Monitor.
	
	The cause of automatic reconnection problem was due to a problem in SNA Server.
	SNA Server (Snaservr.exe) started a link reactivation timer when in fact it was
	trying to deactivate the link to reuse it for an outgoing call.
	
	RESOLUTION
	==========
	
	There is no workaround for this problem, though there is an SNA Server 2.11
	hotfix available from Microsoft. This problem is fixed in SNA Server 3.0.
	
	NOTE: The cause of the network outage must be diagnosed separately, as described
	in the CAUSE section above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1. This problem was corrected in the latest Microsoft SNA Server 2.11 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
