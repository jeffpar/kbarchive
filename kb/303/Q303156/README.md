---
layout: page
title: "Q303156: XCON: RPC Error Messages 9318 and 9322 Are Logged"
permalink: kb/303/Q303156/
---

## Q303156: XCON: RPC Error Messages 9318 and 9322 Are Logged

	Article: Q303156
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When connections over a Transmission Control Protocol/Internet Protocol (TCP/IP)
	protocol-based network do not work, the message transfer agent (MTA), or
	Emsmta.exe, may generate error messages in the Application event log that are
	similar to the following:
	
	  Event ID: 9322
	  Source: MSExchangeMTA
	  Description: An interface error has occurred. An MtaBindBack over RPC has
	  failed. Locality Table (LTAB) index: %1, NT/MTA error code:1722. Comms error
	  %3, Bind error %4,Remote Server Name %5, Protocol String <IP Address of
	  Server>.
	
	  Event ID: 9318
	  Source: MSExchangeMTA - Interface
	  Description: An RPC communications error occurred. Unable to bind over RPC.
	  Locality Table (LTAB) index: 151, NT/MTA error code: 1722. Comms error 1722,
	  Bind error 1722, Remote Server Name SERVERNAME [MAIN BASE 1 500 %10] (14)
	
	MORE INFORMATION
	================
	
	The MTA uses remote procedure call (RPC), a synchronous socket protocol for
	intrasite and site connections. The methodology that provides the bind and bind
	back changes in the post-Exchange Server 5.5 Service Pack 3 (SP3) build 2651.75;
	the Exchange Server 5.5 SP3 build of the MTA is 2650.24. In particular, build
	2651.75 or later of the MTA requires fully qualified domain name (FQDN)
	resolution for normal operation, which is accomplished with Domain Name System
	(DNS) or HOSTS files.
	
	Each Exchange Server computer must have a valid host (A) record in either a DNS
	or a HOSTS file with the FQDN of each Exchange Server to which the Exchange
	Server computer connects added to the %SystemRoot%\System32\Drivers\Etc folder.
	Exchange Server 5.5 Service Pack 4 (SP4) and Microsoft Exchange 2000 Server
	require that the TCP/IP protocol be installed on the server.
	
	Consider a two-server scenario in which one server, ServerA, is multihomed. It is
	important to note that a multihomed server (a server with multiple network
	interfaces such as a network interface card [NIC], a MODEM card, or an
	Integrated Services Digital Network [ISDN] card) causes bind back errors on the
	server that is hosting the adjacent MTA, yet mail flow is not interrupted. This
	behavior is expected because ServerA's MTA successfully binds to ServerB on the
	network segment that is common to both the servers. While SeverA binds to
	ServerB, passing each available bind string in sequence, ServerB logs a bind
	back failure for each bind that passes a string that ServerB cannot resolve.
	
	Consider two servers, each with multiple network interfaces. Only one network,
	Net3, is common to the servers. Both servers have different names on each
	network:
	
	- ServerA:
	
	   - ServerA.Net1.<Company>.com
	
	   - ServerA.Net2.<Company>.com
	
	   - ServerA.Netn.<Company>.com
	
	- ServerB:
	
	   - ServerB.Net1.<Company>.com
	
	   - ServerB.Net2.<Company>.com
	
	   - ServerB.Netn.<Company>.com
	
	ServerA binds to ServerB by using the first TCP transport stack that is
	available, and then passes the associated string,
	TCP:ServerA.Net1.<Company>.com as the bind back string. ServerB attempts
	to bind back to ServerA using the following string:
	
	  TCP:ServerA.Net1.<Company>.com
	
	ServerB fails. ServerA recognizes the failure and binds to ServerB with the next
	available transport stack by using the following new string:
	
	  TCP:ServerA.Net2.<Company>.com
	
	ServerB attempts to bind back to ServerA by using the following new string:
	
	  TCP:ServerA.Net2.<Company>.com
	
	ServerB fails. ServerA recognizes the failure and binds to ServerB with the next
	available transport stack by using the following new string:
	
	  TCP:ServerA.Net3.<Company>.com
	
	ServerB attempts to bind back to ServerA by using the following new string and
	succeeds:
	
	  TCP:ServerA.Net3.<Company>.com
	
	A standard MTA session ensues and mail is transferred between the servers.
	ServerB logs two bind back failures, but mail transfer is not affected. The
	process is reversed for ServerB. A server continues to try all of the available
	networks until a success on one network, or until all connections fail.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q251318 XCON: Message Transfer Agent Uses Node IP Address Instead of Cluster
	  IP Address
	
	  Q279537 XCON: Post-Service Pack 3 MTA Bindback String Changes
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	
