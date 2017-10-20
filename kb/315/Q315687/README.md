---
layout: page
title: "Q315687: XCON: How to Prevent Mail Relay in Exchange 5.5 SP1 or Later"
permalink: /kb/315/Q315687/
---

## Q315687: XCON: How to Prevent Mail Relay in Exchange 5.5 SP1 or Later

{% raw %}

	Article: Q315687
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can configure the Internet Mail Service (IMS) in
	Microsoft Exchange Server 5.5 Service Pack 1 (SP1) or later to stop relaying
	unsolicited e-mail (spam). This configuration does not prevent Post Office
	Protocol version 3 (POP3) clients and Internet Message Access Protocol version 4
	(IMAP4) clients from sending Simple Mail Transfer Protocol (SMTP) messages.
	
	NOTE: Exchange Server 5.5 Service Pack 1 (SP1) permits you to set restrictions on
	routing.
	
	MORE INFORMATION
	================
	
	To set restrictions on routing, follow these steps:
	
	1. Install Exchange Server 5.5 Server Pack 1 (SP1) or later.
	
	2. Open the properties on the Exchange Server Internet Mail Service, and then
	  click the Routing tab.
	
	3. Select Reroute incoming SMTP mail, and then add all inbound mail domains.
	  (This setting is required for POP3/IMAP4 support.)
	
	4. Click Routing Restrictions. This opens a dialog box with additional
	  restrictions.
	
	  For information about these additional restrictions, see the "Additional
	  Routing Restrictions" section of this article.
	
	Additional Routing Restrictions
	-------------------------------
	
	Hosts and Clients That Successfully Authenticate:
	
	You can use this setting to relay only those messages that are sent from hosts
	and clients with valid logon information. If you have POP3 or IMAP4 users, each
	client profile must be set up to log on to the outgoing mail server.
	
	To turn on outgoing server authentication in Microsoft Outlook or Outlook
	Express, follow these steps:
	
	1. Open the properties of the default Internet account, and then click the
	  Servers tab.
	
	2. In the Incoming Mail Server box, verify that the user account information is
	  in this format: <domain>\<accountname>. The domain account
	  password follows the user account information.
	
	3. In the Outgoing Mail Server box, click to select the My server requires
	  authentication check box, and then click the Settings button.
	
	4. Click either the Use same settings as my incoming mail server check box, or
	  specify an additional account and password to use that is different from the
	  account and password for the incoming mail server.
	
	5. To save the settings, click OK.
	
	Hosts and Clients With These IP Addresses:
	
	You can use this setting to relay only those messages that are sent from a host
	whose IP addresses and subnet mask fall in the range that you specify.
	
	1. To permit only a single host or client to relay, type the IP address in the
	  following format:
	
	  "IP=<full IP address of the client>" (without the quotation marks)
	
	  For example:
	
	  "1.1.1.1, MASK=255.255.255.255" (without the quotation marks)
	
	2. To permit a range of IP addresses to relay, type the IP address in the
	  following format:
	
	  "IP=<range of IP addresses>" (without the quotation marks)
	
	  For example:
	
	  "1.1.1.0, MASK=255.255.255.0" (without the quotation marks)
	
	  This will permit the IP address range of 1.1.1.1 - 1.1.1.254 to relay.
	
	Hosts and Clients Connecting to These Internal Addresses:
	
	You can use this setting to relay only those messages that are sent by hosts and
	clients that connect to specified IP addresses on the Microsoft Exchange Server
	computer. This permits multihomed servers to restrict message relay based on the
	IP address to which the client connects. If you select this option, you must
	turn off IP forwarding on the Networking property pages in Control Panel.
	
	Specify the Hosts and Clients That Can Never Route Mail:
	
	You can use this setting to stop the relay of messages that are sent from
	specified IP addresses and subnet masks.
	
	Additional query words: junk email
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
