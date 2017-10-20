---
layout: page
title: "Q263199: XIMS: Receiving Internet Mail as user@department.company.com"
permalink: /kb/263/Q263199/
---

## Q263199: XIMS: Receiving Internet Mail as user@department.company.com

{% raw %}

	Article: Q263199
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server administrators may want to divide an organization into
	departments for Internet mail, and Exchange Server users may want to receive
	mail as <user_name>@<department>.<company>.com. An example of
	this type of Internet address is user1@example.microsoft.com. This article
	describes how to divide an organization into departments for Internet mail.
	
	MORE INFORMATION
	================
	
	To divide an organization into departments for Internet mail:
	
	1. Confirm that all users are receiving e-mail messages in the
	  <user_name>@<company>.com format. This will confirm that the A
	  record and Mail Exchanger (MX) records are properly configured on the Domain
	  Name System (DNS), which can be local or in the site of the Internet service
	  provider (ISP).
	
	For additional information the A and MX records, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q153001 XFOR: DNS MX Records and CNAMEs
	
	2. In the Exchange Server Administrator program, click Configuration, click
	  Connections, and then double-click Internet Mail Service.
	
	3. Click the Routing tab, and then click "Reroute incoming SMTP mail". Click
	  Add, type the new domain name (<department>.<company>.com) and
	  leave the other settings at the default settings. This record looks like the
	  other exiting records (for example, example.microsoft.com).
	
	For additional information about adding a routing domain name, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q174351 XFOR: How to Configure Exchange with Secondary SMTP Addresses
	
	4. Add an MX record on the DNS with the new domain name
	  (<department>.<company>.com). For additional information about
	  the extra A and MX records, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q196927 XIMS: How to Configure a Single Domain with Connected Sites via IMS
	
	  Confirm that the A and MX records are correct by running the NSLookup utility.
	  Let the DNS replicate with other DNS servers on the Internet. This can take
	  from 24 to 48 hours.
	
	5. For every mailbox, add a secondary Simple Mail Transfer Protocol (SMTP)
	  address space with the e-mail address of
	  <user_name>@<department>.<company>.com. In the
	  Administrator program, double-click the mailbox to open the mailbox
	  properties. Click the E-mail Address tab, click New, click Internet Address,
	  and then click OK. Type
	  "<user_name>@<department>.<company>.com" (without the
	  quotation marks) as the e-mail address.
	
	For additional information about how to automate this process for several users,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q155594 XADM: Generic Import Format to Add SMTP Secondary Proxy Address
	
	6. After the DNS replication (24 to 48 hours), test to make sure that the
	  configuration is correct by sending a message to the new SMTP address
	  (<user_name>@<department>.<company>.com), and confirm that
	  the user receives the message.
	
	Additional query words: A- MX- Record DNS
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
