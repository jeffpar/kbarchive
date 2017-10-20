---
layout: page
title: "Q259531: XFOR: How to Configure SMTP Relay for Domains and Subdomains"
permalink: /kb/259/Q259531/
---

## Q259531: XFOR: How to Configure SMTP Relay for Domains and Subdomains

{% raw %}

	Article: Q259531
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv exc55
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use Internet Mail Service to relay mail for multiple Simple Mail
	Transfer Protocol (SMTP) domains and their associated subdomains to a specific
	smart host.
	
	This option is made easier by the default routing property of Internet Mail
	Service to accept all mail for a domain unless the domain is explicitly
	designated by using a number sign (#) before the main domain. For example, an
	inbound domain of #microsoft.com only accepts mail for the microsoft.com domain,
	whereas microsoft.com accepts mail for all domains in the namespace of
	microsoft.com.
	
	MORE INFORMATION
	================
	
	To configure SMTP relay for domains and subdomains, use the following steps:
	
	1. Open Internet Mail Service properties.
	
	2. On the Connection tab, click E-Mail Domain, and then click Add.
	
	3. In the E-mail Domain field, type the namespace for the domain to be relayed.
	
	  NOTE: By default, all subdomains are also relayed.
	
	4. Click "Forward all messages for this domain to host", type the fully
	  qualified domain name (FQDN) or the Internet Protocol (IP) address of the
	  target host, and then click OK.
	
	5. On the Routing tab, click "Reroute incoming SMTP mail", and then click Add.
	
	6. In the "E-Mail sent to this domain" field, type the namespace for the domain
	  that needs to be relayed.
	
	7. Click "Override relay restrictions. Always relay.", and then click OK.
	
	8. Restart Internet Mail Service when you are prompted to do so.
	
	Additional query words: XMRP sub-domain sub-domains subdomain ims
	
	======================================================================
	Keywords          : kbenv exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
