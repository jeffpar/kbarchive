---
layout: page
title: "Q146165: XFOR: No Error When IMC Starts and Configured for DNS"
permalink: /kb/146/Q146165/
---

## Q146165: XFOR: No Error When IMC Starts and Configured for DNS

{% raw %}

	Article: Q146165
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Internet Mail Connector (IMC) is configured to use a Domain Name Service
	(DNS) and there is no resolver, the IMC starts without logging an error in the
	event log.
	
	RESOLUTION
	==========
	
	If the DNS is not available, there are other ways to resolve the address:
	
	- The Internet Mail Connector will use the DNS.
	
	- If there is no DNS, the Internet Mail Connector will read the local Hosts
	  file.
	
	- If the local Hosts file does not contain the address, the Internet Mail
	  Connector uses the WINS service to resolve the address. If WINS doesn't
	  return an answer to the query, a non-delivery report (NDR) will be sent back
	  to the sender of the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	DNS is the method by which an e-mail address is resolved to the TCP/IP address
	of a host that can relay the message to the correct user.
	
	REFERENCES
	==========
	
	Refer to the "Delivering Messages Using DNS" procedure in Chapter 11 of the
	Microsoft Exchange "Administrator's Guide."
	
	1. On the Site menu, click Configuration. Click Connections, then open the
	  Internet Mail Connector.
	
	2. Select the Connections tab.
	
	3. Under Message Delivery, select "Use DNS to route all outbound messages using
	  domain name service queries." This also includes queries using a hosts file
	  or WINS.
	
	  The hosts file is located in the Winnt\System32\Drivers\Etc directory.
	
	Additional query words: resolve
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
