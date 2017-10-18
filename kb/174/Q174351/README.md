---
layout: page
title: "Q174351: XFOR: How to Configure Exchange with Secondary SMTP Addresses"
permalink: kb/174/Q174351/
---

## Q174351: XFOR: How to Configure Exchange with Secondary SMTP Addresses

	Article: Q174351
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the steps to create a secondary SMTP address space so
	Exchange Server mailboxes can receive mail addressed to multiple domains.
	Outside users can send mail to more than the default domain. For example, the
	same Exchange Server mailbox can receive mail addressed as username@company.com
	and as username@domain2.com.
	
	MORE INFORMATION
	================
	
	Before proceeding with the Exchange Server configuration, add a new MX record to
	reflect the additional domain name. This new MX record should be added in the
	Domain Name Service (DNS) provider, which might be part of the Internet Service
	Provider (ISP).
	
	For additional information and the syntax of the MX record, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q153001 : XFOR: DNS MX Records and CNAMEs
	
	The correct addition of this MX record can be verified by performing a Name
	Service Lookup, using the new domain name.
	
	To configure the Exchange Server computer, complete the following steps.
	
	NOTE: If you are configuring an Exchange Server 4.0 computer, skip step 1 and
	continue to step 2.
	
	1. Open the properties for the Internet Mail Service from the Exchange Server
	  Administrator program. On the Routing tab, if the Internet Mail Service is
	  configured to reroute SMTP, click Add, enter the secondary Domain, and
	  specify as Incoming.
	
	  For example, if your domain name is company.com and you wish to add a second
	  domain name of domain2.com, you need to click the Reroute SMTP mail (required
	  for POP3 support) radio button on the Routing tab. These two entries will
	  then be in the routing table:
	
	  company.com <Inbound>
	
	  domain2.com <Inbound>
	
	2. Add the secondary SMTP address space for all users on the list. This can be
	  done individually by going to the properties of each mailbox. In the Exchange
	  Server Administrator program under Organization\Site\Recipients, select a
	  mailbox and double-click to open the Properties page. Click the Email Address
	  tab, click New, select Internet Address, and then click OK. Enter the
	  username@domain2.com as the e-mail address. For additional information about
	  bulk modifications, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q155594 : XADM: Generic Import Format to Add SMTP Secondary Proxy Address
	
	3. Restart the Internet Mail Service by double-clicking the Services icon in
	  Control Panel.
	
	Additional query words: smtp ims imc secondary exfaqcon
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
