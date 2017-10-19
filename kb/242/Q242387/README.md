---
layout: page
title: "Q242387: XFOR: Postmaster Addresses When Hosting Multiple Domains"
permalink: /kb/242/Q242387/
---

## Q242387: XFOR: Postmaster Addresses When Hosting Multiple Domains

	Article: Q242387
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the Microsoft Exchange Server Internet Mail Connector (Exchange
	Server 4.0) or Internet Mail Service (Exchange Server 5.0 and 5.5) route mail
	addressed to the postmaster account of the default site SMTP domain. The site
	SMTP domain is specified on the Site Addressing tab of the site Addressing
	object. This mail is routed to the account set as the administrator of the
	Internet Mail Service or Internet Mail Connector. This is set on the Internet
	Mail tab of the Internet Mail Service or Internet Mail Connector object.
	
	On Exchange Server computers hosting multiple SMTP domains, this postmaster
	address does not work for all of them. In order to accept mail for the
	postmaster account of the other hosted SMTP domains, the SMTP address needs to
	be added as a secondary address for a recipient on the Exchange Server
	computer.
	
	Before adding the postmaster address to one of your users, you need to determine
	which user should receive this mail. The postmaster address is generally used to
	report problems with Internet mail, be it a report about a spam source from that
	domain, or a request for help dealing with a non-delivery report (NDR) to that
	domain.
	
	MORE INFORMATION
	================
	
	To add a secondary SMTP address to a user:
	
	1. Start the Exchange Server Administrator program.
	
	2. Select the Global Address List container.
	
	3. Open the properties of the mailbox to which you want to add an SMTP address.
	
	4. On the E-Mail Address tab, click New, click Internet Address, and then click
	  OK.
	
	5. Add the postmaster address for the domain you want, and click OK.
	
	6. Click OK to close the mailbox properties.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
