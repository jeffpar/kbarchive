---
layout: page
title: "Q249100: XFOR: Configuring Internet Mail Service for Mail w. No DNS Entry"
permalink: /kb/249/Q249100/
---

## Q249100: XFOR: Configuring Internet Mail Service for Mail w. No DNS Entry

	Article: Q249100
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Normally, a mail exchanger (MX) record is used in a Domain Name System (DNS) to
	allow other Simple Mail Transfer Protocol (SMTP) senders to locate the Internet
	Mail Service for incoming e-mail. If you cannot create an MX record, you can
	accept e-mail as either <user>@<server>.<domain>.com or
	<user>@<IPaddress>, in accordance with the IPv4 literals
	requirements of Request for Comments (RFC) 821. This article explains how to
	accept e-mail as either <user>@<server>.<domain>.com or
	<user>@<IPaddress>.
	
	MORE INFORMATION
	================
	
	The following are the requirements to accept e-mail as
	<user>@<server>.<domain>.com or
	<user>@<IPaddress>, as applicable:
	
	- To accept mail as <user>@<server>.<domain>.com, you need an
	  address record, also known as an A record, for the server in the DNS.
	
	- To accept mail as <user>@<IPaddress>, you need a computer running
	  Exchange Server 5.5 and a static IP address for the Exchange Server computer.
	
	Set up the Internet Mail Service to accept connections for the appropriate IP or
	DNS record:
	
	1. In the Exchange Server Administrator program, click the site Configuration
	  container, and then click Connections.
	
	2. Click the Internet Mail Service for the server and open the Internet Mail
	  Service properties.
	
	3. Click the Routing tab.
	
	4. Make sure that "Reroute incoming SMTP mail" is selected.
	
	5. Add an entry for either <server>.<domain>.com or for the IP
	  address, and then click to select the Should accept as inbound check box.
	
	6. Click OK to close the Internet Mail Service properties.
	
	Set up users with e-mail addresses of <user>@<IPaddress> or
	<user>@<hostname>:
	
	1. In the Exchange Server Administrator program, click the site Configuration
	  container, and then click Site Addressing.
	
	2. Open the Site Addressing property page and click the Site Addressing tab.
	
	3. Change the default SMTP address to <servername>.<domain>.com or
	  the IP address.
	  This changes the SMTP addresses of all of the users. To set up multiple proxy
	  addresses for all of the users, you need to either edit user addresses
	  individually, or use an import file format that adds an SMTP secondary proxy
	  address.
	
	For additional information about this import file format, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q155594 XADM: Generic Import Format to Add SMTP Secondary Proxy Address
	
	4. Click OK to close the Site Addressing property page.
	
	IMPORTANT: You may not be able to deliver mail to some servers without a DNS
	entry for your server. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q198981 XFOR: SMTP Messages Not Being Delivered to Certain Domains
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
