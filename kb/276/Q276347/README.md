---
layout: page
title: "Q276347: XFOR: Messages Moved to the Badmail Folder with SMTP Service"
permalink: /kb/276/Q276347/
---

## Q276347: XFOR: Messages Moved to the Badmail Folder with SMTP Service

{% raw %}

	Article: Q276347
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Simple Mail Transfer Protocol (SMTP) virtual server is configured to
	forward messages to a specific mail host, messages that are queued for outbound
	mail delivery are sent immediately to the Badmail folder. Because the SMTP
	service cannot deliver to the message originators, non-delivery reports (NDRs)
	are also sent to the Badmail folder.
	
	CAUSE
	=====
	
	This problem can occur if the DNS server that you have configured under
	Transmission Control Protocol and Internet Protocol (TCP/IP) properties does not
	support TCP queries.
	
	RESOLUTION
	==========
	
	To problem this behavior, use the appropriate method in this section.
	
	Resolution for Internet Information Service (IIS) 5.0
	-----------------------------------------------------
	
	1. Start the Internet Services Manager.
	
	2. Right-click the server that has the SMTP virtual server configured, and then
	  click Properties.
	
	3. Click the Delivery tab, and then click Advanced.
	
	4. In the smart host entry, make sure that you are not using the fully qualified
	  domain name (FQDN) of the remote SMTP server.
	
	  The FQDN should not be used if the queried DNS server does not support TCP
	  queries. Instead, type an Internet protocol (IP) address surrounded by
	  brackets, for example:
	
	  [192.168.2.25]
	
	  The brackets cause messages to be forwarded directly to the IP address and
	  prevent a reverse DNS lookup from being performed.
	
	5. Click OK, click OK, and then restart the SMTP virtual server.
	
	Resolution for Internet Information Server (IIS) 4.0
	----------------------------------------------------
	
	1. Start the Internet Services Manager.
	
	2. Click the server that has the SMTP site configured, and then click
	  Properties.
	
	  NOTE: This server is the same as the SMTP virtual server.
	
	3. Click the Delivery tab.
	
	4. In the smart host entry, make sure that you are not using the FQDN of the
	  remote SMTP server.
	
	  The FQDN should not be used if the queried DNS server does not support TCP
	  queries. Instead, type an IP address surrounded by brackets.
	
	5. Click OK, and then restart the SMTP site.
	
	Alternatively, you can change the currently configured DNS server to one that
	responds to TCP queries.
	
	1. In the TCP/IP settings of network properties, click the properties of the
	  local area connection that you are using.
	
	2. Click Internet Protocol (TCP/IP), and then click Properties.
	
	3. Add a preferred DNS server that responds to TCP queries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Most programs use User Datagram Protocol (UDP) queries to resolve host names.
	When the contents of the query are larger than the maximum packet size, the
	program must use TCP.
	
	The SMTP service is unique because the SMTP service uses TCP queries by default.
	If the DNS server does not support TCP queries, the query attempt resets.
	Therefore, the lookup for mail delivery does not respond and the messages are
	sent to the Badmail folder.
	
	Request for Comments (RFC) 883 and the later RFCs recommned that DNS servers
	should be able to accept both TCP virtual circuits and UDP.
	
	Additional query words: NDR badmail smtp iis mailhost
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
