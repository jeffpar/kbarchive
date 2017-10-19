---
layout: page
title: "Q251124: XFOR: How to Configure Alias Table in Exchange Server"
permalink: /kb/251/Q251124/
---

## Q251124: XFOR: How to Configure Alias Table in Exchange Server

	Article: Q251124
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the difference in the way that Exchange Server and the
	UNIX Sendmail program route Internet e-mail mail messages, and provides steps to
	configure Exchange Server to use a connectivity structure that is similar to the
	alias tables that are offered by the UNIX Sendmail program. The steps in this
	article are not intended to replace common configuration concepts or guidelines,
	but to provide a workaround that implements a connectivity structure that is
	similar to alias tables.
	
	MORE INFORMATION
	================
	
	In UNIX, the e-mail server program Sendmail can route incoming e-mail to various
	Simple Mail Transfer Protocol (SMTP) hosts by looking up the recipient's e-mail
	address and sending the e-mail message to the route that is defined in the alias
	table by the system administrator. Alias tables can also change the intended
	recipient's e-mail address before the e-mail message is relayed.
	
	By default, the capability of Exchange Server to route e-mail messages by using
	e-mail addresses is limited, because Exchange Server can only route incoming
	e-mail by examining the recipient's domain name; it cannot route incoming e-mail
	by examining the entire e-mail address. Unless all of the servers are deployed
	in an Exchange Server-only topology with connectors, Exchange Server cannot
	leverage the message transfer agent to route e-mail messages by e-mail address.
	
	For example, if inbound e-mail messages are sent to someone1@microsoft.com and
	someone2@microsoft.com and these recipients are homed on different servers that
	have no knowledge of each other, the relaying Exchange Server computer that is
	the entry point for microsoft.com cannot route the e-mail messages to the
	appropriate mailbox servers. Instead, the relaying server routes the e-mail
	messages to only one mailbox server, because Exchange Server has only domain
	name-to-server mapping, and this example requires a route defined by user
	name-to-server mapping, which is a feature of alias tables.
	
	The following steps outline how to implement a connectivity structure that is
	similar to alias tables. After you perform these steps, Exchange Server can
	route e-mail by using the user name portion of e-mail addresses, and not just by
	using the domain name portion. The following procedure assumes that Exchange
	Server computers are the mailbox servers.
	
	To configure an Exchange Server computer to route e-mail messages to mailbox
	servers:
	
	1. Create custom recipients (CRs) on the server that correspond to mailbox
	  recipients on the mailbox servers. In the E-mail Addresses tab, make sure
	  that each CR has the following properties:
	
	   - An Internet-based address for directory lookup (for example,
	     someone5@microsoft.com). Set this address as the reply address.
	
	   - An internal routing address to use for mailbox server-to-routing server
	     relaying (for example, someone5@expedia3.microsoft.com).
	
	2. Click the General tab, and then modify the CRs domain-defined attribute (DDA)
	  by clicking "E-mail address". For the DDA address, type an internal routing
	  address to designate a mailbox server (for example,
	  someone5@expedia3.microsoft.com). After you perform these steps, Exchange
	  Server changes the recipient's e-mail address to this newly defined DDA
	  address before it sends a message, as the UNIX Sendmail program does.
	
	3. Click the Connections tab in the Internet Mail Service, and then click E-mail
	  Domains. Add each internal routing subdomain (for example,
	  expedia3.microsoft.com) along with the IP address or the fully qualified
	  domain name of the corresponding mailbox server.
	
	4. Click the Routing tab of the Internet Mail Service, and then click to select
	  the "Reroute Incoming SMTP mail" check box. To prevent unauthorized relaying,
	  specify only the mailbox servers by clicking Routing Restrictions.
	
	To configure each mailbox server to accept e-mail messages that are addressed to
	its internally routed recipients:
	
	1. Ensure that each mailbox recipient has at least the two following addresses:
	
	   - A reply address of the primary domain name (for example,
	     someonex@microsoft.com).
	
	   - A secondary proxy address that corresponds to the internal routing entry
	     (for example, someonex@expedia.microsoft.com).
	
	2. Click the Connections tab of the Internet Mail Service, click "Forward all
	  messages to the host", and then designate the routing Exchange Server
	  computer.
	
	If you want to use third-party messaging products instead of Exchange Server
	computers as the mailbox servers, make sure that the third-party messaging
	products are configured to send e-mail messages back to the routing Exchange
	Server computer, and to send outbound e-mail with a reply address that uses the
	original domain name (for example, someonex@microsoft.com). Make sure that you
	enable the RerouteViaStore registry on the routing Exchange Server computer, in
	case UNIX servers or POP clients cannot change the reply address and need to
	relay messages back to the routing Exchange Server computer for e-mail message
	delivery to the Internet. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q238471 XIMS: How to Force SMTP Messages Through the Information Store
	
	Additionally, you can use any domain name for internal routing, instead of the
	subdomain approach outlined in this procedure.
	
	Any changes to the configuration of the Internet Mail Service require that you
	stop and restart the service.
	
	Additional query words: "alias table" IMS
	
	======================================================================
	Keywords          : exc55 
	Component         : IMS
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
