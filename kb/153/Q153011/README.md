---
layout: page
title: "Q153011: XFOR: How To Register an Internet Domain Name"
permalink: /kb/153/Q153011/
---

## Q153011: XFOR: How To Register an Internet Domain Name

{% raw %}

	Article: Q153011
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to connect a host to the Internet, you must register a domain name with
	the InterNIC. The InterNIC is responsible for registering top second level
	domains EDU, ORG, GOV, COM, and NET. This article outlines procedures and
	considerations for the registration process.
	
	MORE INFORMATION
	================
	
	InterNIC Registrations Services is provided by Network Solutions Inc. After
	choosing potential domain names, you can use the WHOIS program to verify that
	the domain is available. To use WHOIS, connect to http://www.internic.net/
	through a World Wide Web browser. For additional information about methods of
	verifying domain names, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q151710 Using WHOIS To Research Internet Domains
	
	After a domain name is selected, it should be entered into at least two domain
	name servers. The first two servers are known as the primary DNS and secondary
	DNS servers and are the authoritative servers for resolving hosts for the
	domain. Other hosts that wish to connect with the domain will query these
	servers to resolve a host name to an IP address. Any additional servers that
	contain domain information will act as backups. While the InterNIC requires
	existing domain servers to list the new domain before it becomes propagated to
	the Internet, it is possible to reserve a domain name first.
	
	After the DNS entries are performed, an application is submitted to the InterNIC
	along with payment for the registration. Currently, new registrations are $100
	for two years and renewals are $50 per year. Check with the InterNIC for current
	pricing.
	
	The easiest way to submit a registration application is through the World Wide
	Web using the InterNIC home page listed above. The following information is
	requested on the application:
	
	1. Requested domain name.
	
	2. Contact Names. These include administrative, technical, zone, and billing
	  contacts.
	
	3. Organization Details including name, address, and phone number.
	
	4. Primary and secondary DNS server names and host addresses.
	
	After you submit the application, the registration system will assign a tracking
	and invoice number. The status of the registration can be tracked via e-mail or
	the World Wide Web. Once the registration is complete, the domain name will be
	propagated to top level name servers and Internet hosts will be able to connect
	to machines on the new domain.
	
	Additional query words: smtp
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
