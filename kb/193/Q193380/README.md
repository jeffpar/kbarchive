---
layout: page
title: "Q193380: XCON: Mail Does Not Flow over X.400 Connector; Event 9301"
permalink: /kb/193/Q193380/
---

## Q193380: XCON: Mail Does Not Flow over X.400 Connector; Event 9301

	Article: Q193380
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55kbfaq
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An administrator may observe that messages are not being transferred over an
	X.400 Connector between two Exchange Server computers in one direction. It is
	possible that message transfer in the opposite direction functions correctly.
	There are no events logged on the server that has the backlog, but on the server
	that should be receiving the messages, the message transfer agent (MTA) may have
	logged events such as the following:
	
	  Event: 9301
	  The message transfer gateway that uses the network address 91F5C11B and
	  the transport stack
	  /o=Org/ou=Site/cn=Configuration/cn=Servers/cn=LocalMTA/cn=TCP
	  (LocalMTA) could not be found. Check the configuration of the mail
	  gateway.
	  [BASE IL TCP/IP DRVR 8 218] (10)
	
	  Event 9301
	  The message transfer gateway that uses the network address
	  52656d6f74654d5441 and the transport stack
	  /o=Org/ou=Site/cn=Configuration/cn=Servers/cn=LocalMTA/cn=TCP
	  (LocalMTA) could not be found. Check the configuration of the mail
	  gateway.
	  [BASE IL TCP/IP DRVR 8 218] (10)
	
	  Event 9202
	  A sockets error 0 on an accept() call was detected. The MTA will attempt
	  to recover the sockets connection. Control block index: 1. [BASE IL
	  TCP/IP DRVR 8 256] (12)
	
	CAUSE
	=====
	
	The X.400 Connectors are configured with Fully Qualified Domain Names (FQDN),
	rather than IP address or NetBIOS names. The MTA that has logged the errors is
	unable to resolve the IP address of the incoming connection to an FQDN, in order
	to locate the X.400 Connector for the remote MTA.
	
	When the remote MTA initiates the connection, it supplies its own IP address in
	the frame. The receiving MTA compares this address with the Address field on
	each of its X.400 Connector Property pages, in order to find the connector
	responsible for this connection. If none of the connectors has this address, the
	MTA logs the first 9301 event.
	
	
	The MTA then attempts to resolve the IP address to a hostname. It first searches
	the local host's file. If Domain Name Service (DNS) is being used on this
	server, the MTA then queries DNS for the hostname. If this reverse lookup also
	fails, the second 9301 event is logged. The MTA cannot find the connector, and
	the connection attempt is terminated.
	
	To confirm that the reverse lookup of the address is the cause of the problem,
	use NSLOOKUP as follows:
	
	
	1. Convert the address from the Event 9301 to an IP Address string. In the
	  example, the address is 91F5C11B. Convert each pair of hexadecimal digits to
	  decimal: 91=145, 1F=245, 5C=193, 1B=27; that is, the IP Address is
	  145.245.193.27.
	
	2. From a command prompt on the server that logged the events, call NSLOOKUP:
	  >nslookup 145.245.193.27 If the FQDN of the remote MTA is not returned,
	  the local MTA also fails to resolve the address.
	
	
	WORKAROUND
	==========
	
	In an environment where DNS is used for name resolution, X.400 Connectors are
	configured with an FQDN rather than NetBIOS name or IP address. The MTA must
	therefore be able to make a successful DNS reverse lookup in order to find the
	correct X.400 Connector and accept the connection request.
	
	In order for the reverse lookup to be successful, the DNS server must have a PTR
	record for the remote server that maps its IP address to its FQDN.
	
	For example, in the events above, the IP address of the calling server is logged
	as 91F5C11B, which represents 145.245.193.27. The DNS server requires a PTR
	record in its in-addr.arpa domain, which maps the "reverse IP number" to the
	FQDN. In this example, the record would be something like:
	
	  27.193.245.145.in-addr.arpa   IN PTR  remotemta.org.com
	
	MORE INFORMATION
	================
	
	For additional information about other conditions where MTA Event ID 9301 may be
	encountered, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q197378 MTA Generates 9301 Events on Incoming Connections
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 kbfaq
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
