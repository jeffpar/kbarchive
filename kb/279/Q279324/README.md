---
layout: page
title: "Q279324: XFOR: How to Prevent  Domains from Receiving an SMTP Message"
permalink: /kb/279/Q279324/
---

## Q279324: XFOR: How to Prevent  Domains from Receiving an SMTP Message

{% raw %}

	Article: Q279324
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
	
	This article describes how to prevent outbound Simple Mail Transfer Protocol
	(SMTP) messages from going to particular domains.
	
	MORE INFORMATION
	================
	
	1. Install an independent server that is running Exchange Server 5.5 and create
	  an inbound-only Internet Mail Service. Do not join the existing Exchange
	  organization.
	
	2. Double-click the Internet Mail Service object, click the Routing tab, and
	  then click the "Reroute incoming SMTP mail" check box. (This option is
	  required for POP3/IMAP4 support.)
	
	3. Enter the domains that you do not want messages to go to, and then click to
	  select the "Should be accepted as inbound" check box.
	
	4. Click the Connections tab, click Message Filtering, and then type your domain
	  in the "Prevent these domains and users" box. (Use the domain name in your
	  users' SMTP addresses.) The format should be <xxxx>@<domain>.com.
	
	5. Click to select the "Delete messages instead of moving to the Turf directory"
	  check box.
	
	For additional information about the Turf feature, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q197289 XFOR: Internet Mail Service May Not Save Turfed Messages or Saves
	  Them to an Unexpected Location
	
	  Q193926 XFOR: TURFDIR Must Be Manually Created for Message Filtering
	
	6. Stop and restart the Internet Mail Service for the changes to take effect.
	
	7. On your production Internet Mail Service, click the Connections tab, click
	  E-mail Domain, and then add the domains that you do not want messages to go.
	
	8. Click to select the "Forward all messages for this domain to host" check box,
	  and then enter the IP address or server name for the newly created Internet
	  Mail Service.
	
	9. Stop and restart the Internet Mail Service for the changes to take effect.
	
	Additional query words: ims
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
