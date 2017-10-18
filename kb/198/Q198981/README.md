---
layout: page
title: "Q198981: XIMS: SMTP Messages Not Being Delivered to Certain Domains"
permalink: kb/198/Q198981/
---

## Q198981: XIMS: SMTP Messages Not Being Delivered to Certain Domains

	Article: Q198981
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Simple Mail Transfer Protocol (SMTP) messages stay in the Outgoing Messages
	Awaiting delivery queue until they receive a non-delivery report (NDR) for
	certain domains.
	
	CAUSE
	=====
	
	The site which the message is destined for is possibly using reverse zone
	lookups for security purposes. The Fully Qualified Domain Name (FQDN) of the
	Exchange Server computer does not match its InterNic-registered IP address;
	hence, the telnet session to the destination mail server is refused.
	
	RESOLUTION
	==========
	
	Certain mail servers require specific additional Domain Name Service (DNS)
	records before allowing mail transfer. A Reverse Zone record needs to be created
	on the DNS server responsible for the source mail server's e-mail domain.
	
	MORE INFORMATION
	================
	
	You may see the following errors in the SMTP log on your server.
	
	  
	
	  "IO: |451 <name@domain.com>... Sender domain must resolve"
	
	  "IO: |421 SERVICE NOT AVAILABLE, TEMPORARY DNS FAILURE"
	
	Many organizations do not host their own DNS server(s). If your DNS is being
	hosted by another organization (i.e. ISP), please contact that organization to
	verify DNS configuration.
	
	You can look up the reverse routing for your domain on the following link (first
	find out the IP address for the Exchange Server computer):
	
	  http://network-tools.com/
	
	Type the IP address in the text box, and then click the DNS Records option. This
	gives the result for the reverse lookup.
	
	Additional query words: NSLOOKUP DNS LOOKUP
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400Search kbExchangeSearch kbExchange550 kbZNotKeyword2 kbGraph500 kbWinNT400OptionPack
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
