---
layout: page
title: "Q307628: XFOR: Routing to Multiple Domains with a Single SMTP Proxy Addr"
permalink: /kb/307/Q307628/
---

## Q307628: XFOR: Routing to Multiple Domains with a Single SMTP Proxy Addr

{% raw %}

	Article: Q307628
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure the Internet Mail Service in Exchange
	Server 5.5 to reroute Simple Mail Transfer Protocol (SMTP) messages for multiple
	e-mail domains by using a single SMTP proxy address.
	
	MORE INFORMATION
	================
	
	The Exchange Server 5.5 Internet Mail Service can rewrite the SMTP headers of
	e-mail messages so that you can reroute an e-mail message that is sent to a
	recipient by using the e-mail address <user>@<domain>.com to another
	SMTP address <user>2@<domain>2.com without configuring this
	destination recipient with both SMTP proxy addresses. This article describes a
	method to accomplish this in which the mailbox in Exchange Server 5.5 only needs
	the primary SMTP address on the mailbox.
	
	For additional information about how to configure the Internet Mail Service in
	Exchange Server 5.5 to route SMTP messages for multiple domains by adding
	secondary SMTP proxy addresses to each mailbox, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q264557 XFOR: Configuring the Internet Mail Service to Route SMTP Messages
	  for Multiple Domains
	
	In Microsoft Exchange 2000 Server, the functionality to reroute SMTP messages for
	multiple e-mail domains by using a single SMTP proxy address (which this article
	describes) does not exist. In Exchange 2000, if you either use recipient
	policies or add one address at a time to the individual mailbox, you must still
	configure the user with all of the SMTP proxy addresses that you want the user
	to receive e-mail messages for.
	
	In Exchange Server 5.5, users on your Exchange Server 5.5 computer might have
	multiple SMTP e-mail addresses on the Internet; these users have only a single
	SMTP e-mail address defined on Exchange Server, but these users need to receive
	all of the e-mail that is sent to the users' alternate SMTP addresses on this
	same Exchange Server 5.5 computer. You can configure the Internet Mail Service
	to route SMTP mail for these multiple e-mail domains to a single e-mail domain.
	
	The mail exchange (MX) records for these other e-mail domains must first be set
	up to point to your server before you configure the Internet Mail Service.
	
	To configure the Internet Mail Service on Exchange Server 5.5 to reroute e-mail
	messages for multiple e-mail domains to a single e-mail domain, use the
	configuration in the following example.
	
	In this example, the Exchange Server organization is adatum.com, and the only
	SMTP e-mail address that is defined for a user in this organization is
	administrator@adatum.com. However, this user has other valid e-mail addresses on
	the Internet that are not defined in Exchange Server: administrator@cpandl.net,
	administrator@cpandl.org, and administrator@internal.adatum.com.
	
	To reroute all of the messages that are sent to any of these e-mail addresses to
	the administrator@adatum.com address without defining additional SMTP addresses
	for the administrator on the administrator's mailbox, in the Internet Mail
	Service Configuration properties, click the Routing tab, and then configure
	rerouting as follows.
	
	+----------------------------------+
	| Sent to             | Route to   | 
	+----------------------------------+
	| adatum.com          | inbound    | 
	+----------------------------------+
	| cpandl.net          | adatum.com | 
	+----------------------------------+
	| cpandl.org          | adatum.com | 
	+----------------------------------+
	| internal.adatum.com | adatum.com | 
	+----------------------------------+
	
	After you change the configuration, send a test message to
	administrator@cpandl.net. This message is rerouted to administrator@adatum.com.
	Send another test message for both administrator@cpandl.org and
	administrator@internal.adatum.com; the message is also rerouted to
	adminstrator@adatum.com.
	
	NOTE: You can also use this configuration for communication between Exchange
	Server sites by means of the Internet Mail Service and between Exchange Server
	organizations by means of the Internet Mail Service.
	
	A limitation of this procedure (and also of the procedure that is described in
	Microsoft Knowledge Base article Q264557) is that there can be only one reply
	address. When a user replies to a message that was sent to any of the users'
	e-mail addresses that are configured in the Internet Mail Service, if the
	address is not the primary SMTP address, the reply address is still be placed in
	the outgoing mail, not the secondary address that is configured in the Internet
	Mail Service.
	
	The method that this article describes to reroute SMTP messages for multiple
	e-mail domains by using a single SMTP proxy address is quite different from
	routing mail messages on Exchange Server based on e-mail addresses. For
	additional information about routing mail messages on Exchange Server based on
	e-mail addresses in Exchange Server 5.5, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q251124 XFOR: How to Configure Alias Table Functionality in Exchange Server
	
	
	Additional query words: Alias Table SMTP IMS intersite
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
