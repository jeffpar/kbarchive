---
layout: page
title: "Q273913: XCLN: Maintaining Calendar Functionality for IMAP4/POP3 Clients"
permalink: kb/273/Q273913/
---

## Q273913: XCLN: Maintaining Calendar Functionality for IMAP4/POP3 Clients

	Article: Q273913
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Post Office Protocol 3 (POP3) and
	Internet Message Access Protocol 4 (IMAP4) client computers to connect to an
	Outlook Web Access server so that they have calendar functionality.
	
	MORE INFORMATION
	================
	
	When you connect to Exchange Server 5.5 by using either a POP3 or IMAP4 client
	computer, calendar-related messages, for example, meeting requests or
	cancellation messages, are displayed in plain text and may not be added to your
	calendar automatically.
	
	You can configure Exchange Server to provide a URL to an Outlook Web Access (OWA)
	server that you can use to view a text version of calendar-related mail. This
	URL references an OWA server and the same calendar-related message that was
	received. When you access this URL by using a POP3 or IMAP4 client, your browser
	starts and you are connected to the OWA server. An HTML version of the same
	calendar-related message and an HTML version of the user's calendar (from
	Exchange Server) is then displayed. This process provides calendar functionality
	to POP3 and IMAP4 clients.
	
	NOTE: Before you configure this feature, you must configure the POP3 or IMAP4
	connection first. You must also have access to an OWA server that is able to
	access your mailbox.
	
	To configure Exchange Server to provide a URL to an Outlook Web Access (OWA)
	server:
	
	1. Start the Microsoft Exchange Server Administrator program, right-click the
	  site level Protocols container, and then click Properties.
	
	2. Click the General tab, and type the name of your OWA sever.
	
	NOTE: Type "<servername>" (without the quotation marks), not
	"http://<servername>/<exchange>." (without the quotation marks)
	If you need to change this setting after you have entered it, restart all
	Exchange Server services, so that the setting can be updated faster. Also, if
	any POP3 or IMAP4 users are logged on while you are configuring this property,
	they must log off and the log on again after the change is made.
	
	NOTE: If the OWA server is accessible on the Internet, the <servername> may
	be entered as the fully qualified domain name (FQDN) of the server, for example,
	www.<webservername>.com.
	
	When you set this property at the site level, it affects all users in the site.
	If you do not want all users to be affected,, you can set this property for
	individual recipients. To do this, right-click the user, click Properties, and
	then click the Advanced tab.
	
	When you have completed this procedure, when you send any meeting-related
	messages or custom forms, a URL to the OWA server is included in the message.
	
	Additional query words: web forms
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
