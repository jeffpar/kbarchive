---
layout: page
title: "Q237327: XIMS: STARTTLS Advertised Even If SSL Certificate Not Available"
permalink: kb/237/Q237327/
---

## Q237327: XIMS: STARTTLS Advertised Even If SSL Certificate Not Available

	Article: Q237327
	Product(s): Microsoft Exchange
	Version(s): 2.0,4.0,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	- Microsoft Commercial Internet System version 2.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When responding to an EHLO command, the Simple Mail Transfer Protocol (SMTP)
	service included with the Microsoft products listed at the beginning of this
	article always indicates that it supports the STARTTLS command, even if no
	Secure Sockets Layer (SSL) certificates are available for the connection. If an
	SMTP client sends a STARTTLS command to the server when no SSL certificates are
	available, the following entry appears in the SMTP log file (Smtp.log):
	
	  554 Unable to initialize security subsystem
	
	If the SMTP client is connected to the server through a firewall, the firewall
	may respond to the STARTTLS command itself, instead of passing the command to
	the server. This causes the client to use encryption, even though the server is
	not configured to support it. As a result, the client is unable to send messages
	across the connection. This behavior is known to occur with the Cisco PIX
	Firewall and Secure Computing Sidewinder Security Server firewall, but it may
	also occur with other firewalls.
	
	RESOLUTION
	==========
	
	Exchange Server 5.5
	-------------------
	
	Exchange Server Computer Is Not Operating Behind a Proxy Server:
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	Exchange Server Computer Is Operating Behind a Proxy Server:
	
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Exchange Server Computer Is Not Operating Behind a Proxy Server:
	
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	Exchange Server Computer Is Operating Behind a Proxy Server:
	
	This problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	Certificates are configured using the Internet Information Service (IIS) Key
	Manager program. In IIS, certificates can be applied to all Internet Protocol
	(IP) addresses, one particular IP address, or no IP addresses. In Microsoft
	Commercial Internet System (MCIS), certificates can be bound to one particular
	IP address or all unassigned IP addresses. In MCIS, certificates can also be
	bound to one particular Transmission Control Protocol (TCP) port or all
	unassigned TCP ports. The SMTP service indicates that it supports TLS even if
	the IP address and TCP port you are connected to do not have an associated
	certificate.
	
	After you apply the fix, the SMTP service only indicates that it supports TLS if
	the IP address and TCP port you are connected to has an associated certificate.
	
	For additional information about configuring Exchange Server to operate behind
	Proxy Server 2.0, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q181847 XADM: How to Configure Microsoft Exchange Server with Proxy Server
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbiisSearch kbAudDeveloper kbExchangeSearch kbiis400 kbZNotKeyword2 kbMCISSearch kbMCIS200 kbExchange550SP2
	Version           : :2.0,4.0,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
