---
layout: page
title: "Q197869: XCLN: Routing Restrictions Require SMTP Authentication"
permalink: kb/197/Q197869/
---

## Q197869: XCLN: Routing Restrictions Require SMTP Authentication

	Article: Q197869
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,4.01; winnt:5.5; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Express versions 4.0, 4.01 for Windows 95 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Outlook user tries to send an SMTP message to a recipient outside of his
	or her organization, he or she may receive one of the following error messages:
	
	  Relaying Prohibited
	
	  - or -
	
	  No transport provider was available for delivery to this recipient.
	
	The sender can receive this message either in a non-delivery report (NDR) or in
	dialog box stating that "Relaying is Prohibited." The error or NDR notification
	are dependant on which e-mail program the sender is running.
	
	CAUSE
	=====
	
	Service Pack 1 for Exchange Server 5.5 includes functionality to stop the
	relaying of spam SMTP messages through a site. The Internet Mail Service can be
	set to enable the Reroute Incoming SMTP Mail option, and can have the Routing
	Restrictions specified as Hosts and Clients that successfully authenticate. In
	this case, the Internet Mail Service will be able to route mail, then the
	Outlook client MUST authenticate before outbound mail will be sent. Without the
	client sending either the proper POP3 or IMAP4 authentication commands, the
	Internet Mail Service will deny delivery in accordance with the Routing
	Restrictions settings.
	
	RESOLUTION
	==========
	
	To enable client authentication on:
	
	Outlook 97
	----------
	
	Outlook 97 uses a POP3 service account, and does not have the ability to
	designate a separate Inbound and Outbound mail server for receipt and delivery
	of messages. In this case, all that is required for authentication is a valid
	account name which can be found in the Mailbox Information section of the
	Internet Mail Service for a users' specific profile.
	
	NOTE: Adding the Internet mail enhancement patch for Outlook 97 allows secure
	password authentication. The filename is Outlimep.exe; file size is 491 KB, and
	it is available at:
	
	  http://office.microsoft.com/Downloads/
	
	Outlook 98
	----------
	
	1. From Control Panel, double-click Mail, or Mail and Fax.
	
	2. Select the appropriate Profile, and click on Properties.
	
	3. Select the Internet Mail Service, and click on Properties.
	
	4. Within the Servers tab at the bottom of the dialog box, select the My Server
	  Requires Authentication check box. By clicking on the Settings button, you
	  will be able to:
	
	  a. Select whether you want to use the same credentials you used when logging
	     onto Exchange Server, and
	
	     1. Add a different set of credentials.
	
	        -or-
	
	     2. Use SPA (Secure Password Authentication).
	
	Outlook Express
	---------------
	
	1. Start Outlook Express.
	
	2. On the Tools menu, click Account, and select the Mail tab.
	
	3. Select the profile that you wish to change, and click Properties.
	
	4. Within the Servers tab at the bottom of the dialog box, select the My Server
	  Requires Authentication check box. By clicking on the Settings button you
	  will be able to:
	
	  a. Select whether you want to use the same credentials you used when logging
	     onto Exchange Server, and
	
	     1. Add a different set of credentials.
	
	        -or-
	
	     2. Use SPA (Secure Password Authentication).
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q175440 XFOR: Protocol Authentication on Exchange Server
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbOutlook97 kbZNotKeyword2 kbOutlookExpressSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlookExpress95Search kbOutlook801 kbOutlook802 kbOutlook803 kbOutlookExpress401Win95 kbOutlookExpress400Win95
	Version           : WINDOWS:4.0,4.01; winnt:5.5; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
