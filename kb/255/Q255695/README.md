---
layout: page
title: "Q255695: XCON: Do Not Reroute Incoming SMTP Mail Allows Relay as NDR"
permalink: kb/255/Q255695/
---

## Q255695: XCON: Do Not Reroute Incoming SMTP Mail Allows Relay as NDR

	Article: Q255695
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2 exc55sp3
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Exchange Server 5.5 Service Pack 1 and later, routing restrictions are added
	to the Internet Mail Service to provide extra security. The Routing tab of the
	Internet Mail Service contains the two following options to route mail:
	
	- "Reroute incoming SMTP mail (Required for POP3/IMAP4 Support)"
	
	- "Do not reroute incoming SMTP mail"
	
	If you select the "Do not reroute incoming SMTP mail" option, you disable the
	ability to reroute mail for Post Office Protocol version 3 (POP3) and Internet
	Message Access Protocol Version 4rev1 (IMAP4) support, but you do not stop
	intruders who litter large numbers of e-mail boxes with unwanted messages (spam
	e-mail) or cause heavy processing time on your server.
	
	MORE INFORMATION
	================
	
	When the "Do not reroute incoming SMTP mail" option is set, intruders can relay
	a message off your Internet Mail Service, because the Internet Mail Service
	processes the entire message. The message is sent to the recipient that is
	addressed in the MAIL FROM field. This allows intruders to cause heavy
	processing time on your server with spam e-mail, and to actually deliver
	messages in the non-delivery report (NDR) format to the intended recipient.
	
	To stop intruders from spamming and relaying off your server, select the "Reroute
	incoming SMTP mail (Required for POP3/IMAP4 Support)" option. On the Routing
	tab, set routing restrictions; click to select the "Hosts and clients that
	successfully authenticate" check box. You need to restart the Internet Mail
	Service for this change to take effect.
	
	This stops all intruders from relaying and spamming messages from your server,
	which uses processing time on your server. With this setting enabled, intruders
	receive a "relaying is prohibited" response if the RCPT TO field is addressed to
	an outside recipient.
	
	NOTE: After you install Service Pack 1, routing restriction settings are
	activated through the registry. For additional information about the settings
	for these registry entries, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q193922 XFOR: Preventing the Internet Mail Service From Relaying Unsolicited
	  Commercial E-Mail Messages
	
	In Exchange Server 5.5 Service Pack 2 and later, routing restriction settings are
	built into the connector, on the Routing tab of the Internet Mail Service.
	
	There is often confusion about the differences between routing and relaying:
	
	- Routing. Routing mail is the equivalent of delivering a message to recipients
	  that exist in the local directory. With routing restrictions enabled, all
	  messages are still "routed." Mail is delivered to users that exist in the
	  directory from any sender.
	
	- Relaying. Relaying mail is bouncing a message to any particular recipient
	  that does not exist locally on that server. If a message is relayed, the
	  server delivers that message to the recipient if the user is not in the local
	  directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
