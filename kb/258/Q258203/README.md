---
layout: page
title: "Q258203: XFOR: How to Configure Exchange to Share SMTP Domain Name Space"
permalink: /kb/258/Q258203/
---

## Q258203: XFOR: How to Configure Exchange to Share SMTP Domain Name Space

{% raw %}

	Article: Q258203
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Exchange Server 5.5 to share Simple Mail
	Transfer Protocol (SMTP) domain name space.
	
	MORE INFORMATION
	================
	
	Exchange Server 5.5 can be configured to share SMTP domain name space by
	configuring the Internet Mail Service E-mail Domain option. When you set this
	option, organizations with disparate mail handling systems are able to use a
	single SMTP domain. With this method, organizations are limited to sharing the
	name space with a single mail server. A SMTP custom recipient must be configured
	for every recipient in a different mail system.
	
	When mail is received by the Internet Mail Service, the service queries the
	Exchange Server 5.5 directory for the target recipient. When the target
	recipient is not local to the Exchange-based server, messages are rerouted to
	the mail server that is specified in the Internet Mail Service E-mail Domain
	option.
	
	If a custom recipient for the remote user does not exist, the message is returned
	as non-deliverable.
	
	In cases where Exchange Server synchronizes directories with a foreign mail
	system, you must remove the SMTP proxy address from the custom recipient that is
	associated with the foreign system address type, for example, Lotus Notes.
	
	To configure the E-mail Domain option, follow these steps:
	
	1. Make an SMTP custom recipient for the user in the other mail system.
	
	2. Double-click the Internet Mail Service, and then click the Connections tab.
	
	3. Click E-mail Domain and click Add.
	
	4. Type the shared SMTP domain name in the E-mail Domain box.
	
	5. Click the Forward all messages for this domain to host check box and type the
	  Fully Qualified Domain Name (FQDN) or Internet Protocol (IP) address of the
	  SMTP mailer for the other system.
	
	6. On the Routing tab, click Add, on "E-mail sent to this domain:", add the new
	  shared domain name, click to select "Should be accecpted as inbound", and
	  then click OK. The new domain name should allow the IMS to accept mail.
	
	7. Restart the Internet Mail Service.
	
	
	Additional query words: ims share domain namespace shared
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
