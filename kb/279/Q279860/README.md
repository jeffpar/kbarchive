---
layout: page
title: "Q279860: XFOR: How to Stop IMS from Relaying Junk E-mail"
permalink: /kb/279/Q279860/
---

## Q279860: XFOR: How to Stop IMS from Relaying Junk E-mail

{% raw %}

	Article: Q279860
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure the Microsoft Exchange Server Internet
	Mail Service to stop relaying junk e-mail (spam). This procedure does not
	prevent Post Office Protocol version 3 (POP3) clients and Internet Message
	Access Protocol 4 (IMAP4) clients from sending SMTP messages.
	
	MORE INFORMATION
	================
	
	To configure the Microsoft Exchange Server Internet Mail Service to stop
	relaying unwanted mail, follow the instructions in the following Microsoft
	Knowledge Base article:
	
	  Q196626 XFOR: Restricting Routing in the Internet Mail Service
	
	This article describes how to enable specific Internet Protocol (IP) addresses or
	users to relay SMTP messages by using the Routing Restrictions tab. When you
	follow the procedure in this article, you may inadvertently configure the
	Internet Mail Service so that POP3 and IMAP4 users are prevented from sending
	messages to the Internet.
	
	If all POP3 and IMAP4 users connect from the same IP addresses or IP subnets,
	click to select the "Hosts and clients with these IP addresses" check box on the
	Routing Restrictions tab. If you add the respective IP addresses or subnets, the
	clients are able to send Internet messages.
	
	If you click to select the "Hosts and clients that authenticate" check box, you
	must configure clients that connect to this service to send Internet messages.
	Each client profile must be set up to log on to the outgoing mail server.
	
	To enable outgoing server authentication in Microsoft Outlook Express, follow
	these steps:
	
	1. Open the properties of the default Internet account, and then click the
	  Servers tab.
	
	2. In the Incoming Mail Server box, verify that the user account information is
	  in this format: <domain>\<accountname>. This information should
	  be followed by the domain account password.
	
	3. In the Outgoing Mail Server box, click to select the "My server requires
	  authentication" check box, and then click the Settings button.
	
	4. Click either the "Use same settings as my incoming mail server" check box, or
	  specify an additional account and password to use that is different from the
	  incoming mail server's account and password.
	
	5. Click OK to save the settings.
	
	POP3 and IMAP4 users are now able to send Internet messages, and the security
	settings to prevent junk e-mail remain intact.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q193922 XFOR: Preventing the Internet Mail Service From Relaying Unsolicited
	  Commercial E-Mail Messages
	
	  Q255695 XCON: Do Not Reroute Incoming SMTP Mail Option Still Allows Relay as
	  a Non-Delivery Report
	
	Additional query words: IMS spam
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
